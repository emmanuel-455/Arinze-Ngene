import React from 'react'
import logo from "../asset/Logo.png"
import {motion} from "framer-motion"

function Navbar() {
  return (
    <motion.div
      initial={{y: '-100vh'}}
      animate={{ y: 0 }}
      transition={{delay: 0.5, duration: 0.5,type: 'spring', stiffness: 50}}
      className='flex justify-between px-4 border-b md:border-b-0 border-arinze-blue py-1 items-center md:py-5 md:px-11'>
      <div>
       <img className='w-[25%]' src={logo} alt="" />
      </div>
      <div className='hidden md:block font-medium text-[15px]'>
        <a href="#Info" className='px-4'>Info</a>
        <a href="#About" className='px-4'>About Me</a>
        <a href="#Proficiency" className='px-4'>Proficiency</a>
        <a href="#Project" className='px-4'>Projects</a>
        <a href="#Media" className='px-4'>Media</a>
      </div>
      <button className='bg-arinze-blue text-black px-5 py-[6px] font-medium md:text-[14px] md:py-2 md:px-8 rounded-3xl'>Contact info</button>
    </motion.div>
  )
}

export default Navbar