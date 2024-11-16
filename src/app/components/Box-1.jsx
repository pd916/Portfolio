import Image from 'next/image'
import React from 'react'
import {ScrollTrigger} from "gsap-trial/ScrollTrigger";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
gsap.registerPlugin(ScrollTrigger);

const Box1 = () => {
  useGSAP(()=> {
    const tl = gsap.timeline({
      scrollTrigger:{
      trigger:"#firstbox",
    }})
    
    tl.from("#firstbox > div", {
      opacity: 0,
      delay:0.5,
      y: 50,
      duration:1,
      stagger: {
          each:0.14,
          yoyo:true
      },
      ease: "power2.out"
    })

    gsap.from("#tech > div:nth-child(n+2)", {
      opacity: 0,
      x: 50,
      duration:1.5,
      scrollTrigger:{
        trigger: "#tech"
      },
      stagger: {
          each:0.25,
          yoyo:true
      },
      ease: "power2.out"
    })

  },[])

  return (
    <section id='firstbox' className='overflow-hidden grid sm:grid-cols-3 lg:w-full lg:h-50 gap-4'>
    <div className='col-span-2 relative h-[99%] sm:h-[27rem] md:h-[98%] rounded-xl bg-[#23194A] overflow-y-hidden'>
    <Image
    src={"/b1.svg"}
    alt='background'
    layout="fill"
    objectFit="cover"
    id='imgi'
    className='absolute w-full rounded-xl top-0 left-0'/>
    <div className='max-w-36 flex mt-[13vw] sm:mt-[15vw] sm:max-w-sm mx-5 z-30'>
    <p className='text-white text-xs mt-[18vw] mb-[6vw] sm:text-2xl sm:mt-[20vw] font-semibold uppercase relative z-10'>
      I Prioritize Client Collaboration, 
      Fostering 
      Open Communication
    </p>
 </div>
  </div>
  <div className='sm:items-center relative h-[15vh] items-center w-[105%] sm:w-full sm:gap-3 sm:h-full flex sm:flex-col gap-2'>
  <div className='bg-[#23194A] flex flex-col items-center gap-2 p-5 py-4 w-full h-[15vh] sm:h-52 lg:h-[48%] sm:w-full rounded-lg'>
  <h3 className='text-white text-[8px] sm:text-sm sm:p-4 sm:pt-8 lg:text-lg lg:p-8 lg:pt-[28px] font-semibold uppercase'>
     I'm Very Flexible with Time Zone & Communication
   </h3>
   <Image src="/bot.png" alt="bot" width={120} height={120} className="bot max-w-12 sm:max-w-16 lg:max-w-28" />
  </div>
  <div id='tech' className='bg-[#23194A] relative w-full h-[15vh] sm:h-52 rounded-lg md:h-[48%] md:w-full overflow-hidden'>
  <div className='flex flex-col pt-[5vh] p-4 gap-1 sm:gap-2 md:gap-3 lg:p-16'>
     <h1 className='text-white font-[head] text-[8px] sm:text-[10px] md:text-sm font-medium'>My Tech</h1>
     <p className='text-white text-[7px] sm:text-[13px] md:text-xl w-[59%]'>I Constantly Try To Improve</p>
   </div>
   <div className='absolute top-[-6px] pt-4 px-5 right-8 md:p-5 md:px-14 md:top-[-10%] lg:p-5 lg:px-12 rounded-lg lg:top-[-15px] bg-[#2d225c] md:right-[10%] lg:right-28'></div>
   <div className='absolute top-7 p-1 px-2 right-1 md:p-3 md:px-6 md:top-[19%] lg:p-2 lg:px-8 rounded-lg lg:top-[35%] bg-[#2d225c] md:right-2 lg:right-[5%]'>
     <h3 className='text-white text-[7px] font-[head] md:text-[7px] lg:text-sm'>Next.js</h3>
   </div>
   <div className='absolute top-14 p-1 px-2 right-1 md:p-3 md:px-6 md:top-[56%] lg:p-2 lg:px-4 rounded-lg lg:top-[58%] bg-[#2d225c] md:right-2 lg:right-[5%]'>
     <h3 className='text-white text-[5px] font-[head] md:text-[8px] lg:text-sm'>Typescript</h3>
   </div>
   <div className='absolute top-[93%] pt-4 px-5 right-8 md:p-3 md:px-14 md:top-[92%] lg:p-5 lg:px-12 rounded-lg lg:top-[94%] bg-[#2d225c] md:right-[10%] lg:right-28'></div>
  </div>
  </div>
  </section>
  )
}
export default Box1

