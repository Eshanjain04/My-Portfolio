import React from 'react'
import Twitter from "../assets/Twitter.jpg"
import Attendance from "../assets/Attendance.jpg";
import cryptovault from "../assets/cryptovault.jpg";
import contacts from "../assets/Contacts.jpg"

const Projects = () => {
  return (
    <div name='projects' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='max-w-[1000px] pb-8 w-100px h-100px'>
            <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
              Projects
            </p>
            <p className='py-6 text-gray-300'>Check out some of my recent work</p>
          </div>
          <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
          <div
              style={{ backgroundImage: `url(${Twitter})` }}
              className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
            >
              {/* Hover Effects */}
              <div className='opacity-0 group-hover:opacity-100 p-4'>
                <span className='text-2xl font-bold text-white tracking-wider'>
                  Twitter Clone using template engine, Express and MongoDB
                </span>
                <div className='pt-8 text-center'>
                  <a href='https://our-tweet-app.herokuapp.com/'>
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                      Demo
                    </button>
                  </a>
                  <a href='https://github.com/Eshanjain04/Twitter-Clone/tree/master'>
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
            {/* Student Tracker App Project */}
            <div
              style={{ backgroundImage: `url(${Attendance})` }}
              className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
            >
              {/* Hover Effects */}
              <div className='opacity-0 group-hover:opacity-100 p-4'>
                <span className='text-2xl font-bold text-white tracking-wider'>
                  Student personal Attendance Tracker App using Express and MongoDB
                </span>
                <div className='pt-8 text-center'>
                  <a href='https://attendance-tracker04.herokuapp.com/'>
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                      Demo
                    </button>
                  </a>
                  <a href='https://github.com/Eshanjain04/attendance-tracking-App'>
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
            {/* Crypto Watch App Project */}
            <div
              style={{ backgroundImage: `url(${cryptovault})` }}
              className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
            >
              {/* Hover Effects */}
              <div className='opacity-0 group-hover:opacity-100 p-4'>
                <span className='text-2xl font-bold text-white tracking-wider'>
                  Crypto currency watch app using React
                </span>
                <div className='pt-8 text-center'>
                  <a href='/'>
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:cursor-pointer'>
                      Demo
                    </button>
                  </a>
                  <a href='https://github.com/Eshanjain04/Crytpo-Vault'>
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:cursor-pointer'>
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
            {/* Contact Manager */}
            <div
              style={{ backgroundImage: `url(${contacts})` }}
              className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
            >
              {/* Hover Effects */}
              <div className='opacity-0 group-hover:opacity-100 p-4'>
                <span className='text-2xl font-bold text-white tracking-wider'>
                  Contacts Manager app using React and Express
                </span>
                <div className='pt-8 text-center'>
                  <a href='https://raeesh-contact-manager.netlify.app/'>
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:cursor-pointer'>
                      Demo
                    </button>
                  </a>
                  <a href='https://github.com/Eshanjain04/Contact-Manager'>
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:cursor-pointer'>
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Projects