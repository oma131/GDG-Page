import React from 'react'

import about from '../assets/about.png'
import continous from '../assets/continous.png'
import Yellow from './Yellow'

import '../styles/About.css'

const About = () => {
  return (
    <section id='about'>
        <div className="aboutContainer">
        {/* important adjustments when needed
        mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8
        mt-8           */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className=" h-64 overflow-hidden sm:h-80 lg:h-full">
              <img
                alt=""
                src={about}
                className=" inset-0 h-full w-full object-cover"
              />
            </div>

            <div className="lg:py-16">
              <img src={continous} className="aboutVector" alt="continous arrow vector" />
              <article className="space-y-4 ">
                <h2 className='aboutHead'>About Us</h2>

                <p className='para'>
                GDG Port Harcourt welcomes you to our website. 
                As we've created a vibrant space for enthusiasts 
                keen on harnessing the power of Google and other 
                cutting-edge software development technologies. 
                Our community thrives on learning, practicing, 
                and collaboratively building problem-solving applications.
                </p>
                
              </article>
              <div className='aboutButton'>
                  <Yellow />
                </div>
            </div>
          </div>
        </div>
      </section>

  )
}

export default About