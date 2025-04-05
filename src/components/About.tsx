'use client'
import React from 'react'
import { motion } from "framer-motion";


type Props = {}

export default function About({}: Props) {
  return (
    <motion.div
    initial={{
        opacity: 0,
    }}
    whileInView={{
        opacity: 1,
    }}
    transition={{ duration: 1.5 }}
    className='h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>
      <motion.img 
        initial={{
            x: -200,
            opacity: 0,
        }}
        whileInView={{
            x: 0,
            opacity: 1,
        
}}
        transition={{ duration: 1.2 }}
      src="amgad2.jpg" alt=""
      className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]' />
      <div className='space-y-10 px-0 md:px-10'>
        <h4 className='text-4xl font-semibold'>Here is a <span className='underline decoration-[#F7AB0A]/50'> little</span> background</h4>
        <p className='text-base'>with a keen eye for crafting beautiful, responsive, and user-friendly web experiences. I specialize in turning ideas into interactive realities using modern technologies like React, Next.js, Tailwind CSS, and TypeScript. With a strong foundation in UI/UX principles, I build fast, accessible, and visually appealing websites that engage users and drive results. Whether it’s optimizing performance, ensuring cross-browser compatibility, or creating smooth animations, I thrive on writing clean, efficient code that brings designs to life. When I’m not coding, I love exploring new design trends, contributing to open-source projects, and staying ahead of the ever-evolving web landscape. Let’s build something amazing together!</p>
      </div>
    </motion.div>
  )
}
