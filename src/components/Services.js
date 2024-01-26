import React from 'react';
// icon
import { BsArrowUpRight } from 'react-icons/bs'
// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../variants'
import { Link } from 'react-scroll';


// services data
const services = [
  {
    name: 'Front-end Development',
    description: 'Designing and implementing responsive and user-friendly interfaces using HTML, CSS, and JavaScript.',
    link: 'Learn more'
  },
  {
    name: 'Project Delivery',
    description: 'Managing end-to-end project lifecycles, from initial concept and design to development, testing, and deployment.',
    link: 'Learn more'
  },
  {
    name: 'Optimization',
    description: 'Conducting thorough performance analysis and implementing optimizations to enhance website speed and efficiency.',
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
            className='flex-1 ipSE:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0 bg-contain h-[300px]'
          >
            <h2 className='h2 text-accent mb-6'>What I do</h2>
            <h3 className='h5 max-w-[455px] mb-16 font-medium'>As a Freelancer Front-end Developer, my expertise lies in creating captivating and efficient user interfaces for a diverse range of clients. Here's a glimpse of what I do:</h3>
            <Link to='work'>
              <button className='btn btn-sm' >See my work</button>
            </Link>
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
