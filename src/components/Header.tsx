'use client'
import React from 'react'
import { SocialIcon } from 'react-social-icons';
import { motion } from "framer-motion";
import Link from 'next/link';

type Props = {}

export default function Header({}: Props) {
  return (
    <header className='sticky top-0 p-5 flex justify-between  max-w-7xl mx-auto z-20 xl:items-center'>
        <motion.div initial={{
            x: -500,
            opacity: 0,
            scale: 0.5
        }}
        animate={{
            x: 0,
            opacity: 1,
            scale: 1
        }}
        transition={{
            duration: 1.5
        }}
         className='flex flex-row items-center'>
            <SocialIcon url="http://twitter.com/jaketrent" fgColor='gray' bgColor='transparent'/>
            <SocialIcon url="http://fsd.com/jaketrent" fgColor='gray' bgColor='transparent'/>
            <SocialIcon url="http://youtube.com/jaketrent" fgColor='gray' bgColor='transparent'/>
            <SocialIcon url="http://facebook.com/jaketrent" fgColor='gray' bgColor='transparent'/>
            <SocialIcon url="http://instagram.com/jaketrent" fgColor='gray' bgColor='transparent'/>
            <SocialIcon url="http://fsd.com/jaketrent" fgColor='gray' bgColor='transparent'/>
        </motion.div>
        <Link href="#contact">
        <motion.div
        initial={{
            x: 500,
            opacity: 0,
            scale: 0.5
        }}
        animate={{
            x: 0,
            opacity: 1,
            scale: 1
        }}
        transition={{
            duration: 1.5
        }}
         className='flex flex-row items-center'>
            <SocialIcon network='email' fgColor='gray' bgColor='transparent' className='cursor-pointer'/>
            <p className='uppercase hidden md:inline text-sm text-gray-400'>Get In Touch</p>
        </motion.div>
        </Link>
    </header>
  )
}
