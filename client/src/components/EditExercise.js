import React,{useState,useEffect,useRef} from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';


const EditExercise = (props) => {

    const [userName, setuserName] = useState('');
    const [description, setdescription] = useState('');
    const [duration, setDuration] = useState(0);
    const [date, setDate] = useState(new Date);
    const [users, setUsers] = useState([]);
    const [exercise, setExercise] = useState([])

    const onChangeUsername = (e) => {
        setuserName(e.target.value);
    }
    const onChangeDescription = (e) => {
        setdescription(e.target.value);
    }
    const onChangeDuration = (e) => {
        setDuration(e.target.value);
    }
    const onChangeDate = (date) => {
        setDate(date);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const newExercise = {
            username : userName,
            description : description,
            duration : duration,
            date :date
            
        }

        try {
            console.log(newExercise);
            axios.put('http://localhost:5000/exercises/update/'+props.match.params.id,newExercise).then((res)=>{console.log(res)}).catch((err) => {console.log(err)});
        } catch (error) {
            console.log(error);
        }

        console.log(exercise);
    }

    useEffect(() => {
        axios.get('http://localhost:5000/exercises/'+props.match.params.id).then((res) => {setExercise(res.data)}).catch((err) => {console.log(err)});
        console.log(exercise);
        axios.get('http://localhost:5000/users/').then((res) => {setUsers(res.data)}).catch((err) => {console.log(err)}).catch((err) => {console.log(err)});
    },[])

    const ref = useRef("userInput")


    return (
        <>
            <div>
                <h3>Create New Exercise</h3>
                <form onSubmit = {onSubmit}>
                    <div className="form-group">
                        <label>Username: </label>
                        <select ref={ref}
                            required
                            className="form-control"
                            value = {userName}
                            onChange = {(e) => {onChangeUsername(e)}}>
                                {users.map((user) => {
                                    return <option
                                        key={user.username}
                                        value={user.username}>{user.username}</option>;
                                })}
                            </select>
                    </div>
                    <div className="form-group">
                        <label>Description: </label>
                        <input type="text" required className="form-control" value={exercise.description} onChange={(e) => {onChangeDescription(e)}} value={description}/>
                    </div>
                    <div className="form-group">
                        <label>Duration: </label>
                        <input type="text" required className="form-control" onChange={(e) => onChangeDuration(e)} value={duration}/>
                    </div>
                    <div className="form-group">
                        <label>Date : </label>
                        <DatePicker
                            selected={date}
                            onChange={onChangeDate}/>
                    </div>
                    <div className="form-group">
                        <input type="submit" className="btn btn-primary" value="Create Exercise Log"/>
                    </div>
                </form>
            </div>
        </>
    )
}

export default EditExercise
