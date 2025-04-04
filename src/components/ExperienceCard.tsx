'use client'
import React from 'react'
import { motion } from 'framer-motion'


type Props = {}
export default function ExperienceCard({}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
     w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 opacity-30 hover:opacity-100
      cursor-pointer transition-opacity duration-200 overflow-hidden'>
        <motion.img 
        initial={{
            y: -100,
            opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        src="amgad2.jpg" alt="" className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'/>
        <div className='px-0 md:px-10'>
            <h4 className='text-4xl font-light'> Junior Frontend</h4>
            <p className='font-bold text-2xl mt-1'>Google</p>
            <div className='flex space-x-2 my-2'>
                <img className='w-10 h-10 rounded-full' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg" />
                <img className='w-10 h-10 rounded-full' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-plain.svg" />
                <img className='w-10 h-10 rounded-full' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" />
                <img className='w-10 h-10 rounded-full text-blue-500 stroke-current' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg" />

                {/* date range */}
                {/* date range */}
            </div>
            <p className='uppercase py-5 text-gray-300'>started work... ended....</p>
            <ul className='list-disc space-y-4 ml-5 text-lg'>
                <li>Summary points</li>
                <li>Summary points</li>
                <li>Summary points</li>
                <li>Summary points</li>
                <li>Summary points</li>
            </ul>
        </div>
    </article>
  )
}
