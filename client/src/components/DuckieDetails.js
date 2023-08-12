import { useDuckiesContext } from "../hooks/useDuckiesContext"
const DuckieDetails = ({ duckie }) => {

    const { dispatch } = useDuckiesContext()


    const handleClick = async () => {

        const response = await fetch('http://localhost:5050/ducks/' + duckie._id, {
            method: 'DELETE'
        })
        const json = await response.json()

        if (response.ok){
                dispatch({type: 'DELETE_DUCKIE', payload: json})
        }
    }

    return (
        <div className="duckie-details">
            <h4>{duckie.name}</h4>
            <p><strong>Affection: </strong>{duckie.affection}</p>
            <p><strong>Hunger: </strong>{duckie.hunger}</p>
            <p><strong>Study: </strong>{duckie.study}</p>
            <p><strong>Play: </strong>{duckie.play}</p>
            <p><strong>Dead: </strong>{duckie.dead ? "Dead": "Still Alive"}</p>
            <p>Born: {duckie.createdAt}</p>
            <span onClick={handleClick}>delete</span>
        </div>
    )
}

export default DuckieDetails