import { useState } from "react";

const DuckieForm = ({ createDuckie }) => {
    // each of the form attributes need a state (I only have one)
    const [name, setName] = useState('')
    // const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        // prevents refreshing (= default behavior)
        e.preventDefault()
        // duckie object to send
        const duckie = { name }
        createDuckie(duckie)
    
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
        </form>
    )
}

export default DuckieForm