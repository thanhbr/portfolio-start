import React from 'react';
// images
import Image from '../assets/avatar.svg'
// icons
import { FaGithub, FaYoutube, FaLinkedin } from 'react-icons/fa'
// motion
import { motion } from 'framer-motion'
// variants
import { fadeIn } from '../variants'
import { TypeAnimation } from 'react-type-animation';


const Banner = () => {
  return (
    <section className='section' id='home'>
      <div className='container mx-auto'>
        <div>
          {/* text */}
          <div>
            <h1>Thanh <span>Br</span></h1>
          </div>
          <div className='mb-6 text-[36px] lg:text-[60px] font-secondary 
                          font-semibold uppercase leading-[1]'>
            <span className='text-white mr-4'>I am a</span>
            <TypeAnimation 
              sequence={[
                'Developer',
                2000,
                'Designer',
                2000
              ]}
              speed={50}
              className='text-accent'
              wrapper='span'
              repeat={Infinity}
            />
            <p>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the</p>
          </div>
          {/* images */}
          <div>
            <img src={Image} alt='image' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner;
