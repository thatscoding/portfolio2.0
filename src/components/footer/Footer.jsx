import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {BsLinkedin} from 'react-icons/bs'
import {FiInstagram} from 'react-icons/fi'


const Footer = () => {
  return (
    <footer>
       <a href="#" className='footer__logo'>CodeWithSachin</a>

       <ul className="permalinks">
       <li><a href="#">Home</a></li>
       <li><a href="#about">About</a></li>
       <li><a href="#experience">Experiece</a></li>
       <li><a href="#service">Service</a></li>
       <li><a href="#portfolio">Portfolio</a></li>
       <li><a href="#testimonials">Testimonials</a></li>
       <li><a href="#contact">Contact</a></li>
       </ul>

       <div className="footer__socials">
       <a href="https://github.com/thatscoding"><FaFacebookF/></a>
       <a href="https://instagram.com"><FiInstagram/></a>
       <a href="https://www.linkedin.com/in/sachinshakya121/"><BsLinkedin/></a>
       </div>

       <div className="footer__copyright">
        <small>&copy; 2022 codingMate. All Rights reserved</small>
       </div>
    </footer>
  )
}

export default Footer