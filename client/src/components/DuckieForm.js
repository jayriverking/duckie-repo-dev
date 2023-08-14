import { useState } from "react";
import { useDuckiesContext } from "../hooks/useDuckiesContext";

const DuckieForm = ({ createDuckie }) => {
    // const { dispatch } = useDuckiesContext()
    // each of the form attributes need a state (I only have one)
    const [name, setName] = useState('')
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        // prevents refreshing (= default behavior)
        e.preventDefault()
        // duckie object to send
        const duckie = { name }
        createDuckie(duckie)
        // // sending a post request
        // const response = await fetch('http://localhost:5050/ducks', { method: 'POST',  body: JSON.stringify(duckie), headers: {'Content-Type': 'application/json'} })

        // const json = await response.json()
        
        // if(!response.ok){
        //     setError(json.error)
        // }
        // if(response.ok){
        //     setError(null)
        //     setName('')
        //     console.log('new duckie added', json)
        //     // dispatch({type: 'CREATE_DUCKIE', payload: json})
        // }
    }

    return (
        <form className="create" onSubmit={handleSubmit}>

            <h3>Add A Duckie</h3>

            <label>Name: </label>
            <input 
            type="text"
            onChange={(e) => {
                setName(e.target.value)
            }}
            value={name}
            placeholder="Duckie Name"
             />

            <button>Add Duckie</button>
            {/* {error & <div className="error">Error:{error}</div>} */}
        </form>
    )
}

export default DuckieForm