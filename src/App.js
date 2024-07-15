import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Login from './Components/Login';
import Signup from './Components/Signup';
import ForgotPassword from './Components/ForgotPassword';
import PatientDashboard from './Components/PatientDashboard';
import { useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import DoctorDashboard from './Components/DoctorDashboard';

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if(token){
      const decodedToken = jwtDecode(token);
      setIsAuthenticated(true);
      setUser(decodedToken);
    }
  }, []);

  const handleLogin = (token) => {
    localStorage.setItem('token', token);
    const decodedToken = jwtDecode(token);
    setIsAuthenticated(true);
    setUser(decodedToken);
  }

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    setUser(null);
  }

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact title="MedTrail"/>}/>
        <Route path='/login' element={<Login handleLogin={handleLogin}/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/forgetpassword' element = {<ForgotPassword/>}/>
        <Route path='/dashboard' element = {isAuthenticated ? (
          user.role === 'doctor' ? (
            <DoctorDashboard user = {user} handleLogout={handleLogout}/>
          ) : (
            <PatientDashboard user = {user} handleLogout={handleLogout}/>
          )
        ) : (
          <Navigate to = "/login"/>
        )}/>
      </Routes>
    </Router>
  );
}

export default App;
