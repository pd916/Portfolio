import React from 'react'
import {gsap} from "gsap";
import { useGSAP } from '@gsap/react';
import {ScrollTrigger} from "gsap-trial/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


function ScrollingText() {

    useGSAP(()=>{
        let tl1 = gsap.timeline()
        tl1.to("#move", {
          xPercent: -100, // Use xPercent for smoother animation
          duration: 20,
          repeat: -1,
          ease: "linear",
        })
    },[])

  return (
    <section className='py-8 h-full w-full items-center'>
    <div id='wrapper' className='p-5 mx-10 overflow-hidden rounded-xl'>
    <div id='move' className='flex text-white gap-7 whitespace-nowrap items-center flex-shrink-0'>
        <h1 className='font-semibol text-[8px] uppercase font-[salt] md:text-[20px]'>Designer</h1>
        <h1 className='font-semibol text-[10px] uppercase font-[rock] md:text-[20px]'>Artiweb</h1>
        <h1 className='font-semibol text-[10px] uppercase font-[ruslan] md:text-[20px]'>Fullstack</h1>
        <h1 className='font-semibol text-[10px] uppercase font-[saira] md:text-[20px]'>Innovator</h1>
        <h1 className='font-semibol text-[10px] uppercase font-[sweed] md:text-[20px]'>Strategist</h1>
        <h1 className='font-semibol text-[10px] uppercase font-[variable] md:text-[20px]'>Technologist</h1>
        <h1 className='font-semibol text-[10px] uppercase font-[black] md:text-[20px]'>Developer</h1>
        <h1 className='font-semibol text-[10px] uppercase font-[ruslan] md:text-[20px]'>Innovator</h1>
        <h1 className='font-semibol text-[10px] uppercase font-[saira] md:text-[20px]'>Visionary</h1>
        <h1 className='font-semibol text-[10px] uppercase font-[variable] md:text-[20px]'>Analyst</h1>
        <h1 className='font-semibol text-[10px] uppercase font-[rock] md:text-[20px]'>Strategist</h1>
        <h1 className='font-semibol text-[10px] uppercase font-[sweed] md:text-[20px]'>Tactician</h1>
        <h1 className='font-semibol text-[10px] uppercase font-[ruslan] md:text-[20px]'>Catalyst</h1>
        <h1 className='font-semibol text-[10px] uppercase font-[ruslan] md:text-[20px]'>Innovator</h1>
        <h1 className='font-semibol text-[10px] uppercase font-[ruslan] md:text-[20px]'>Strategist</h1>
        <h1 className='font-semibol text-[10px] uppercase font-[ruslan] md:text-[20px]'>Artiweb</h1>
    </div>
    </div>
    </section>
  )
}

export default ScrollingText
