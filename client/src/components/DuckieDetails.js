import { useDuckiesContext } from "../hooks/useDuckiesContext"
const DuckieDetails = ({ duckie, updateDuckie, deleteDuckie }) => {

    // const { dispatch } = useDuckiesContext()

    // // handle delete
    // const handleDelete = async () => {
    //     const response = await fetch('http://localhost:5050/ducks/' + duckie._id, {
    //         method: 'DELETE'
    //     })
    //     const json = await response.json()

    //     if (response.ok){
    //             dispatch({type: 'DELETE_DUCKIE', payload: json})
    //     }
    // }
    // // handle feed
    // const handleFeed = async () => {
    //     const response = await fetch(`http://localhost:5050/ducks/${duckie._id}/feed`, {
    //         method: 'PATCH'
    //     })
    //     // .then(console.log("feeding successful!"))
    //     const json = await response.json()
    //     if(response.ok){
    //         dispatch({type:'UPDATE_DUCKIE', payload: json})
    //     }

    // }
    // // handle other actions
    // const handleAction = async (action) => {
    //     const response = await fetch(`http://localhost:5050/ducks/${duckie._id}/${action}`, {
    //         method: 'PATCH'
    //     })
    //     const json = await response.json()
    //     if (response.ok){
    //         dispatch({type: 'UPDATE_DUCKIE', payload: json})
    //     }
    // }
    // handle play, pet, study
    // const handlePlay = () => handleAction("play")
    // const handlePet = () => handleAction("pet")
    // const handleStudy = () => handleAction("study")


    return (
        <div className="duckie-details">
            <h2>{duckie.name}</h2>
            <p><strong>Affection: </strong>{duckie.affection}</p>
            <button onClick={() => updateDuckie(duckie._id, 'pet', 'affection')}>Pet</button>
            <p><strong>Hunger: </strong>{duckie.hunger}</p>
            <button onClick={() => updateDuckie(duckie._id, 'feed', 'hunger')}>Feed</button>
            <p><strong>Study: </strong>{duckie.study}</p>
            <button onClick={() => updateDuckie(duckie._id, 'study', 'study')}>Study</button>
            <p><strong>Play: </strong>{duckie.play}</p>
            <button onClick={() => updateDuckie(duckie._id, 'play', 'play')}>Play</button>
            <p><strong>Status: </strong>{duckie.dead ? "Dead": "Alive"}</p>
            <p><em>Born: {duckie.createdAt}</em></p>
            <button onClick={() => deleteDuckie(duckie._id)}><strong>DELETE</strong></button>
        </div>
    )
}

export default DuckieDetails