import React, {useEffect,useState} from 'react'
import axios from 'axios';
import Execise from './Exercise';


const ExercisList = () => {
    
    const [exercises, setExercises] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/exercises').then((res) => {setExercises(res.data)}).catch((err) => {console.log(err)});
    });

    const deletExercise = (id) => {
        axios.delete('http://localhost:5000/exercises/remove/'+id).then((res) => {console.log(res)});
    }
    


    return (
        <>
            <h2>Logged Exercise</h2>
            <table className="table">
                <thead className="thead-light">
                    <tr>
                        <th>Username</th>
                        <th>Description</th>
                        <th>Duration</th>
                        <th>Date</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {exercises.map((exercise) => {
                        return(
                            <tr>
                                <td>{exercise.username}</td>
                                <td>{exercise.description}</td>
                                <td>{exercise.duration}</td>
                                <td>{exercise.date.split('T')[0]}</td>
                                <td><a href="#" className="btn btn-danger" onClick={() => {deletExercise(exercise._id)}}>Delete</a></td>
                            </tr>
                        )
                    })
                    }
                </tbody>
            </table>
        </>
    )
}

export default ExercisList
