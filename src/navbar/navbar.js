import  { useState, useEffect } from "react";
import ResumePDF from "../assets/Soumya-Guchhait.pdf";
import "./navbar.css";

const Navbar = () => {
  const [hasMenuOpen, setHasMenuOpen] = useState(false);
  const [isScrollLocked, setIsScrollLocked] = useState(false);

  const dropdown = () => {
    setHasMenuOpen(!hasMenuOpen);
    setIsScrollLocked(!isScrollLocked);
  };

  const toggleMenu = () => {
    const show = document.querySelector('.menu-container');
    const a = document.querySelector('.dropdown-items');
    a.classList.toggle('a');
  };

  useEffect(() => {
    const show = document.querySelector('.menu-container');
    show.addEventListener('click', toggleMenu);

    return () => {
      show.removeEventListener('click', toggleMenu);
    };
  }, []);

  useEffect(() => {
    if (isScrollLocked) {
      window.scrollTo(0, 0);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isScrollLocked]);

  const slow = (e, target) => {
    e.preventDefault();
    const a = document.querySelector('.dropdown-items');
    const targetElement = document.querySelector(target);
    
    if (targetElement) {
     
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        
      });
      a.classList.toggle('a');
      setIsScrollLocked(!isScrollLocked);
    }
   
  };

  return (
    <>
      <div className="navbar-container">
        <div className="navbar-logo">S</div>
        <div className="navbar-items">
          <ul>
            <li className="navbar-items-button">
              <a href="#about" onClick={(e) => slow(e, '#about')}>About</a>
            </li>
            <li className="navbar-items-button">
              <a href="#education" onClick={(e) => slow(e, '#education')}>Education</a>
            </li>
            <li className="navbar-items-button">
              <a href="#contact" onClick={(e) => slow(e, '#contact')}>Contact</a>
            </li>
            <li className="resume-button">
              <a href={ResumePDF} download target="_blank" rel="noopener noreferrer" >
                Resume
              </a>
            </li>
            <li>
            
            </li>
          </ul>
        </div>
        <div className="menu-container" role="button" onClick={dropdown} >
	          <div className="top-line" id="top-line"></div>
          	<div className="middle-line" id="middle-line"></div>
          	<div className="bottom-line" id="bottom-line"></div>
	
            </div>
            <div className="dropdown-items">
                <div className="dropdown-list "><a href="#about" onClick={(e) => slow(e, '#about')}>About</a></div>
                <div className="dropdown-list"> <a href="#education" onClick={(e) => slow(e, '#education')}>Education</a></div>
                <div className="dropdown-list"><a href="#contact" onClick={(e) => slow(e, '#contact')}>Contact</a></div>
                <div className="dropdown-list"><a href={ResumePDF} download target="_blank" rel="noopener noreferrer" >
                Resume
              </a></div>

            </div>
      </div>
    </>
  );
};

export default Navbar;