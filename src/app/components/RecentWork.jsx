import { workData } from '@/constant/data'
import Image from 'next/image'
import React from 'react'

const RecentWork = () => {
  return (
     <section className='p-5'>
     <h1 className='text-xl text-white font-[head] text-center my-8'>A Small Selection of <span className='text-[#D6A77A]'>recent Work </span></h1>
        <div className='grid md:grid-cols-2 gap-10'>
        {workData?.map((item)=> (
                <div key={item.id} className='rounded-lg flex flex-col gap-4 p-5 bg-[#23194A]'>
                    <Image src={item.img} alt='card' width={400} height={100} className='w-full sm:w-full p-2 sm:h-full rounded-xl bg-[#58536d]'/>
                    <div className='flex flex-col gap-3'>
                        <h3 className='text-lg text-white font-semibold'>{item.title}</h3>
                        <p className='text-medium text-gray-300'>{item.description.slice(0, 135)}...</p>
                    </div>
                </div>
            ))
        }
        </div>
     </section>
  )
}

export default RecentWork
