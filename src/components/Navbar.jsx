import React from "react";
import sdlogomain from "../assets/sdlogomain.png"
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <a href="/" aria-label="Home">
            <img src={sdlogomain} className="mx-2" width={60} height={40} alt="logo"/>
            </a>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-3xl">
            <a href="https://www.linkedin.com/in/sneha-dhawale-950231134/" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="LinkedIn">
                <FaLinkedin/>
            </a>
            <a href="https://github.com/sneha28" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="GitHub">
                <FaGithub/>
            </a>
         
         
          
        </div>
    </nav>
  );
};

export default Navbar;
