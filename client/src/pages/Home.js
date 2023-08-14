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

    const updateDuckie = async (id, endpoint, action) => {
        console.log(id)
        await fetch(`http://localhost:5050/ducks/${id}/${endpoint}`, {
            method: 'PATCH'
        })
        // helper function to make sure stats stay under 100 max;
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
    }
    // I want to output an 'ending' statement as a popup once affection stats reach 100; 
    const outputEnding = async (id) => {
        const duckie = await axios.get(`http://localhost:5050/ducks${id}`)
        if (duckie && duckie.data.affection > 99){

            let result = 'a Regular Rubber Duckie';

            if (duckie.study > 90) {
                result = 'a Lawyer'
            }
            else if (duckie.hunger > 90){
                result = 'a Gastronomist'
            }
            else if (duckie.play > 90){
                result = 'Anti-jobs Hippie'
            }
            else if (duckie.play > 80 && duckie.study > 60){
                result = 'a Conspiracy Theorist'
            }
            // window.alert
            console.log(`Your duckie, ${duckie.name} has all grown up! It turned out to be ${result}`)
        }
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
            
        //     const response = await fetch('http://localhost:5050/ducks')
        //     const json = await response.json()

        //     if (response.ok){
        //         dispatch({type: 'SET_DUCKIES', payload: json})
        //     }
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