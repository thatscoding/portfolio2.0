import React from 'react'
import CV from '../../assets/SACHIN SHAKYA.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let's Tolk</a>
    </div>
  )
}

export default CTA