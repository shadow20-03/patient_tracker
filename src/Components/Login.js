import React, { useState } from 'react';
import Footer from "./Footer";
import Navbar from './Navbar';
import {Link} from 'react-router-dom';
import '../style/login.css';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

export default function Login({handleLogin}) {

  const [loginData, setLoginData] = useState({
    mail: '',
    pword: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const {name, value} = e.target;
    setLoginData({
      ...loginData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const response = await axios.post('http://localhost:5002/api/login', loginData);
      console.log('Form data submitted:', response.data);
      window.alert('Login Successful');
      setLoginData({
        mail: '',
        pword: ''
      });
      handleLogin(response.data.token);
      navigate('/dashboard');
    }
    catch(error){
      console.error('Error submitting form data:', error);
      window.alert('Login Unsuccessful. Please try again');
    }
  };

  return (
    <>
      <Navbar button1 = "Login" button2 = "Signup"/>
      <div className="login-main">
        <h2>Login to your account</h2>
        <div className="login-container">
          <form onSubmit={handleSubmit}>
            <label htmlFor="mail">Email</label>
            <input type="email" name="mail" id="mail" value={loginData.mail} onChange={handleChange} required/>
            <label htmlFor="pword">Password</label>
            <input type="password" name="pword" id="pword" value={loginData.pword} onChange={handleChange} required/>
            <button type="submit">Login</button>
          </form>
          <a href="/forgetpassword">Forget Password</a>
          <Link to="/signup">New User ? Create an account</Link>
        </div>
      </div>
      <Footer/>
    </>
  );
}
