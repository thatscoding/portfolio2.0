import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
         <div className="about__me-image">
           <img src={ME} alt="About Image" />
         </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
          <article className="about__card">
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>1+ Years working</small>
            </article>

            <article className="about__card">
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>20+ happy Clients</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>15+ completed</small>
            </article>
          </div>
            <p>A quick learner, enthusiastic team player, and ability to work in challenging environments.  My hobbies include listening to music and watching documentaries, traveling, and interacting with different people. My goal is to become a valuable asset in an organization where my hard work can be recognized and appreciated resulting in growth..</p>
            <a href="#contact" className='btn btn-primary'>Let's Tolk</a>
        </div>
      </div>
    </section>
  )
}

export default About