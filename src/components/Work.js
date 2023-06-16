import React from 'react';
// motion
import {motion} from 'framer-motion'
// variants
import {fadeIn} from '../variants'
// images
import Image1 from '../assets/portfolio-img1.png'
import Image2 from '../assets/portfolio-img2.png'
import Image3 from '../assets/portfolio-img3.png'

const Work = () => {
  return (
    <section className='section' id='work'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row gap-x-10'>
          <div className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
            {/* text */}
            <div>
              <h2 className='h2 leading-tight text-accent'>
                My Latest <br />
                Work.
              </h2>
              <p className='max-w-sm mb-16'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
              </p>
              <button className='btn btn-sm'>
                View all project
              </button>
            </div>
            {/* image */}
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/* overplay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/* img */}
              <img src={Image1} 
                    alt='image' 
                  className='group-hover:scale-125 transition-all duration-500'
              />
              {/* pretitle */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-accent'>UI/UX Designer</span>
              </div>
              {/* title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-500 z-50'>
                <span className='text-3xl text-white'>Project Title</span>
              </div>
            </div>
          </div>
          <div className='flex-1'>
            {/* image */}
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/* overplay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/* img */}
              <img src={Image2} 
                    alt='image' 
                  className='group-hover:scale-125 transition-all duration-500'
              />
              {/* pretitle */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-accent'>UI/UX Designer</span>
              </div>
              {/* title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-500 z-50'>
                <span className='text-3xl text-white'>Project Title</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Work;
