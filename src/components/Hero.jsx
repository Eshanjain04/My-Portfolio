import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
         <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-red-600'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          Eshan Jain
        </h1>
        <h2 className='text-4xl sm:text-5xl font-bold text-[#8892b0]'>
          I'm a Full Stack Developer enthusiast.
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
          I’m a full-stack developer enthusiasts keen to build exceptional digital experiences. Currently, I’m working in Fintech company contributing in developing products based on client requirements with the technologies involving Angular, python and Falcon.
          I have also developed some end to end perosnal projects which you can see by click the button down below.
        </p>
        <div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 cursor:pointer'>
            <Link to='projects' smooth={true} duration={500}>
                View Projects
            </Link>
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Hero