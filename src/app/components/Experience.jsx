import Image from 'next/image'
import React from 'react'
import {ScrollTrigger} from "gsap-trial/ScrollTrigger";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  useGSAP(()=>{
    const tl = gsap.timeline({
      scrollTrigger:{
      trigger:"#experi",
    }})
    tl.from("#experi > div", {
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
  },[])
  return (
    <section className='borders pl-2 md:pl-4'>
    <h1 className='text-[10px] py-6 font-[head] md:text-2xl text-center font-semibold text-white my-4'>My Work <span className='text-[#D6A77A]'>Experience</span></h1>
    <div id='experi' className='grid grid-cols-1 gap-5 md:grid md:grid-cols-2 w-full mt-5'>
    <div className='h-[12vh] gap-5 md:w-[96%] items-center md:h-[8vw] p-5 bg-[#23194A] rounded-xl flex justify-between sm:gap-2 xl:gap-5'>
    <Image src={"/exp1.svg"} alt='exp' width={40} height={40} className='w-[28px] h-[24px] md:w-[40px] md:h-[40px]'/>
    <div className='flex flex-col justify-center gap-2'>
        <h1 className='text-[10px] font-[head] sm:text-[10px] xl:text-xl text-white'>Frontend Engineer</h1>
        <p className='text-white text-[9px] sm:text-[10px] xl:text-sm'>assisted in the development  of a web-based platform using reactjs, engancing interactivity</p>
    </div>
    </div>
    <div className='h-[12vh] md:w-[96%] items-center md:h-[8vw] p-5 bg-[#23194A] rounded-xl flex gap-5'>
    <Image src={"/exp2.svg"} alt='exp' width={10} height={10} className='w-[28px] h-[24px] md:w-[40px] md:h-[40px]'/>
    <div className='flex flex-col justify-center gap-2'>
        <h1 className='text-[10px] font-[head] sm:text-[10px] xl:text-xl text-white'>Full stack developer</h1>
        <p className='text-white text-[9px] sm:text-[10px] xl:text-sm'>designed and developed full-stack web-application
        using Nextjs</p>
    </div>
    </div>
    <div className='h-[12vh] md:w-[96%] items-center md:h-[8vw] p-5 bg-[#23194A] rounded-xl flex gap-5'>
    <Image src={"/exp3.svg"} alt='exp' width={40} height={40} className='w-[28px] h-[24px] md:w-[40px] md:h-[40px]'/>
    <div className='flex flex-col justify-center gap-2'>
        <h1 className='text-[10px] font-[head] sm:text-[10px] xl:text-xl text-white'>arti-web</h1>
        <p className='text-white text-[9px] sm:text-[10px] xl:text-sm'>led the web-app for client from initial  concept to deployment</p>
    </div>
    </div>
    <div className='h-[12vh] md:w-[96%] items-center md:h-[8vw] p-5 bg-[#23194A] rounded-xl flex gap-5'>
    <Image src={"/exp4.svg"} alt='exp' width={40} height={40} className='w-[28px] h-[24px] md:w-[40px] md:h-[40px]'/>
    <div className='flex flex-col justify-center gap-2'>
        <h1 className='text-[10px] font-[head] sm:text-[10xp] xl:text-xl text-white'>lead frontend developer</h1>
        <p className='text-white text-[9px] sm:text-[10px] xl:text-sm'>developed and maintained  user-facing features using modren frontent technologies</p>
    </div>
    </div>
    
    </div>
    </section>
  )
}

export default Experience
