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
        <div className='flex flex-col gap-y-8 lg:flex-row'>
          {/* text */}
          <div className='flex-1 text-center font-secondary lg:text-left'>
            <h1 className='text-[55px] font-bold leading-[0.8] lg:text-[110px]'>
              Thanh <span>Ma</span>
            </h1>
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
            </div>
            <p className='mb-8 max-w-lg mx-auto lg:mx-0'>
              I have worked in this field of software for three years. 
              I specialize in building software that meets customer needs and I have a unique approach to doing this.
            </p>
            <div className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
              <button className='btn btn-lg'>Contact me</button>
              <a href='#' className='text-gradient btn-link'>My Portfolio</a>
            </div>
            {/* socials */}
            <div className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
              <a href='#'>
                <FaGithub />
              </a>
              <a href='#'>
                <FaLinkedin />
              </a>
              <a href='#'>
                <FaYoutube />
              </a>
            </div>
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
