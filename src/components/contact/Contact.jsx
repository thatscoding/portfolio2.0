import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import emailjs from 'emailjs-com'
import { useState } from 'react'

const initialValue = {
  name: '',
  email: '',
  message: '',

}

const Contact = () => {
const [user,setUser] = useState(initialValue)


 
const onvaluechange =(e) =>{
  setUser({...user, [e.target.name]: e.target.value})
}

const sendEmail = ()=>{
  console.log("working...")
  console.log(user);

  emailjs.send('service_a1hn1jn', 'template_f7z5u5o', user,'djT_HTjC9Zxp2gNJz')
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });



}



  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>sachinshakya205001@gmail.com</h5>
            <a href="mailto:sachinshakya205001@gmail.com" target='_blank' >Send a message</a>
          </article>

          <article className='contact__option'>
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messager</h4>
            <h5>Sachin Shakya</h5>
            <a href="https://m.me/ernest.achiever" target='_blank' >Send a message</a>
          </article>

          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+7500986056</h5>
            <a href="https://api.whatsapp.com/send?phone=+917500986056" target='_blank'>Send a message</a>
          </article>
        </div>

      <div className='form'>
        <input type="text" name='name'  placeholder='Your Full Name' onChange={(e)=>onvaluechange(e)} required />
        <input type="text" name='email' placeholder='Your Email' onChange={(e)=>onvaluechange(e)} required />
        <textarea name="message" id=""  rows="7" placeholder='Your Message' onChange={(e)=>onvaluechange(e)}></textarea>
        <button className='btn btn-primary' onClick={()=>sendEmail()}>Send Messasge</button>
      </div>
      </div >
    </section>
  )
}

export default Contact