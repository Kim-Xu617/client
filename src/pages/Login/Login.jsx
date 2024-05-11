import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "../Login/Login.scss"
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const Login = ({onChangeLoggedIn}) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    identifier: '',
    password: '',
  })
  const handleSubmit = (e) =>{
    e.preventDefault();
    axios
      .post('http://localhost:1337/api/auth/local', formData)
      .then(response => {
        // Handle success.
        console.log('Well done!');
        console.log('User profile', response.data.user);
        console.log('User token', response.data.jwt);
        onChangeLoggedIn();
        navigate('/');
    })
    .catch(error => {
      // Handle error.
      console.log('An error occurred:', error.response);
      alert("Login failed")
  });
  }

  const handleChange = (e) =>{
    setFormData({
      ...formData,
      [e.target.name]:e.target.value
    })
  }

  return (
    <div className='login'>
      <h1>Sign in to LAMASTORE</h1>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="column">
            <h2>Username or email</h2>
            <input type='text' name="identifier" onChange={handleChange}></input>
          </div>
        </div>
        <div className="row">
          <div className="column">
            <h2>Password</h2>
            <input type="password" name="password" onChange={handleChange}></input>
          </div>
        </div>
        <div className="row">
          <button type='submit'>Sign In</button>
        </div>
        <div className="row">
          <p>Don't have an account?</p>
          <Link to="/signup">Sign up</Link>
        </div>
      </form>
    </div>
  )
}

export default Login