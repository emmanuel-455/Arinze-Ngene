import React from 'react';
import X from "../asset/TwitterX.png";
import insta from "../asset/Instagram.png";
import github from "../asset/git.png";
import ln from "../asset/LinkedIn.png";
import Arrow from "../asset/Arrow 8.svg";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className='md:px-9 px-2 border-t border-A-writeup pt-7 pb-5 flex justify-between'>
      <div>
        <p className='md:hidden text-[16px] mb-2 text-A-writeup'>let's Connect</p>
        <p className='text-[15px] text-A-writeup'>Developer <span className='text-white font-semibold text-[15px] underline'>Ngene Arinze</span></p>
      </div>
      <a className="text-[19px] md:flex md:block hidden justify-center font-medium items-center ml-2" href="tel:+2347041162691">Book a Call <img className="ml-2 text-[20px]" src={Arrow} alt="" /></a>
      <div>
        <div className='flex mb-2 md:hidden w-[110px]'>
          <a href="https://twitter.com/priestnuel4"><img src={X} alt="" /></a>
          <a href="https://www.instagram.com/arinzee_chukwu/"><img src={insta} alt="" /></a>
          <a href="https://github.com/emmanuel-455/"><img src={github} alt="" /></a>
          <a href="https://www.linkedin.com/in/emmanuel-arinze-315623267/"><img src={ln} alt="" /></a>
        </div>
        <p className='text-[15px] text-A-writeup'>&copy; Copyright {year}</p>
      </div>
    </div>
  );
}

export default Footer;
