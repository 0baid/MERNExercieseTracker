import React from 'react'

const Exercise = (props) => {
    return (
        <>
            <tr>
                <td>{props.exercise.username}</td>
                <td>{props.exercise.description}</td>
                <td>{props.exercise.duration}</td>
                <td>{props.exercise.date}</td>
                <td><button className="btn btn-danger" onClick={props.delete(props.exercise._id)}>Delete</button></td>
            </tr>
        </>
    )
}

export default Exercise
