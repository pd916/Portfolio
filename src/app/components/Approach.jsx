import React from 'react'
import {ScrollTrigger} from "gsap-trial/ScrollTrigger";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
gsap.registerPlugin(ScrollTrigger);


const Approach = () => {
  useGSAP(()=>{
    const tl = gsap.timeline({
      scrollTrigger:{
      trigger:"#approach",
    }})
    tl.from("#approach > div", {
      opacity: 0,
      delay:0,
      y: 50,
      duration:1,
      stagger: {
          each:0.14,
          yoyo:true
      },
      ease: "power2.out"
    })
  },[])
  return (
    <section className='p-5 md:h-[55%] lg:h-50'>
      <h1 className='text-white text-2xl font-bold my-5 text-center'>My <span className='text-[#D6A77A]'>Approach</span></h1>
      <div id='approach' className='flex flex-col gap-3 md:flex-row mt-12 justify-center md:gap-4 overflow-hidden'>
        <div className='w-full h-[40vw] pt-3 items-center justify-center gap-4 md:max-w-md px-2 bg-[#23194A] md:h-[35vw] rounded-lg flex flex-col md:gap-8 md:px-8 lg:px-8 md:pt-3 lg:pt-20'>
            <h1 className='text-white text-[10px] font-[head] md:text-sm lg:text-2xl font-light text-center'>planning & strategy</h1>
            <p className='text-white text-xs md:text-xs lg:text-lg text-center'>we’ll collaborate to map out your website’s goals, target audience, and key functionalities. we’ll discuss things like  site structure, navigation, and content requirement</p>
        </div>
        <div className='w-full h-[40vw] pt-3 items-center justify-center gap-4 md:max-w-md px-2 bg-[#23194A] md:h-[35vw] rounded-lg flex flex-col md:gap-8 md:px-8 lg:px-8 md:pt-3 lg:pt-10'>
            <h1 className='text-white text-[10px] font-[head] md:text-sm lg:text-2xl font-light text-center'>development & progress update</h1>
            <p className='text-white text-xs md:text-xs lg:text-lg text-center'>once we agree on the plan, i cue my lofi playlist and dive into coding.  from initial sketches to pollished code, i keep you updated every step of the way</p>
        </div>
        <div className='w-full h-[40vw] pt-3 items-center justify-center gap-4 md:max-w-md px-3 bg-[#23194A] md:h-[35vw] rounded-lg flex flex-col md:gap-8 md:px-8 lg:px-10 md:pt-3 lg:pt-10'>
            <h1 className='text-white text-[10px] font-[head] md:text-sm lg:text-2xl font-light text-center'>development & launch</h1>
            <p className='text-white text-xs md:text-xs lg:text-lg text-center'>this is where the magic happens! based on the approved design, i’ll translate everything into functional code, building your website from the ground up</p>
        </div>
      </div>
    </section>
  )
}

export default Approach
