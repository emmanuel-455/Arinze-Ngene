import React from 'react'
import Award from "../asset/Award.png"

function About() {
  return (
    <div id="About">
      <h1 className="font-semibold text-center pt-20 md:pt-[144px] mb-10 text-A-writeup text-[30px]">About Me</h1>
      <div className="md:flex grid items-center md:justify-evenly flex-wrap md:mt-[100px] md:mb-20 mb-12 m-auto">
        <div className="text-center md:border-s-4 my-5 px-9 md:border-arinze-blue md:pl-16">
          <p className="mb-3 text-arinze-blue font-medium text-[15px]">Experience</p>
          <p className="text-[15px] text-A-writeup">2+ Years</p>
        </div>
        <div className="text-center md:border-s-4 my-5 px-9 md:border-arinze-blue md:pl-16">
          <p className="mb-3 text-arinze-blue font-medium text-[15px]">Projects</p>
          <p className="text-[15px] text-A-writeup">50+ Completed</p>
        </div>
        <div className="text-center md:border-s-4 my-5 px-9 md:border-arinze-blue md:pl-16">
          <p className="mb-3 text-arinze-blue font-medium text-[15px]">Clients</p>
          <p className="text-[15px] text-A-writeup">100+ World Wide</p>
        </div>
      </div>

      <div className='md:flex md:justify-between pl-6 pr-4 md:px-[150px]'>
        <div className=' md:w-[50%] mb-10'>
        <div className='border-b mb-3 text-lg border-arinze-blue'>
          <h1 className='font-semibold'>Introduction</h1>
          </div>
          <div className='text-[14px] text-A-writeup pr-1'>
          <p className='mb-3 md:mb-5'>Hey there! I'm Ngene Arinze Emmanuel, a Web Designer with a passion for crafting immersive digital experiences. Over the past decade, I've delved into the world of web design, blending creativity and technical finesse to weave digital magic.</p>
          <p className='mb-3 md:mb-5'>My portfolio speaks volumes about my dedication to creating visually stunning websites that not only catch the eye but also elevate user experiences. From startups to established brands, I've collaborated on projects showcasing my ability to translate ideas into functional, responsive, and visually captivating digital spaces.</p>
          <p className='mb-3 md:mb-5'>Staying attuned to design trends, I ensure that my work has a timeless quality while incorporating the latest tools and technologies. With a toolbox filled with design tools and technologies, I effortlessly bring conceptual visions to life.</p>
          <p className='mb-3 md:mb-5'>Beyond aesthetics, my two years of experience have honed my skills in navigating the dynamic tech landscape. Whether it's intuitive navigation, seamless interactivity, or optimizing performance for various devices, I've got it covered.</p>
          <p className='mb-3 md:mb-5'>Explore my portfolio, and you'll uncover a decade of innovation, creativity, and a relentless commitment to transforming ideas into digital masterpieces. I don't just meet expectations; I exceed them, leaving a lasting impression on the virtual canvas. Welcome to my world, where design meets functionality, and every click is a step into a memorable online journey.</p>
          </div>
        </div>
        <div className='w-[1px] mx-4 hidden md:block bg-A-writeup h-auto'>
        </div>

        <div className='md:w-[50%]'>
        <div className='border-b mb-3 text-lg border-arinze-blue'>
          <h1 className='font-semibold'>Awards</h1>
          </div>

          <div>
            <div className='flex justify-between'>
              <p className=' text-nowrap'>1. Certification</p>
              <div className='flex mb-1 items-center justify-end'><img className='w-[12%] mr-1' src={Award} alt="" /><a className=' text-sm text-A-writeup text-nowrap' href="">Udemy Certificate</a></div>
            </div>
            <div className='flex mb-1 justify-between'>
              <p className=' text-nowrap'>2. Open Source</p>
              <div className='flex items-center justify-end'><img className='w-[12%] mr-1' src={Award} alt="" /><a className=' text-sm text-A-writeup text-nowrap' href="">Airbnb/JavaScript</a></div>
            </div>
            <div className='flex mb-1 justify-between'>
              <p className=' text-nowrap'>3. Community Involvement</p>
              <div className='flex items-center justify-end'><img className='w-[12%] mr-1' src={Award} alt="" /><a className=' text-sm text-A-writeup text-nowrap' href="">Centadesk</a></div>
            </div>
            <div className='flex mb-1 justify-between'>
              <p className=' text-nowrap'>4. Personal Projects</p>
              <div className='flex items-center justify-end'><img className='w-[12%] mr-1' src={Award} alt="" /><a className=' text-sm text-A-writeup text-nowrap' href="">Projects-Github</a></div>
            </div>
            <div className='flex mb-1 justify-between'>
              <p className='text-nowrap'>5. Website of the year</p>
              <div className='flex items-center justify-end'><img className='w-[12%] mr-1' src={Award} alt="" /><a className=' text-sm text-A-writeup text-nowrap' href="">Portfolio Award, 2024</a></div>
            </div>
          </div>
          </div>
      </div>
    </div>
  )
}

export default About
