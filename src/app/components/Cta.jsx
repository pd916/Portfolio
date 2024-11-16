import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const Cta = () => {
  return (
    <section className='pb-24 md:mt-8'>
    <div className='flex flex-col justify-center items-center md:gap-5'>
      <h1 className='text-[18px] md:text-4xl text-white md:max-w-xl text-center font-bold'>Ready To Take <span className='text-[#D6A77A]'>your </span> Digital Presence To The Next Level?</h1>
      <p className='text-white text-[6px] md:text-xs'>Reach out to me today and let’s discuss how i can help you achive your goals</p>
    <Link href={'/contact'}>
    <Button className="bg-white mt-14 hover:bg-[#D6A77A]
     md:mt-28
     text-black border
     border-b-slate-950 self-center">Lets Get In Touch</Button>
    </Link>
    </div>
    </section>
  )
}

export default Cta
