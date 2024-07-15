import React from 'react';
import '../style/body.css';
import Team from '../img/team.jpg';
import {Link} from 'react-router-dom';

export default function Body(){
    return(
        <>
        <div className='div-main'>
            <div className='div1'>
                <h2>A Platform for patient flow and interaction that fosters pleasure and confidence</h2>
                <button><Link to="/contact">Book Your Appointment</Link></button>    
            </div>
            <div className='div-feature'>
                <div className='feature-1'>Boost Patient Experience</div>
                <div className='feature-2'>Enhance Patient Movement</div>
                <div className='feature-3'>Promote Patient Contentment</div>
            </div>
            <div className='div-grid'>
                <div className='div-grid-1'>
                    <h2>A suitable location to book a patient appointment</h2>
                    <hr />
                    <p>We improve patient experience by scheduling more frequent appointments and addressing pain points in the patient journey with our scalable solutions</p>
                    <button><Link to="/contact">Book an appointment</Link></button>
                </div>
                <div className='div-grid-2'></div>
                <div className='div-grid-3'></div>
                <div className='div-grid-1'>
                    <h2>A centralized storage platform to store patient reports</h2>
                    <hr />
                    <p>We provide a way to store patient reports that can be accessed by patients and doctors, whenever and wherever they want</p>
                </div>
            </div>
            <div className='div-grid-black'>
                <div className='div-black'>
                    <img src={Team} alt="Team" />
                </div>
                <div className='div-grid-black-1'>
                    <h2>We are specialist in the path of patient</h2>
                    <hr />
                    <p>We have been assisting healthcare companies to improve patient flow, enhance patient engagement, and enhance their online presence. Whether you run a multi-facility healthcare company, a big hospital group, or a single-provider clinic, we understand the challenges you face on a daily basis.</p>
                    <p>We can assist you with arrivals, visit visibility, patient involvement, listing and review management, and more.</p>
                </div>
            </div>
            <div className='div-grid-1-center'>
                <h2>Utilize our adaptable solutions to improve the patient experience</h2>
                <hr />
                <p>Whether you are having trouble with patient engagement, visibility, wait times, or online reputation management, our solutions can be tailored to meet your specific needs.</p>
            </div>
            <div className='div-grid-column-3'>
                <div className='div-card'>
                    <h2>Your objectives</h2>
                    <p>We learn about your problems and develop a solution that satisfies your requirements.</p>
                </div>
                <div className='div-card'>
                    <h2>Our knowledge</h2>
                    <p>Benefit from our IT integration and workflow knowledge</p>
                </div>
                <div className='div-card'>
                    <h2>Complete accomplishment</h2>
                    <p>Our skilled staff makes sure your personalized solution is operational as soon as feasible.</p>
                </div>
            </div>
        </div>
        </>
    )
}