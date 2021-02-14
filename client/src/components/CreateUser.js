import axios from 'axios'
import React, {useState} from 'react'

const CreateUser = () => {

    const [userName, setUserName] = useState('')
    const onSubmit = () => {
        const user = {
            username:userName,
        }
        try {
            axios.post('http://localhost:5000/users/add',user).then((res) => {console.log(res.data)});
        } catch (error) {
            console.log(error);
        }
    }
    const onChange = (e) => {
        setUserName(e.target.value)
        //console.log(userName)
    }
    return (
        <div>
            <h3>Create New Exercise</h3>
                <form onSubmit={onSubmit}>
                   <div className="form-group">
                        <label>UserName: </label>
                        <input className="form-control" onChange={onChange}></input>
                   </div>
                   <div className="form-group">
                       <input type="submit" value="Submit" className="btn btn-primary float-right"/>
                   </div>
                </form>
        </div>
    )
}

export default CreateUser
