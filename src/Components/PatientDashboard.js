import React from 'react';
import Navbar from './Navbar';
import '../style/loginhome.css'

export default function PatientDashboard({user, handleLogout}) {
  return (
    <>
        <Navbar isAuthenticated={true} handleLogout={handleLogout}/>
        <div className='dashboard-main'>
            <h1>Welcome to MedTrail, {user ? user.name : 'User'}</h1>
            <div className='div-grid-column-3'>
                <div className='div-card'>
                    <h2>Your Documents</h2>
                </div>
                <div className='div-card'>
                    <h2>Your Appointments</h2>
                </div>
                <div className='div-card'>
                    <h2>Upload Your Document</h2>
                </div>
            </div>
        </div>
    </>
  );
}
