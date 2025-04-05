'use client'
import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

export default function Projects({}: Props) {
    const projects = [1,2,3,4,5];
  return (
    <motion.div 
    initial={{
        opacity: 0,
    }}
    whileInView={{
        opacity: 1,
    }}
    transition={{ duration: 1.5 }}
    className='h-screen relative flex flex-col overflow-hidden text-center md:text-left xl:flex-row 
    max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>

      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Projects</h3>

        <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20
         scrollbar-track-gray-400/20
     scrollbar-thumb-[#F7AB0A]/80 scrollbar-thin'>
            {projects.map((project,i) => (
                <div className='w-12/12  snap-start flex flex-col flex-shrink-0 space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
                    <motion.img
                        initial={{
                            y: -300,
                            opacity: 0,
                        }}
                        transition={{ duration: 1.2 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    src="mockup.png" alt="" className='lg:w-92'/>

                    <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                        <h4 className='text-4xl font-semibold text-center'>
                            <span className='underline decoration-[#F7AB0A]/50'>Case Study {i + 1} of {projects.length}:</span>
                             UPS Clone
                        </h4>
                        <p className='text-lg text-center md:text-left'>
                            UPS is a global logistics company that delivers packages and products to various locations.
                            This project involved designing and developing a clone of UPS's website and mobile application.
                            This project involved designing and developing a clone of UPS's website and mobile application.
                        </p>
                    </div>
                </div>
            ))}
        </div>

      <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12'/>
    </motion.div>
  )
}