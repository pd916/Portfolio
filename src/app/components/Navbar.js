"use client"
import React from 'react'
import { HiBars2 } from "react-icons/hi2";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from '@gsap/react';
import { sidebarData, sideNavData } from '@/constant/data';
import Image from 'next/image';
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
gsap.registerPlugin();


export default function Navbar() {
  useGSAP(()=> {
    var tl = gsap.timeline();

    tl.from("#nav-logo", {
      x:"-100%",
      duration:1,
      delay: 0.5,
      opacity:0,
      stagger:true
    })

  },[])

  return (
    <div className='w-full absolute text-white z-10 '>
   <nav className="flex items-center justify-between p-5">
   <div className='flex items-center w-full' id='nav-logo'>
   <Link href={'/'}>
    <Image src={"/Logo.png"} alt='logo' width={100} height={100} className='max-w-full h-auto'/>
      <h1 className='font-stretch absolute bottom-2 left-6 font-[head] text-xs md:text-md' >ARTI
      <span>WEB</span>
      </h1>
   </Link>
   </div>
      <div className="list-none ">
        <Sheet>
        <SheetTrigger asChild><HiBars2 className="font-bold text-5xl"/></SheetTrigger>
        <SheetContent>
        <Link href={"/"}>
        <Image src="/logo.png" alt='logo' width={50} height={50} className='absolute'/>
        </Link>
        <div className='mt-10'>
        <SheetTitle className="text-muted-foreground">Menu</SheetTitle>
        <div className="flex flex-col items-center justify-center gap-5 mt-5 font-sans">
       {
        sidebarData?.map((sidebar)=> (
          <Link href={sidebar.path} key={sidebar.id}>
          <SheetClose>
          <div className='group flex gap-3 items-center p-3 md:p-2 md:px-7 rounded-lg hover:bg-[#e0ddeec7]'>
          <sidebar.icon className='text-gray-900 group-hover:animate-bounce duration-300 ease-in-out'/>
            <h1 className='text-[#000] md:block md:text-xl'>{sidebar.title}</h1>
          </div>
          </SheetClose>
          </Link>
        ))
       }
        </div>
        <hr className='my-10'/>
        <SheetDescription>Social</SheetDescription>
        <div className="flex flex-col items-center gap-5 mt-5 font-sans">
         {
          sideNavData?.map((nav)=> (
            <Link href={nav.path} key={nav.id}>
            <div className='group flex gap-3 p-3 items-center md:p-2 md:px-7 rounded-lg hover:bg-[#e0ddeec7]'>     
              <nav.Icon className='text-gray-900 group-hover:animate-bounce duration-300 ease-in-out'/>
              <h1 className='text-[#000] md:block md:text-lg'>{nav.name}</h1>
            </div>
            </Link>
          ))
         }
        <span className='border-b-[5px] border-black'></span>
        </div>
        </div>
        </SheetContent>
        </Sheet>
      </div>
      </nav>
    </div>
  )
}
