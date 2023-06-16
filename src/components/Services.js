import React from 'react';
// icon
import { BsArrowUpRight } from 'react-icons/bs'
// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../variants'


// services data
const services = [
  {
    name: 'UI/UX Design',
    description: 'Professional who identifies new opportunities to create better user experiences. Aesthetically pleasing branding strategies help them effectively reach more customers. ',
    link: 'Learn more'
  },
  {
    name: 'Deveplopment',
    description: 'A process that creates growth, brings in progress and positive change. Development is a healthy sign.',
    link: 'Learn more'
  },
  {
    name: 'Product branding',
    description: 'Helps retailers manufacture those emotional connections, which direct potential customers toward a sale. Product branding is crucial to the success of a corporate brand in the sense that, in most cases.',
    link: 'Learn more'
  },
]

const Services = () => {
  return (
    <section className='section' id='service'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          {/* text & image */}
          <motion.div 
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.3}}
            className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'
          >
            <h2 className='h2 text-accent mb-6'>What I do</h2>
            <h3 className='h3 max-w-[455px] mb-16'>I'm a Freelancer Front-end Developer with over 3 years of experience.</h3>
            <button className='btn btn-sm'>See my work</button>
          </motion.div>
          {/* services */}
          <motion.div
            variants={fadeIn('left', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.3}} 
            className='flex-1'
          >
            {/* services list */}
            <div>
              {services.map((service, index) => {
                {/* destructure service */}
                const { name, description, link } = service
                return (
                  <div key={name + index}
                      className='border-b border-white/20 h-[146px] mb-[38px] flex'
                  >
                    <div className='max-w-[476px]'>
                      <h4 className='text-[20px] tracking-wide font-primary font-semibold mb-6'>
                        {name}
                      </h4>
                      <p className='font-secondary leading-tight'>{description}</p>
                    </div>
                    <div className='flex flex-col flex-1 items-end'>
                      <a href='#' className='btn w-9 h-9 mb-[42px] flex justify-center items-center'>
                        <BsArrowUpRight />
                      </a>
                      <a href='#' className='text-gradient text-sm'>
                        {link}
                      </a>
                    </div>
                  </div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Services;
