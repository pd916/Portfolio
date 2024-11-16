import Image from 'next/image'
import React from 'react'

function Footer() {
  return (
  <footer className='bg-[#0B0036] flex justify-between items-center px-9 py-4'>
    <div>
      <h3 className='text-white text-[11px] md:text-lg'>copyright @ 2024 artiweb</h3>
    </div>
    <div className='flex gap-2'>
      <Image src={"/git.svg"} alt='footer' width={35} height={35} className='w-[20px] md:w-[35px]'/>
      <Image src={"/insta.svg"} alt='footer' width={35} height={35} className='w-[20px] md:w-[35px]'/>
      <Image src={"/link.svg"} alt='footer' width={35} height={35} className='w-[20px] md:w-[35px]'/>
    </div>
  </footer>
  )
}

export default Footer
