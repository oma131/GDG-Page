import React from 'react'
import godfrey from '../assets/godfrey.png'
import peace from '../assets/peace.png'

const Team = () => {
  return (
    <section id='team'>
      <div className='grid justify-center items-center mt-8  lg:mt-4 px-6 lg:px-8 xl:px-36 pb-16 md:pb-28'>
        <h2 className='text-3xl lg:text-3xl xl:text-[44px] font-bold my-12 md:my-18 md:text-center'>GDG PH Organizers</h2>
        <div className=' flex flex-col md:flex-row gap-8'>
          <div>
            <img src={godfrey} className="organizer" alt="Organizers of GDG Port Harcourt" />
            <div className='pl-6 pt-6 bg-[#FFFFFF]'>
              <p className='text-2xl lg:text-[32px] font-[900]'>Ayaosi Godfrey</p>
              <p className='pt-4 pb-6 text-lg lg:text-[24px] font-medium'>GDG PH Organizer</p>
            </div>
          </div>
          <div>
            <img src={peace} className="organizer" alt="Organizers of GDG Port Harcourt" />
            <div className='pl-6 pt-6 bg-[#FFFFFF]'>
              <p className='text-2xl lg:text-[32px] font-[900]'>Ayaosi Godfrey</p>
              <p className='pt-4 pb-6 text-lg lg:text-[24px] font-medium'>GDG PH Organizer</p>
            </div>
          </div>
          <div>
            <img src={godfrey} className="organizer" alt="Organizers of GDG Port Harcourt" />
            <div className='pl-6 pt-6 bg-[#FFFFFF]'>
              <p className='text-2xl lg:text-[32px] font-[900]'>Ayaosi Godfrey</p>
              <p className='pt-4 pb-6 text-lg lg:text-[24px] font-medium'>GDG PH Organizer</p>
            </div>
          </div>
          
          
          
        </div>
      </div>
    </section>
  )
}

export default Team