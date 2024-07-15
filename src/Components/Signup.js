import React, {useState} from 'react';
import Footer from "./Footer";
import Navbar from './Navbar';
import '../style/signup.css';
import axios from 'axios';

export default function Signup() {

  const [signupData, setSignupData] = useState({
    fname: '',
    lname: '',
    mail: '',
    role: 'patient',
    pword: '',
    cpword: ''
  });

  const handleChange = (e) => {
    const {name, value} = e.target;
    setSignupData({
      ...signupData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const response = await axios.post('http://localhost:5001/api/form2', signupData);
      console.log('Form data submitted:', response.data);
      window.alert('Profile Created');
      setSignupData({
        fname: '',
        lname: '',
        mail: '',
        role: 'patient',
        pword: '',
        cpword: '',
      })
    }
    catch(error){
      console.error('Error submitting form data:', error);
      window.alert('Error submitting form data. Please try again');
      setSignupData({
        fname: '',
        lname: '',
        mail: '',
        role: 'patient',
        pword: '',
        cpword: '',
      })
    }
  };

  return (
    <>
      <Navbar button1 = "Login" button2 = "Signup"/>
      <div className="login-main">
        <h2>Setup your account</h2>
        <div className="login-container">
          <form onSubmit={handleSubmit}>
            <label htmlFor="fname">First Name</label>
            <input type="text" name="fname" id="fname" value={signupData.fname} onChange={handleChange} required/>
            <label htmlFor="lname">Last Name</label>
            <input type="text" name="lname" id="lname" value={signupData.lname} onChange={handleChange} required/>
            <label htmlFor="mail">Email</label>
            <input type="email" name="mail" id="mail" value={signupData.mail} onChange={handleChange} required/>
            <label htmlFor="role">Role</label>
            <select name="role" id="role" value = {signupData.role} onChange={handleChange} required>
              <option value="doctor">Doctor</option>
              <option value="patient">Patient</option>
            </select>
            <label htmlFor="pword">Password</label>
            <input type="password" name="pword" id="pword" value={signupData.pword} onChange={handleChange} required/>
            <label htmlFor="cpword">Confirm Password</label>
            <input type="password" name="cpword" id="cpword" value={signupData.cpword} onChange={handleChange} required/>
            <button type="submit">Sign Up</button>
          </form>
        </div>
      </div>
      <Footer/>
    </>
  );
}
