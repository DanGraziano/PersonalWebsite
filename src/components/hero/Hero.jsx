import Logo from '../../assets/dan-photo.jpg'; // Import the JPEG image
import React from 'react';
import {FaGithub, FaLinkedinIn} from 'react-icons/fa';
import { FcGlobe } from "react-icons/fc";
import { MdOutlineSchool } from "react-icons/md";


export default function Hero() {
    return (
        <div className="d-flex flex-column align-items-center mt-4">
            <img src={Logo} height={200} width={200} alt="Dan Graziano" className="rounded-circle mx-auto d-block mt-4" />
            {/* TODO - move logo to left of text box */}
            <h1 className="text-5xl font-bold text-center m-2">Hi, I'm Dan.</h1>
            <p className="text-2xl text-center mb-2">I'm a Full Stack Software Engineer.</p>
            <div className='about-text-container'>
                <div className="location-text"><FcGlobe /> Portland, ME</div> 
                <div className="education-text"><MdOutlineSchool /> MS in Computer Science</div> 
                <div className="location-text"><MdOutlineSchool /> Northeastern University</div> 
            </div>

            <div className="social-logos m-2">
                <a className="m-2" href="https://github.com/DanGraziano"><FaGithub /></a>
                <a className="m-2" href="https://www.linkedin.com/in/danielgraziano/"><FaLinkedinIn /></a>
            </div>

            <div className="contact-container">
                <button className="btn btn-primary mb-4 mt-3 mb-lg-0">Reach out</button>
            </div>
        </div>
    );
}