'use client'

import React from 'react'
import { FaPhone } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string,
  email: string,
  subject: string,
  message: string,
};

type Props = {}

export default function ContactMe({}: Props) {
    const { register, handleSubmit} = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = formData => {
        window.location.href = `mailto:amgadsameh77@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
    };

  return (
    <div className='h-screen relative flex flex-col overflow-hidden text-center md:text-left xl:flex-row 
    max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 xl:space-x-10 mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Contact</h3>
        <div className='flex flex-col space-y-5'>

            <h4 className='text-4xl font-semibold text-center'>
                I have got just what you need.{' '}
                <span className='decoration-[#F7AB0A]/50 underline'>Lets Talk</span>
            </h4>

            <div className='flex items-center justify-center space-x-5 '>
                <FaPhone className='h-15 w-5 text-[#F7AB0A]/50 fill-current animate-pulse'/>
                <p className='font-semibold text-lg'>+201091318119</p>
            </div>

            <div className='flex items-center justify-center space-x-5 '>
                <IoIosMail className='h-15 w-8 text-[#F7AB0A]/50 fill-current animate-pulse'/>
                <p className='font-semibold text-lg'>Amgadsameh99@gmail.com</p>
            </div>

            <div className='flex items-center justify-center space-x-5 '>
                <FaLocationDot className='h-10 text-[#F7AB0A]/50 fill-current animate-pulse'/>
                <p className='font-semibold text-lg'>Egypt - Cairo</p>
            </div>

        </div>
        <form onSubmit={handleSubmit(onSubmit)} className='grid grid-cols-1 md:grid-cols-2 gap-3 mt-10'>
            <input {...register("name")} type="text" placeholder='Name' className='bg-slate-400/10 px-6 py-4 border-[#242424] outline-none rounded-sm border-b  text-gray-500 placeholder-gray-500 transition-all duration-100 focus:border-[#F7AB0A]/40 focus:text-[#F7AB0A]/40 hover:border-[#F7AB0A]/40' />
            <input {...register("email")} type="email" placeholder='Email' className='bg-slate-400/10 px-6 py-4 border-[#242424] outline-none rounded-sm border-b text-gray-500 placeholder-gray-500 transition-all duration-100 focus:border-[#F7AB0A]/40 focus:text-[#F7AB0A]/40 hover:border-[#F7AB0A]/40'/>
            <input {...register("subject")} type="text" placeholder='Subject' className='col-span-2 bg-slate-400/10 px-6 py-4 border-[#242424] outline-none rounded-sm border-b text-gray-500 placeholder-gray-500 transition-all duration-100 focus:border-[#F7AB0A]/40 focus:text-[#F7AB0A]/40 hover:border-[#F7AB0A]/40'/>
            <textarea {...register("message")}  placeholder='Message' rows={4} className='col-span-2 bg-slate-400/10 px-6 py-4 border-[#242424] outline-none rounded-sm border-b text-gray-500 placeholder-gray-500 transition-all duration-100 focus:border-[#F7AB0A]/40 focus:text-[#F7AB0A]/40 hover:border-[#F7AB0A]/40'/>
            <button type='submit' className='bg-[#F7AB0A] cursor-pointer text-black text-lg text-center w-full p-4 font-bold rounded-lg col-span-2'>Submit</button>
        </form>
    </div>
  )
}