import { useEffect, useState } from "react";
// import { useDuckiesContext } from "../hooks/useDuckiesContext";
import axios from "axios";
// import fetch from 'fetch';

// components
import DuckieDetails from '../components/DuckieDetails';
import DuckieForm from "../components/DuckieForm";

const Home = () => {
    // const {duckies, dispatch} = useDuckiesContext()
    // console.log(duckies)

    const [duckies, setDuckies]  = useState([])

    const createDuckie = async (data) => {
        const response = await axios.post('http://localhost:5050/ducks', data)

        setDuckies(prevDuckies => {
            return [...prevDuckies, response.data]
        })
    }

    // I want to output an 'ending' statement as a popup once affection stats reach 100; 
    // to let users know they've reached the end... but don't know where to put it :/
    const outputEnding = (id) => {
        const duckie = duckies.filter((duckie) => duckie._id == id)[0]
        let result = ''
        if (duckie.affection > 99){

            

            if (duckie.study > 90) {
                result = 'a Lawyer'
            }
            else if (duckie.hunger > 90){
                result = 'a Gastronomist'
            }
            else if (duckie.play > 90 && duckie.hunger > 40){
                result = 'an Anti-jobs Hippie'
            }
            else if (duckie.study > 50 && duckie.play > 50) {
                result = 'a Regular Rubber Duckie';
            }
            else if (duckie.play < 50 && duckie.study < 50){
                result = 'a Conspiracy Theorist'
            }
        }
        // window.alert
        if(result){
        return window.alert(`Your duckie, [${duckie.name}] has all grown up! It turned out to be ${result}`)
    }}

    const updateDuckie = async (id, endpoint, action) => {
        // console.log(id)
        await fetch(`http://localhost:5050/ducks/${id}/${endpoint}`, {
            method: 'PATCH'
        })
        // helper function to make sure stats stay at 100 max;
        const checkDuckie = (duckie) => {
            return duckie[action] < 100 ? duckie[action] += 10 : duckie
        }

        
        setDuckies(prevDuckies => {
            const updatedDuckies = prevDuckies.map(duckie => {
                const updatedDuckie = {...duckie}
                checkDuckie(updatedDuckie)
                return duckie._id === id ? updatedDuckie : duckie
            })
            return updatedDuckies
        })
        if(endpoint == 'pet'){
            return outputEnding(id)
        }
        // outputEnding(id)
    }
 

    const deleteDuckie = (id) => {
        axios.delete(`http://localhost:5050/ducks/${id}`).then(
            setDuckies(prevDuckies => {
                const filteredDuckies = prevDuckies.filter( duckie => duckie._id !== id)
                return filteredDuckies
            })
        )
    };

    useEffect(()=>{
        const fetchDuckies = async () => {
// the fetch address should be changed to backend db once deployed, I think! >> this <sending requests to localhost> thing is only for the development phase!!

            const duckies = await axios.get('http://localhost:5050/ducks')
            // console.log('my duckies',duckies)
            setDuckies(duckies.data)
        }
        fetchDuckies()
    }, [])

    return (
        <div className="home">
            <div className="duckies">
                {/* only if duckies exist, map through duckies (since initial value is NULL) */}
                {/* this .map function uses () => () because it's returning html (= template), not JS! (= no explicit "return" keyword is used!) */}
                {duckies && duckies.map((duckie) => (
                    <DuckieDetails key={duckie._id} duckie={duckie} updateDuckie={updateDuckie} deleteDuckie={deleteDuckie} outputEnding={outputEnding}/>
                ))}
            </div>
            <DuckieForm  createDuckie={createDuckie}/>
        </div>
    );
}


export default Home