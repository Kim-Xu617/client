import '../Signup/Signup.scss'

import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Signup = () => {

    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        name: '',
        username: '',
        email: '',
        password: ''
      });
    
    const handleChange = (e)=>{
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(formData.password.length<6){

            alert('password at least 6 characters');
            return
        }

        if(formData.username.length<3){

            alert('username at least 3 characters');
            return
        }
        axios
        .post('http://localhost:1337/api/auth/local/register', formData)
        .then(response => {
            // Handle success.
            console.log('Well done!');
            console.log('User profile', response.data.user);
            console.log('User token', response.data.jwt);
            navigate('/login');
        })
        .catch(error => {
            // Handle error.
            console.log('An error occurred:', error.response);
            alert("Sign up failed")
        });
    }


  return (

        <div className='signup'>
            <h1>Sign up to LAMASHOP</h1>
            <form onSubmit={handleSubmit}>
                <div className='row'>
                    <div className='column'>
                        <h2>Name</h2>
                        <input type='text' name='name' onChange={handleChange}></input>
                    </div>
                    <div className='column'>
                        <h2>Username</h2>
                        <input type='text' name='username' onChange={handleChange}></input>
                    </div>
                </div>

                <div className='row'>
                    <div className="column">
                        <h2>Email</h2>
                        <input type='email' className='email' name='email' onChange={handleChange}></input>
                    </div>
                </div>
                <div className='row'>
                    <div className="column">
                        <h2>Password</h2>
                        <input type='password' className="psw" name='password' onChange={handleChange}></input>
                    </div>
                </div>
                <div className="row">
                    <button type='submit'>Create Account</button>
                </div>
                <div className="row">
                    <Link to="/Login">Sign In</Link>
                </div>
            </form>
        </div>

  )
}

export default Signup