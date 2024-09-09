import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function Home() {
    const [auth, setAuth] = useState(false);
    const [message, setMessage] = useState('')
    const [name, setName] = useState('')

    axios.defaults.withCredentials =  true;
    useEffect(() =>{
        axios.get('http://localhost:8081')
        .then(res => {
            if(res.data.Status === "Success") {
                setAuth(true)
                setName(res.data.name)
            } else {
                setAuth(false)
                setMessage(res.data.Error)
            }
         })
        .then(err => console.log(err));
    }, [])

    const handleDelete = () => {
        axios.get('http://localhost:8081/logout')
        .then(res => {
            location.reload(true);
        }).catch(err => console.log(err));
        
    }
   
  return ( 
    <div>
        {
            auth ?
                <div>
                    <h1>you are authorized --- {name}</h1>
                    <button onClick={handleDelete}>logout</button>
                </div>
                :
                <div>
                    <h1>{message}</h1>
                    <Link to="/login">login</Link>
                </div>

        }
    </div>
  )
}

export default Home