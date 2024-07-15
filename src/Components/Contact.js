import React, {useState} from 'react';
import Navbar from './Navbar';
import Footer from "./Footer";
import '../style/contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import axios from 'axios';


export default function Contact(props) {
  const logoStyle = {
    margin: '0 10px 0 0',
    color: 'black',
  };

  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    oname: '',
    mail: ''
  });

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const response = await axios.post('http://localhost:5000/api/form1', formData);
      console.log('Form data submitted:', response.data);
      window.alert('Your data has been saved. We will contact you shortly, have a nice day');
      setFormData({
        fname: '',
        lname: '',
        oname: '',
        mail: ''
      })
    }
    catch(error){
      console.error('Error submitting form data:', error);
      window.alert('Error submitting form data. Please try again');
    }
  };

  return (
    <>
      <Navbar button1 = "Login" button2 = "Signup"/>
      <div className="contact-main">
        <div className="contact-grid">
          <div className='contact-grid-1'>
            <h2>{props.title}</h2>
            <p>Phone:</p>
            <p>+9190909090</p>
            <p>Email:</p>
            <p>medtrail.support@gmail.com</p>
            <div className='logo'>
              <a href="/"><FontAwesomeIcon icon={faFacebook} size='2x' style={logoStyle}/></a>
              <a href="/"><FontAwesomeIcon icon={faLinkedin} size='2x' style={logoStyle}/></a>
              <a href="/"><FontAwesomeIcon icon={faTwitter} size='2x' style={logoStyle}/></a>
              <a href="/"><FontAwesomeIcon icon={faYoutube} size='2x' style={logoStyle}/></a>
            </div>
          </div>
          <div className='div-form'>
            <h3>Contact Us</h3>
            <hr />
            <div className='form-main'>
              <form onSubmit={handleSubmit}>
                <label htmlFor="fname">First Name</label>
                <input type="text" name="fname" id="fname" value={formData.fname} onChange={handleChange} required/>
                <label htmlFor="lname">Last Name</label>
                <input type="text" name="lname" id="lname" value={formData.lname} onChange={handleChange} required/>
                <label htmlFor="oname">Organization Name</label>
                <input type="text" name="oname" id="oname" value={formData.oname} onChange={handleChange} required/>
                <label htmlFor="mail">Email Address</label>
                <input type='email' name="mail" id="mail" value={formData.mail} onChange={handleChange} required/>
                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}
