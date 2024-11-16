import Image from 'next/image'
import React from 'react'

const images = [
  {id:1, url:"/app.svg", alt:"logo"},
  {id:2, url:"/appName.svg", alt:"logo"},
  {id:3, url:"/c.svg", alt:"logo"},
  {id:4, url:"/cloud.svg", alt:"logo"},
  {id:5, url:"/cloudName.svg", alt:"logo"},
  {id:6, url:"/dock.svg", alt:"logo"},
  {id:7, url:"/dockerName.svg", alt:"logo"}
]

const Tech = () => {
  return (
    <section className='flex items-center px-4 gap-2 md:gap-12 lg:gap-20 justify-center mt-20'>
      {
        images.map((item)=> (
          <Image src={item.url} width={50} height={50} alt={item.alt} className='w-7 sm:w-[50px]' key={item.id}/>
        ))
      }
    </section>
  )
}

export default Tech
