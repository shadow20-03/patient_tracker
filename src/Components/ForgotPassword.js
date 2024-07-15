import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import axios from 'axios';

export default function ForgotPassword() {

    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleForgotPassword = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5003/api/forgotpassword', { email });
            setMessage(response.data.message);
        }
        catch (error) {
            setMessage('Error sending reset password email');
        }
    }

    return (
        <>
            <Navbar />
            <div className='login-main'>
                <div className="login-container">
                    <form onSubmit={handleForgotPassword}>
                        <label htmlFor="mail">Email</label>
                        <input type="email" name="mail" id="mail" placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)} required />
                        <button type="submit">Send Reset Link</button>
                    </form>
                    {message && <p>{message}</p>}
                </div>
            </div>
            <Footer />
        </>
    );
}

