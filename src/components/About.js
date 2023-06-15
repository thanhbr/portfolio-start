import React from 'react';
// countup
import CountUp from 'react-countup';
// inter section hook
import {useInView} from 'react-intersection-observer'
// motion
import {motion} from 'framer-motion'
// variant
import { fadeIn } from '../variants'

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5
  })
  return (
    <section className='section' id='about' ref={ref}>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
          {/* images */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.3}} 
            className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top'
          ></motion.div>
          {/* text */}
          <motion.div
            variants={fadeIn('left', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.3}} 
            className='flex-1'
          >
            <h2 className='h2 text-accent'>Abount me.</h2>
            <h3 className='h3 mb-4'>I'm a Freelancer Front-end Developer with over 3 years of experience.</h3>
            <p className='mb-6'>
              <p>
                1. End to End development of the Web platforms for E-commerce, and other web showcases with multi-user features like Customers, Sellers, etc. as well as Admin Panels to handle everything.
              </p>
              <p>
                2. On the front end side, I work on the latest versions of React, HTML, CSS, Jquery, and much more. Using these, I can create responsive and attractive websites.
              </p>
              <p>
                3. On the API front, I have handled various third-party data providers. I have also worked on RESTful APIs and created custom APIs.
              </p>
            </p>
            {/* stats */}
            <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView 
                    ? <CountUp start={0} end={5} duration={3}/>
                    : null}
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Year of <br/>
                  Experience
                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView 
                    ? <CountUp start={0} end={15} duration={3}/>
                    : null}+
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Project <br/>
                  Completed
                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView 
                    ? <CountUp start={0} end={20} duration={3}/>
                    : null}k+
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Saticfiel <br/>
                  Client
                </div>
              </div>
            </div>
            <div className='flex gap-x-8 items-center'>
              <button className='btn btn-lg'>Contact me</button>
              <a href='#' className='text-gradient btn-link'>
                My Portfolio
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About;
