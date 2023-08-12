import { useEffect } from "react";
import { useDuckiesContext } from "../hooks/useDuckiesContext";

// components
import DuckieDetails from '../components/DuckieDetails';
import DuckieForm from "../components/DuckieForm";

const Home = () => {
    const {duckies, dispatch} = useDuckiesContext()

    useEffect(()=>{
        const fetchDuckies = async () => {
// the fetch address should be changed to backend db once deployed, I think! >> this <sending requests to localhost> thing is only for the development phase!!
            const response = await fetch('http://localhost:5050/ducks')
            const json = await response.json()

            if (response.ok){
                dispatch({type: 'SET_DUCKIES', payload: json})
            }
        }
        fetchDuckies()
    }, [])

    return (
        <div className="home">
            <div className="duckies">
                {/* only if duckies exist, map through duckies (since initial value is NULL) */}
                {/* this .map function uses () => () because it's returning html (= template), not JS! (= no explicit "return" keyword is used!) */}
                {duckies && duckies.map((duckie) => (
                    <DuckieDetails key={duckie._id} duckie={duckie} />
                ))}
            </div>
            <DuckieForm />
        </div>
    );
}


export default Home