import React from 'react';
import X from "../asset/TwitterX.png";
import insta from "../asset/Instagram.png";
import github from "../asset/git.png";
import ln from "../asset/LinkedIn.png";
import Arrow from "../asset/Arrow 8.svg";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className='md:px-9 px-3 border-t border-A-writeup pt-7 pb-5 flex justify-between'>
      <div>
        <p className='md:hidden text-[16px] mb-2 text-A-writeup'>let's Connect</p>
        <p className='text-[15px] text-A-writeup'>Developer <span className='text-white text-[17px] underline'>Ngene Arinze</span></p>
      </div>
      <a className="text-[19px] md:flex md:block hidden justify-center font-medium items-center ml-2" href="">Book a Call <img className="ml-2 text-[20px]" src={Arrow} alt="" /></a>
      <div>
        <div className='flex mb-2 md:hidden w-7'>
          <img src={X} alt="" />
          <img src={insta} alt="" />
          <img src={github} alt="" />
          <img src={ln} alt="" />
        </div>
        <p className='text-[15px] text-A-writeup'>&copy; Copyright {year}</p>
      </div>
    </div>
  );
}

export default Footer;
