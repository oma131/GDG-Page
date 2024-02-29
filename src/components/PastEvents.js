import React from 'react'
import card from '../assets/card.png'

const PastEvents = () => {
  return (
    <section id='past'>
        <div className='grid justify-center items-center my-20  lg:my-28 px-6 lg:px-20 xl:px-28'>
            <h2 className='font-bold text-2xl md:text-4xl xl:text-[44px] mb-16 md:mb-28 md:text-center w-[335px] md:w-[658px] mx-auto'>
                We have hosted amazing 
                events in the past - check it out 
            </h2>
            <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-8'>
                <div className='w-fit shadow-2xl rounded-[30px] bg-[#FFFFFF]'>
                    <img src={card} className="cardImg" alt="GDG logo in form of a card" />
                    <div className='p-4 grid gap-3 md:gap-5 my-3 md:my-6'>
                        <p className='font-[400] text-xs md:text-sm lg:text-base'>Apr 6, 2024 - Conference</p>
                        <h3 className='text-xl font-bold md:text-2xl lg:text-3xl'>
                        DevFest South-South 2023 - 
                        Bonny Island
                        </h3>
                        <p className='md:text-[20px] font-[400]'>
                        It's the biggest Tech Conference in South-South Nigeria!!! 
                        With 13 solid GDG. We will have talks to cover various 
                        fields like Product Design, Mobile App Development etc. 
                        You really don't want to miss it.
                        </p>
                    </div>
                </div>
                <div className='w-fit shadow-2xl rounded-[30px] bg-[#FFFFFF]'>
                    <img src={card} className="cardImg" alt="GDG logo in form of a card" />
                    <div className='p-4 grid gap-3 md:gap-5 my-3 md:my-6'>
                        <p className='font-[400] text-xs md:text-sm lg:text-base'>Apr 6, 2024 - Conference</p>
                        <h3 className='text-xl font-bold md:text-2xl lg:text-3xl'>
                        DevFest South-South 2023 - 
                        Bonny Island
                        </h3>
                        <p className='md:text-[20px] font-[400]'>
                        It's the biggest Tech Conference in South-South Nigeria!!! 
                        With 13 solid GDG. We will have talks to cover various 
                        fields like Product Design, Mobile App Development etc. 
                        You really don't want to miss it.
                        </p>
                    </div>
                </div>
                <div className='w-fit shadow-2xl rounded-[30px] bg-[#FFFFFF]'>
                    <img src={card} className="cardImg" alt="GDG logo in form of a card" />
                    <div className='p-4 grid gap-3 md:gap-5 my-3 md:my-6'>
                        <p className='font-[400] text-xs md:text-sm lg:text-base'>Apr 6, 2024 - Conference</p>
                        <h3 className='text-xl font-bold md:text-2xl lg:text-3xl'>
                        DevFest South-South 2023 - 
                        Bonny Island
                        </h3>
                        <p className='md:text-[20px] font-[400]'>
                        It's the biggest Tech Conference in South-South Nigeria!!! 
                        With 13 solid GDG. We will have talks to cover various 
                        fields like Product Design, Mobile App Development etc. 
                        You really don't want to miss it.
                        </p>
                    </div>
                </div>
                
            </div>
        </div>
    </section>
  )
}

export default PastEvents