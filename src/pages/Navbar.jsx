import React from 'react'
import { motion } from "framer-motion"
import PP from "../asset/PP.jpg"
import X from "../asset/TwitterX.png"
import insta from "../asset/Instagram.png"
import github from "../asset/git.png"
import ln from "../asset/LinkedIn.png"

function Navbar() {
  return (
    <motion.div
      initial={{y: '-100vh'}}
      animate={{ y: 0 }}
      transition={{delay: 0.5, duration: 0.5,type: 'spring', stiffness: 50}}
      className='flex justify-between mb-10 relative px-10 border-b top-6 md:top-0 md:px-[70px] border-arinze-blue py-[60px] md:py-[6px] items-center'>
      <div className='md:flex flex-col hidden justify-center items-center'>
        <div className='text-[16px] text-A-writeup '><p className=' text-nowrap'>Let’s Connect:</p>
        <div className='flex mb-2 w-[110px]'>
          <a href="https://twitter.com/priestnuel4"><img src={X} alt="" /></a>
          <a href="https://www.instagram.com/arinzee_chukwu/"><img src={insta} alt="" /></a>
          <a href="https://github.com/emmanuel-455/"><img src={github} alt="" /></a>
          <a href="https://www.linkedin.com/in/emmanuel-arinze-315623267/"><img src={ln} alt="" /></a>
        </div></div>
      </div>
      <div className='flex absolute top-0 md:relative items-center justify-center'>
      <img className='md:w-[7%] w-[16%] mr-3 rounded-full' src={PP} alt="" />
        <div>
          <p className=' text-[18px] font-medium'>Ngene Arinze Emmanuel</p>
          <p className="text-A-writeup text-sm">Frontend Developer</p>
        </div>
      </div>
      <div className='top-[80px] md:top-0 absolute md:relative left-[0px] px-[20px] md:left-[0px] right-[0px] flex md:block justify-between items-center'>
        <div className='flex items-center text-nowrap mr-4 w-[170px]'>
          <div className='w-2 h-2  rounded-full bg-[#57d372] mr-2'></div>
          <p className='text-A-writeup text-sm'>Available to work</p>
        </div>
        <div className='text-wrap text-sm'>
          <p><a className="underline font-semibold" href="mailto:emmanuelarinze455@gmail.com">emmanuelarinze@gmail.com</a></p>
        </div>
      </div>
    </motion.div>
  )
}

export default Navbar
