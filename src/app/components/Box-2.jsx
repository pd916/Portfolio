import { Mail } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import {ScrollTrigger} from "gsap-trial/ScrollTrigger";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Link from 'next/link';
gsap.registerPlugin(ScrollTrigger);


const BoxSecond = () => {
  useGSAP(()=> {
    const tl = gsap.timeline({
      scrollTrigger:{
      trigger:"#secondbox",
    }})
    tl.from("#secondbox > div", {
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

    gsap.from("#img",{
      opacity: 0,
      x: 50,
      duration:1.5,
      delay:0.7,
      scrollTrigger:{
        trigger: "#img"
      },
      stagger: {
          each:0.25,
          yoyo:true
      },
      ease: "power2.out"
    })

  },[])
  return (
    <section id='secondbox' className='flex flex-col gap-3 mt-5 sm:flex-row sm:h-50'>
      <div className='h-28 w-full gap-2 flex flex-row sm:h-80 sm:w-[60%] sm:flex-col text-white'>
        <div className='bg-[#23194A] w-[112%] rounded-lg p-5 overflow-hidden sm:w-[100%] sm:h-48'>
          <h2 className='text-[8px] z-10 uppercase md:text-xl'>Tech enthusiast with a passion For Devlopment</h2>
          <Image src={"/b4.svg"} alt='bg' id='img' width={200} height={150} className='mt-5 ml-7 md:ml-[35%] md:w-80 sm:mt-0'/>
        </div>
        <div className='bg w-full rounded-lg p-5'>
        <h1 className='text-[9px] font-bold text-center sm:text-xl'>
          Do you want to start a project together</h1>
          <Link href={"mailto:pdbaginz@gmail.com?subject=offer Inquiry&cc=support@company.com&bcc=info@company.com&body=hello how r you"}>
          <button className="px-4 py-2 mt-3 mx-auto text-[5px] flex font-[head] items-center rounded-lg sm:py-2 sm:px-4 bg-gray-800 sm:text-sm lg:w-[14vw] gap-2 lg:text-sm">
        <Mail className='w-[10px] h-[10px] sm:w-[2vw] sm:h-[2vw]'/>
        Email Me</button>
        </Link>
        </div>
      </div>
      <div className='h-36 bg-[#23194A] w-full relative sm:h-80 overflow-hidden text-white rounded-lg'>
      <div className='flex flex-col overflow-hidden gap-2 md:gap-3 mt-[3vw] p-5 z-10'>
     <h1 className='text-[10px] sm:text-xl font-[head] sm:font-medium'>The Inside Scoope</h1>
     <h3 className='text-[10px] sm:text-xl lg:text-3xl w-[55%] font-semibold'>Currently Building FullStack Web-App</h3>
      </div>
      <Image src={"/b5.svg"} alt='bg' id='img' width={230} height={150} className='absolute right-0 top-10 md:w-96 sm:top-36'/>
      </div>
    </section>
  )
}
export default BoxSecond
