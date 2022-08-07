import React from 'react'
import './testimonials.css'
import AVR1 from '../../assets/avatar1.jpg'
import AVR2 from '../../assets/avatar2.jpg'
import AVR3 from '../../assets/avatar3.jpg'
import AVR4 from '../../assets/avatar4.jpg'

import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const data = [
  {
    avatar : AVR1,
    name : 'Ernest Achiever', 
    review : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur explicabo architecto deleniti voluptate sunt at atque suscipit iste cumque? Dignissimos consequuntur dolore mollitia quae nobis laborum reprehenderit praesentium eligendi voluptates.' 
  },
  {
    avatar : AVR2,
    name : 'Ernest Achiever', 
    review : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur explicabo architecto deleniti voluptate sunt at atque suscipit iste cumque? Dignissimos consequuntur dolore mollitia quae nobis laborum reprehenderit praesentium eligendi voluptates.' 
  },
  {
    avatar : AVR3,
    name : 'Ernest Achiever', 
    review : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur explicabo architecto deleniti voluptate sunt at atque suscipit iste cumque? Dignissimos consequuntur dolore mollitia quae nobis laborum reprehenderit praesentium eligendi voluptates.' 
  },
  {
    avatar : AVR4,
    name : 'Ernest Achiever', 
    review : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur explicabo architecto deleniti voluptate sunt at atque suscipit iste cumque? Dignissimos consequuntur dolore mollitia quae nobis laborum reprehenderit praesentium eligendi voluptates.' 
  }
]

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className='container testimonials__container'
        modules={[ Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}  
      >
      {
        data.map(({avatar,name,review},index)=>{
          return (
            <SwiperSlide key={index} className='testimonial'>
            <div className='client__avatar'>
              <img src={avatar} alt="avatar" />
            </div>  
              <h5 className='client_name'>{name}</h5>
              <small className='client_review'>{review}</small>
          </SwiperSlide>
          )
        })
      }

      </Swiper>
    </section>
  )
}

export default Testimonials