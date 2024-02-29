import React from 'react'
import About from './About'

import arrow from '../assets/arrow.png'
import heroImg from '../assets/heroImg.png'
import kite from '../assets/kite.svg'

import Partners from './Partners'
import Team from './Team'
import UpcomingEvents from './UpcomingEvents'
import PastEvents from './PastEvents'

import Buttons from './Buttons'
import Yellow from './Yellow'
import '../styles/Hero.css'

const Hero = () => {
  return (
    <main>
      <div className="mt-24 py-8 md:py-20 lg:py-28 w-[335px] md:w-[540px] lg:w-[898px] grid justify-center items-center mx-auto text-center gap-8 relative">
        <h1 className=" font-extrabold text-3xl md:text-5xl lg:text-7xl xl:text-[84px] ">
          GDG Port Harcourt Community
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl">
          A collaborative hub for enthusiasts exploring Google and advanced
          software development technologies to learn, practice, and build
          innovative problem-solving applications.
        </p>

        <img
          src={arrow}
          className="absolute top-0  md:top-0 md:right-7 w-[100px] md:w-[200px] lg:w-[305px] right-9 lg:right-20 xl:right-14"
          alt="arrow-icon"
        />
        <img
          src={kite}
          className="kiteImg absolute w-[80px] md:w-[120px] lg:w-[186px] bottom-24 left-3 md:bottom-0 md:top-32 md:left-0 lg:top-44 lg:left-10 xl:left-0 xl:top-48"
          alt="kite-icon"
        />

          <div className='flex justify-center items-center gap-4'>
            <Buttons style={{ backgroundColor: '#000000', color: 'white' }}>
              Join Our Community
            </Buttons>
            <Yellow />
          </div>
        
      </div>
      <div className="mx-10 lg:mx-20">
        <img
          src={heroImg}
          className="md:w-full lg:rounded-[64px] xl:h-[693.45px] object-cover"
          alt="hero"
        />
      </div>
      
  
      <section className="grid justify-center items-center mt-20  lg:mt-28 px-6">
        <h3 className="text-2xl lg:text-[44px] font-bold md:font-extrabold lg:w-[863px] mx-auto md:text-center mb-12 lg:mb-14 lg:leading-[59.4px] ">
          Introducing our esteemed sponsors, making innovation happen
        </h3>
        <Partners />
      </section>

      <div id='about'>
        <About />
      </div>
      
      <div id='upcoming'>
        <UpcomingEvents />
      </div>

      <section id='organizers'>
        <Team />
      </section>

      
      <section id='community'>
        <div className='communityContainer'>
          <div className='communityWrapper'>
            <h3 className='communityHeader'>Connect with Creatives near you</h3>
            <p className='communityText'>
              When you join a Google Developer Group, you'll have the 
              opportunity to learn new skills in a variety of formats. 
              You’ll also meet local developers virtually or 
              in-person with similar interests in technology. 
            </p>
            <div className='communityButton'>
              <Buttons style={{ backgroundColor: '#FFC103', color: '#ffffff' }}>
                Join Our Community
              </Buttons>
            </div>
          </div>
        </div>
      </section>

      <section id='past-events'>
        <PastEvents />
      </section>


    </main>
  )
}

export default Hero;