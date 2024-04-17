import React, { useState } from "react";
import Arrow from "../asset/Arrow 8.svg";
import Open from "../asset/nav icon.png";
import Close from "../asset/close.png";
import { motion } from 'framer-motion';

function Info() {
  const [open, setOpen] = useState(false);

  function openIcon() {
    setOpen(true);
  }

  function closeIcon() {
    setOpen(false);
  }

  return (
    <div className='bg-black relative mb-[100px]' id="Info">
      <div>
        
          
        <div className='flex relative md:hidden md:mr-8 mr-6 mt-3 justify-end'>
          <img src={Open} className='w-7 open fixed mb-3' onClick={openIcon} alt="" />
        </div>
        

        <div style={{ display: open ? "block" : "none" }} className="w-full mt-[-40px] h-lvh font-medium text-xl fixed z-50 bg-black" id="bar">
          <div className="flex absolute right-0 mr-6 justify-end">
            <img src={Close} className='w-6 open mb-3' onClick={closeIcon} alt="" />
          </div>
          <div onClick={closeIcon} className="text-center mt-8">
            <p className="py-5 text-[15px]"><a href="#Info">Info</a></p>
            <p className="py-5 text-[15px]"><a href="#Project">Project</a></p>
            <p className="py-5 text-[15px]"><a href="#About">About</a></p>            
            <p className="py-5 text-[15px]"><a href="#Media">Media</a></p>
          </div>
        </div>
      </div>

      <div className='text-center'>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 2 }}
          className='mt-5 md:mt-0  md:pt-14 pb-[40px] border-b border-A-writeup pt-[40px]'>
          <p className='font-semibold md:text-[65px] text-[45px] leading-[50px] md:leading-snug mb-7 text-center m-auto  md:w-[70%] px-3 mt-4'>crafting immersive and visually stunning web experiences</p>
          <div className="md:flex md:justify-center mb-9 md:items-center">
            <p className='md:text-[20px] text-[15px] text-A-writeup font-normal'>Interested in working with me? </p><a className="text-[19px] flex justify-center font-medium items-center ml-2" href="tel:+2347041162691">Call me<img className="ml-2 text-[20px]" src={Arrow} alt="" /></a>
          </div>
          <div className="flex justify-center">
  <motion.button
    initial={{ y: '100vh' }}
    animate={{ y: 0 }}
    transition={{ delay: -0.1, type: 'spring', stiffness: 15 }}
    whileHover={{ scale: 1.1, boxShadow: "0px 0px 8px rgb(114,203,231)", textShadow: "0px 0px 2px rgb(114,203,231)"}}
    className="cursor-pointer flex border-[1px] border-arinze-blue pl-3 pr-5 py-2 ml-3 items-center rounded-md text-arinze-blue tracking-wider shadow-xl"
  >
    <a href="https://drive.google.com/file/d/14D6v8dZ-i9tcP12t0usyyIeFwPiX_N3Y/view?usp=drive_link" className='ml-2 text-arinze-blue font-medium text-[14px]'>Download Resume</a>
  </motion.button>
</div>
        </motion.div>
        {/* <motion.button
          initial={{ y: '100vh' }}
          animate={{ y: 0 }}
          transition={{ delay: -0.1, type: 'spring', stiffness: 15 }}
          whileHover={{ scale: 1.1, boxShadow: "0px 0px 8px rgb(114,203,231)", textShadow: "0px 0px 2px rgb(114,203,231)"}}
          className="cursor-pointer flex border-2 border-arinze-blue md:mt-20 mt-[120px] px-3 py-3 items-center rounded-md text-arinze-blue m-auto tracking-wider shadow-xl"
        >
          <svg
            className="w-5 h-5"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
              strokeLinejoin="round"
              strokeLinecap="round"
            ></path>
          </svg>
          <a href="https://drive.google.com/file/d/1pGNSQjPPmNV9ixgm1VrpDjKKaQVSako1/view?usp=sharing" className='ml-2 text-arinze-blue font-medium text-[15px]'>Download Resume</a>
        </motion.button> */}
      </div>
    </div>
  );
}

export default Info;
