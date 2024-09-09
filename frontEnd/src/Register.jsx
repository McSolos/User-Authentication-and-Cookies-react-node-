import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'

const Register = () => {
    const [values, setValues] = useState({
        name:'',
        email: '',
        password: ''
    })

    const navigate = useNavigate()
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8081/register', values)
        .then(res => {
            if(res.data.Status === "Success") {
                navigate('/login')
            } else {
                alert("error")
            }
         })
        .then(err => console.log(err));
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name"><strong>Name</strong></label>
                <input type="text" placeholder='enter name' name='name'
                onChange={e => setValues({...values, name: e.target.value})}/>
            </div>

            <div>
                <label htmlFor="email"><strong>Email</strong></label>
                <input type="email" placeholder='enter email' name='email'
                onChange={e => setValues({...values, email: e.target.value})}/>
            </div>

            <div>
                <label htmlFor="password"><strong>password</strong></label>
                <input type="password" placeholder='enter password' name='password'
                onChange={e => setValues({...values, password: e.target.value})}/>
            </div>
            <button type='submit'> submit</button>
            <Link to="/login">signup</Link>

        </form>
    </div>
  )
}

export default Register