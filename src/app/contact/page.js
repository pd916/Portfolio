"use client"
import Image from "next/image"
import React, { useState } from 'react'
import { toast } from "sonner"

export default function Contact() {
  const [formData, setFormData] = useState({
    name:"",
    email:"",
    number:"",
    message:""
  })

  const baseUrl = process.env.NEXT_PUBLIC_API_URL
  
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch(`${baseUrl}/api/sendemail`, {
          method:"POST",
          headers:{
              "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
          });
          if (res.ok) {
            toast("Email Send Successfully");
            setFormData({
              name: "",
              email: "",
              number: "",
              message: ""
            });
            window.location.reload();
          }
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <section className="w-full gap-5 h-full pt-14 overflow-hidden">
    <div className='flex mx-4 mt-16'>
      <div className='text-white w-48 md:pl-24 md:w-full'>
        <Image src="/icons/discus.svg" alt='discus' width={150} height={100} className="object-cover md:w-72 mt-10 md:mt-0"/>
      </div>
      <div className='flex flex-col gap-4 w-32 p-3 pt-5 md:w-full'>
        <h1 className='text-white uppercase text-[8px] font-[head] md:text-3xl md:w-[40vw]'>Have question Shoot us an email.</h1>
        <p className='text-white text-[10px] md:text-xl md:font-semibold'>We are in industry-leading publication that provides the latest Website, SEO friendly, 
        how it impact your busines -and career. </p>
      </div>
    </div>

        {/* <p className='text-white px-auto text-muted-foreground text-[10px] mt-16 md:text-lg'>Have a question for us or feedback? please fill out the form  to reach us</p> */}
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
          <div className="lg:col-span-2 lg:py-12">
            <p className="max-w-xl text-4xl font-[head] uppercase text-white">
              You have project in your Mind
            </p>

            <div className="mt-8">
            <Image src="/icons/quextion.svg" alt="question" width={150} height={100} className="object-cover md:w-72 mt-10 md:mt-3"/>
            </div>
          </div>

          <div className="rounded-lg p-8 shadow-lg lg:col-span-3 lg:p-12">
            <form onSubmit={handleSubmit}  className="space-y-4">
              <div>
                <label className="sr-only" htmlFor="name">Name</label>
                <input
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Name"
                  type="text"
                  name="name"
                  onChange={(e)=> setFormData({...formData, name:e.target.value})}
                />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="sr-only" htmlFor="email">Email</label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Email address"
                    type="email"
                    name="email"
                    onChange={(e)=> setFormData({...formData, email:e.target.value})}
                  />
                </div>

                <div>
                  <label className="sr-only" htmlFor="phone">Phone</label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Phone Number"
                    type="number"
                    name="number"
                    onChange={(e)=> setFormData({...formData, number:e.target.value})}
                  />
                </div>
              </div>

              <div>
                <label className="sr-only" htmlFor="message">Message</label>

                <textarea
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Message"
                  rows="8"
                  name="message"
                  onChange={(e)=> setFormData({...formData, message:e.target.value})}
                ></textarea>
              </div>

              <div className="mt-4">
              <button 
              type="submit" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                Send Enquiry
              </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
      </section>
  
  )
}
