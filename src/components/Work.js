import React from 'react';
// motion
import {motion} from 'framer-motion'
// variants
import {fadeIn} from '../variants'
// images
import Image1 from '../assets/portfolio-img1.png'
import Image2 from '../assets/portfolio-img4.png'
import Image3 from '../assets/portfolio-img3.png'
import { projectList } from '../interfaces/contant';

const Work = ({projects}) => {
  const list = projectList(projects)
  
  return (
    <section className='section' id='work'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row gap-x-10'>
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.3}} 
            className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'
          >
            {/* text */}
            <div>
              <h2 className='h2 leading-tight text-accent'>
                My Latest <br />
                Work.
              </h2>
              <p className='max-w-sm mb-16'>
                I'm well-rounded when it comes to ReactJS,... My skill set allows me to see the big picture and dive into the most critical aspects of the project.
              </p>
              <button className='btn btn-sm'>
                View all project
              </button>
            </div>
            {/* image */}
            <a 
              href='http://thanhbr-metaversus.vercel.app/'
              target='_blank'
              className='group relative overflow-hidden border-2 border-white/50 rounded-xl lg:max-h-[319px] md:max-h-[417px]'>
              {/* overplay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/* img */}
              <img src={Image1} 
                    alt='image' 
                  className='group-hover:scale-125 transition-all duration-500'
              />
              {/* pretitle */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-accent font-bold'>#NextJS </span>
                <span className='text-accent font-bold'>#Tailwind</span>
              </div>
              {/* title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-500 z-50'>
                <span className='text-3xl text-white font-bold'>Metaverse</span>
              </div>
            </a>
          </motion.div>

          <motion.div 
            variants={fadeIn('left', 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.3}} 
            className='flex-1 flex flex-col gap-y-10'
          >
            {/* image */}
            <a
              href='https://thanhbr-netflix-clone.web.app/'
              target='_blank'
              className='group relative overflow-hidden border-2 border-white/50 rounded-xl lg:max-h-[319px] md:max-h-[417px]'>
              {/* overplay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/* img */}
              <img src={Image2} 
                    alt='image' 
                  className='group-hover:scale-125 transition-all duration-500'
              />
              {/* pretitle */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-accent font-bold'>#ReactJS #MUI</span>
              </div>
              {/* title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-500 z-50'>
                <span className='text-3xl text-white font-bold'>Netflix Clone</span>
              </div>
            </a>
            {/* image */}
            <a
              href='https://thanhbr-covid19-tracker.web.app/'
              target='_blank'
              className='group relative overflow-hidden border-2 border-white/50 rounded-xl lg:max-h-[319px] md:max-h-[417px]'>
              {/* overplay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/* img */}
              <img src={Image3} 
                    alt='image' 
                  className='group-hover:scale-125 transition-all duration-500'
              />
              {/* pretitle */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-accent font-bold'>#ReactJS #MUI</span>
              </div>
              {/* title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-500 z-50'>
                <span className='text-3xl text-white font-bold'>Covid19 Tracker</span>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Work;
