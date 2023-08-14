import { useEffect, useState } from "react";
import { useDuckiesContext } from "../hooks/useDuckiesContext";
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
        const response = await fetch(`http://localhost:5050/ducks/${id}/${endpoint}`, {
            method: 'PATCH'
        })

        setDuckies(prevDuckies => {
            const updatedDuckies = prevDuckies.map(duckie => {
                const updatedDuckie = {...duckie}
                updatedDuckie[action] = updatedDuckie[action] + 10
                return duckie._id == id ? updatedDuckie : duckie
            })
            return updatedDuckies
        })
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
            console.log('my duckies',duckies)
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
                    <DuckieDetails key={duckie._id} duckie={duckie} updateDuckie={updateDuckie} deleteDuckie={deleteDuckie}/>
                ))}
            </div>
            <DuckieForm  createDuckie={createDuckie}/>
        </div>
    );
}


export default Home