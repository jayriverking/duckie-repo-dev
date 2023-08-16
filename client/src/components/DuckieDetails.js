// import { useDuckiesContext } from "../hooks/useDuckiesContext"
const DuckieDetails = ({ duckie, updateDuckie, deleteDuckie, outputEnding }) => {


    return (
        <div className="duckie-details">
            <h2>{duckie.name}</h2>
            <p><strong>Affection:</strong>{duckie.affection}</p>
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