import React from 'react';
import Navbar from './Navbar'
import Body from './Body'
import Footer from './Footer';

export default function Home({isAuthenticated, handleLogout}){
    return(
        <>
        <Navbar isAuthenticated={false} handleLogout={handleLogout}/>
        <Body/>
        <Footer/>
        </>
    )
}