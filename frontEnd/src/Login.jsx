import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'

function Login() {
    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const navigate = useNavigate()
    axios.defaults.withCredentials =  true;
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8081/login', values)
        .then(res => {
            if(res.data.Status === "Success") {
                navigate('/')
            } else {
                alert(res.data.Error)
            }
         })
        .then(err => console.log(err));
    }
    
  return (
    <div>
        <form onSubmit={handleSubmit}>

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
            <Link to="/register">signup</Link>
        </form>
    </div>
  )
}

export default Login