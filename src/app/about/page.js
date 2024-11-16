"use client"
import React from 'react'


export default function About() {

  return (
     <div className='w-full text-white min-h-screen overflow-hidden'>
        <h4 className='font-strretch uppercase font-[head] text-center text-4xl mt-32 sm:mt-[7vw]'>About us</h4>
     <div className='flex flex-col justify-center item-center mx-3 sm:mx-[18vw] gap-8 '>
     <div className='mt-[5vw] flex flex-col gap-5 p-3 sm:mx-3'>
        <h1 className='uppercase font-bold  md:text-start'>Your dependable business ally</h1>
        <p className='text-xs  md:text-lg md:text-start '>
        Here lies the pivotal distinction that propels us ahead of competitors, enabling us to furnish bespoke business consultancy services. Leveraging our team&apos;s diverse expertise, we delve deep into the intricacies. Over years of honing our craft, we&apos;ve unearthed a crucial insight: every channel, every strategy, requires its own bespoke approach. This realization fuels our relentless pursuit of innovation and excellence.
        </p>
        <span className='border-b-[1px] mt-5'></span>
     </div>
        <h3 className='text-center uppercase font-[head]'>Why Chose us</h3>
     <div className='mb-8'>
         <h1 className='uppercase text-start font-bold'>Expert In Designing & Development</h1>
         <p className='text-xs text-start mt-4 md:text-lg'>Our team of seasoned web developers and designers excels in creating visually striking and technically sound websites.
          With expertise in a variety of programming languages and design principles,
           we ensure that our sites not only look great but also perform optimally and rank well in search engines.
            Clients choose us for our track record of excellence,
             tailored solutions, collaborative approach, 
             commitment to quality, and dedication to customer satisfaction</p>
      
      </div>
     </div>
     </div>
  )
}
