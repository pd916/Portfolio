import React from 'react'
import {gsap} from "gsap";
import { useGSAP } from '@gsap/react';
import {ScrollTrigger} from "gsap-trial/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


export default function Hero() {
    useGSAP(()=> {
        var tl = gsap.timeline();
           //hero section
       tl.from("#line-1", {
        scaleY: 0, // Start with a scale of 0 vertically
        duration: 0.5,
        delay: 0.1,
      })
  
      tl.from("#line-2", {
        scaleY: 0, // Start with a scale of 0 vertically
        duration: 0.5,
        delay: 0.1,
      },"lines")

  
      tl.from("#heading-1", {
        y:"2%",
        duration:1.5,
        opacity:0,
      })
          
    },[])

    return (
      <section className="pl-2 text-white w-full min-h-screen flex items-center justify-center">
      <div className="relative">
        <h2 className="p-3 text-sm font-[head] sm:text-lg xl:text-xl" id="heading-1">creative</h2>
        <div className="absolute border-l h-[20vw] transform rotate-45
         border-[#FE0404] left-[103%] top-[-12%]
          md:left-[85%] md:top-[-36%]
           lg:left-[90%] lg:top-[-58%] xl:left-[90%] xl:top-[-72%]" id="line-1"></div>
           <div className=''>
        <p className="font-head text-md font-[head] sm:text-5xl xl:text-6xl leading-normal" id="heading-1">
          DESIGNER 
          <span className="text-sm pl-1" id="heading-1">&</span> 
          <br/>
          <span className='text-xl font-[head] sm:text-6xl xl:text-7xl' id="heading-1">DEVELOPER</span>
        </p>
           </div>
        <div className="absolute border-l h-[70vw] border-[#FE0404] left-[3%] transform rotate-[-48deg] top-[-5%]
         md:top-[10%] md:h-[55vw] md:left-[10%] lg:top-[-20%] xl:h-[53vw] xl:left-[-4vw] xl:top-[-26vh]" id="line-1"></div>
      </div>
    </section>
  )
}
