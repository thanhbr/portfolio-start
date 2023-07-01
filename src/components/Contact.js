import React, { useState } from 'react';
// motion
import {motion} from 'framer-motion'
// variants
import {fadeIn} from '../variants'
import { createPost } from '../apis/post';

const Contact = () => {
  const [message, setMessage] = useState({
    supply: 'my-portfolio',
    author: '',
    title: '',
    content: ''
  })

  const handleFormSubmit = async _ => {
    const response = await createPost(message)
    console.log('response', response)
    setMessage({
      supply: 'my-portfolio',
      author: '',
      title: '',
      content: ''
    })
  }

  return (
    <div className='py-16 lg:section' id='contact'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          {/* text */}
          <motion.div
            variants={fadeIn('right', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.3}}  
            className='flex-1 flex justify-start items-center'
          >
            <div>
              <h4 className='text-xl uppercase text-accent font-medium mb-2 tracking-wide'>
                Get in touch
              </h4>
              <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>
                Let's work <br /> together!
              </h2>
            </div>
          </motion.div>
          {/* form */}
          <motion.form
              variants={fadeIn('left', 0.5)}
              initial='hidden'
              whileInView={'show'}
              viewport={{once: false, amount: 0.3}}  
              className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start'
          >
            <input 
              className='bg-transparent border-b py-3 outline-none w-full
                        placeholder:text-white focus:border-accent transition-all' 
              type='text'
              placeholder='Your name'
              value={message?.author}
              onChange={(e) => setMessage({ ...message, author: e.target.value || ''  })}
            />
            <input 
              className='bg-transparent border-b py-3 outline-none w-full
                        placeholder:text-white focus:border-accent transition-all' 
              type='text'
              placeholder='Your email'
              value={message?.title}
              onChange={(e) => setMessage({ ...message, title: e.target.value || ''  })}
            />
            <textarea
              className='bg-transparent border-b py-12 outline-none w-full
                        placeholder:text-white focus:border-accent transition-all
                          resize-none mb-12' 
              placeholder='Your message'
              value={message?.content}
              onChange={(e) => setMessage({ ...message, content: e.target.value || ''  })}
            >
            </textarea>
            <button 
              className='btn btn-lg '
              onClick={e => {
                e.preventDefault()
                handleFormSubmit()
              }}
            >
            Send message
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  )
}

export default Contact
