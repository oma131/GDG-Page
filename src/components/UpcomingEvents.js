import React from 'react'

import wtm from '../assets/WTM.png'
import cloud from '../assets/cloud.png'
import arrow from '../assets/arrow.png'
import continous from '../assets/continous.png'
import Yellow from './Yellow'
import '../styles/UpcomingEvent.css'

const UpcomingEvents = () => {
  return (
    <section id='upcoming-event'>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-4">
          <div className='eventHeadWrap'>
            <div className='arrWrap'>
              <img src={arrow} className="arrow2" alt="arrow vector" />
            </div>
            <h1 className='eventHead'>Upcoming Events</h1>
          </div>
          <div className="eventWrapper grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="lg:py-24 items-center">
              <p className='eventDate'>Apr 6, 2024 - Tech Talk</p>
              <h2 className="eventTitle text-3xl font-bold sm:text-4xl">GDG Port Harcout - International Womens Day</h2>

              <p className="para mt-4 ">
                International Women’s Day (IWD) is Women Techmakers’ 
                largest annual campaign where Ambassador host and 
                speak at events all around the world during the 
                months of March and April in celebration of this moment. 
                From big summits to smaller, intimate gatherings, 
                IWD is a time to host and speak at events that create 
                connections, educate and inspire your tech community.
              </p>

              <div className='eventButton mt-6'>
                <Yellow />
              </div>
            </div>
            <div className=" h-64 overflow-hidden  sm:h-full lg:order-last lg:h-full">
              <img src={continous} className="eventVector" alt="continous arrow vector" />
              <img src={wtm} className="wtmImg" alt="Member of the women tech make community" />
              <img src={cloud} className="cloud" alt="Vector of a cloud" />
            </div>
          </div>
        </div>
      </section>
  )
}

export default UpcomingEvents