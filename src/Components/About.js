import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import '../style/about.css';
import Support from '../img/support.jpg';

export default function About() {
  const divColor = {
    backgroundColor: 'white',
  }
  return (
    <>
      <Navbar button1 = "Login" button2 = "Signup"/>
      <div className="container">
        <div className="div-main-1">
          <h2>Our current offering</h2>
          <hr />
          <p>MediTrail has developed to address issues with patient flow and status throughout the ED as well as to guarantee smooth patient transitions throughout the whole healthcare system, from pre-visit to post-charge. Numerous issues pertaining to patient flow, patient engagement, and reputation management have been addressed by the software's expansion.</p>
          <p>Our entire business strategy is based on resolvfing these issues in order to boost patient satisfaction and boost income for healthcare organizations.</p>
          <p>Learn more about the services we provide. Speak with us!</p>
          <button><a href="/">Speak to an expert</a></button>
        </div>
        <div className="div-main-1" style={divColor}>
          <h2>What distinguishes us</h2>
          <hr />
          <p>The original motivation behind MedTrail was a desire to use software to address a problem. The driving force for our company's operation even now is this desire to overcome obstacles. We are an inquisitive group by nature. We sincerely hope to comprehend your problems and assist in resolving them. For this reason, our software has been designed to be completely adaptable. All of the solutions match the problems you want us to fix.</p>
          <p>We never provide our product pitch in an elevator on our initial encounter with a client. We are curious about YOU! We would like to comprehend your terminology and workflow. Prior to anything else, we must comprehend your difficulties and the patient experience within your medical facility. In this manner, we can guarantee your immediate success with MedTrail. This, in our opinion, sets us apart from the vast majority of other healthcare software providers. It is not in our DNA to sell hard. A sincere desire to comprehend and address your difficulties.</p>
          <p>This ethos has been carefully considered when assembling the entire team. Each member of the team possessess a true enthusiasm for their work and is an expert in patient flow and workflow.</p>
        </div>
        <div className="grid">
          <div className='div-grid-img'>
            <img src={Support} alt="Support" />
          </div>
          <div className='div-grids'>
            <h2>We are specialist in the path of patient</h2>
            <hr />
            <p>We have been assisting healthcare companies to improve patient flow, enhance patient engagement, and enhance their online presence. Whether you run a multi-facility healthcare company, a big hospital group, or a single-provider clinic, we understand the challenges you face on a daily basis.</p>
            <p>We can assist you with arrivals, visit visibility, patient involvement, listing and review management, and more.</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}