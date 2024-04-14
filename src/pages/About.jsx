import React from 'react'
import Award from "../asset/Award.png"
import Html from "../asset/html5-stack.svg"
import CSS from "../asset/css3-stack.svg"
import JS from "../asset/javascript-stack.svg"
import Reactjs from "../asset/react-stack.svg"
import T from "../asset/t-stack.svg"
import api from "../asset/api-stack.svg"
import nodejs from "../asset/nodejs-stack.svg"
//import vc from "../asset/vscode-stack.svg"
import figma from "../asset/figma-stack.svg"

function About() {
  return (
    <div id="About">
      <h1 className="font-semibold text-center pt-[150px] md:pt-[144px] mb-10 text-A-writeup text-[30px]">About Me</h1>
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

      <div className='md:flex md:justify-between pl-6 pr-4 md:px-[100px]'>
        <div className=' md:w-[50%] mb-10'>
        <div className='border-b mb-3 text-lg border-arinze-blue'>
          <h1 className='font-bold text-[20px]'>Introduction</h1>
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

        <div className='md:w-[50%] mb-12'>
        <div className='border-b mb-3 text-lg border-arinze-blue'>
          <h1 className='font-bold text-[20px]'>Awards</h1>
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
              <div className='flex items-center justify-end'><img className='w-[14%] mr-1' src={Award} alt="" /><a className=' text-sm text-A-writeup text-nowrap' href="">Centadesk</a></div>
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

      <div className='md:flex md:justify-between pl-6 pr-4 md:px-[100px]'>
        <div className=' md:w-[50%] mb-10'>
        <div className='border-b mb-3 text-lg border-arinze-blue'>
          <h1 className='font-bold text-[20px]'>Work Experience</h1>
          </div>
          <div className='p pr-1'>
            <div className='mb-5'>
              <h1 className='text-[16px] font-semibold'>Freelance Web Development</h1>
              <p className="text-[13px] text-A-writeup mb-2">Present</p>
              <ul className="text-A-writeup text-[14px]">
                <li>1. Custom website development.</li>
                <li>2. Client consultation and project scoping.</li>
                <li>3. Creative conceptualization and design.</li>
                <li>4. Responsive web development.</li>
                <li>5. E-commerce solutions.</li>
                <li>6. Ongoing maintenance and support.</li>
              </ul>
          </div>
            <div className='mb-5'>
              <h1 className='text-[16px] font-semibold'>Frontend Developer</h1>
              <p className="text-[13px] text-A-writeup mb-2">Baddhia LLC, lagos, nigeria | 2023 (Contract)</p>
              <ul className="text-A-writeup text-[14px]">
                <li>1. Designed and implemented user interfaces for web applications, focusing on usability, accessibility, and modern design aesthetics.</li>
                <li>2. Worked closely with the development team to ensure the seamless integration of design concepts into functional web solutions.</li>
                <li>3. Played a key role in revamping the company website, resulting in a significant increase in user engagement and conversion rates.</li>
                <li>4. Conducted usability testing and gathered user feedback to iterate and enhance the user experience continually.</li>
              </ul>
          </div>
            <div className='mb-5'>
              <h1 className='text-[16px] font-semibold'>Junior Frontend Developer</h1>
              <p className="text-[13px] text-A-writeup mb-2">Centadesk, Enugu, Nigeria | 2022</p>
              <ul className="text-A-writeup text-[14px]">
                <li>1. Assisted in the design and development of websites for Organization, gaining hands-on experience in the fundamentals of web design.</li>
                <li>2. Collaborated with senior designers to create wireframes, mockups, and prototypes for client presentations and project approvals.</li>
                <li>3. Participated in client meetings, contributing design insights and addressing client feedback to ensure project alignment with their vision.</li>
                <li>4. Acquired proficiency in HTML, CSS, and JavaScript, expanding technical skills in conjunction with evolving design expertise.</li>
              </ul>
          </div>
          </div>
        </div>
        <div className='w-[1px] mx-4 hidden md:block bg-A-writeup h-auto'>
        </div>

        <div className='md:w-[50%]'>
        <div className='border-b mb-3 text-lg border-arinze-blue'>
          <h1 className='font-bold text-[20px]'>Education</h1>
          </div>

          <div>
          <div className='mb-5'>
              <h1 className='text-[16px] font-semibold'>Certification in Advanced Web Development</h1>
              <p className="text-[13px] text-A-writeup mb-2">Centadesk, Enugu, Nigeria | 2022</p>
              <ul className="text-A-writeup text-[14px]">
                <li>1. Undertook an intensive program to deepen knowledge in advanced web design technologies and methodologies.</li>
                <li>2. Specialized in the latest design trends, responsive web design, and the integration of interactive elements for enhanced user experiences.</li>
                <li>3. Completed hands-on projects that involved complex design challenges and solutions, further honing practical skills in the field.</li>
              </ul>
          </div>
          <div className='mb-5'>
              <h1 className='text-[16px] font-semibold'>Certification in Frontend Development</h1>
              <div className='flex justify-start mb-2 items-center'><p className="text-[13px] mr-3 text-A-writeup ">Udemy Course from Angela yu.</p><a className='underline text-sm' href="">Certificate</a></div>
              <ul className="text-A-writeup text-[14px]">
                <li>1. Undertook an Onlinr Course to deepen knowledge in advanced web development technologies and methodologies.</li>
                <li>2. Specialized in the latest design trends, responsive web design, and the integration of interactive elements for enhanced user experiences.</li>
                <li>3. Completed hands-on projects that involved complex design challenges and solutions, further honing practical skills in the field.</li>
              </ul>
          </div>
          <div className='mb-5'>
              <h1 className='text-[16px] font-semibold'>Mass Communication</h1>
              <div className='flex justify-start mb-2 items-center'><p className="text-[13px] text-A-writeup ">Institute of Management and Technology | Present</p></div>
              <ul className="text-A-writeup text-[14px]">
                <li>1. Undergoing and acquiring knowledge of mass communication.</li>
                <li>2. Specializing on Journalism.</li>
                <li>3. Completed OND project based on journalist investigation on a giving topic.</li>
              </ul>
          </div>
          </div>
          </div>
      </div>

      


      <h1 className="font-semibold text-center pt-20 md:pt-[144px] mb-10 text-A-writeup text-[30px]">My Services</h1>
      <div className='md:flex md:justify-between pl-6 pr-4 md:px-[100px]'>
        <div className=' md:w-[50%] mb-10'>
        <div className='border-b mb-3 text-lg border-arinze-blue'>
          <h1 className='font-bold text-[20px]'>Services</h1>
          </div>
          <div className=' pr-1'>
            <div className='mb-3'>
              <h1 className='font=[16px] font-semibold'>Website Devlopement</h1>
              <p className='text-14px text-A-writeup'>Designing and developing websites tailored to clients' needs, ranging from simple static sites to complex web applications.</p>
          </div>
            <div className='mb-3'>
              <h1 className='font=[16px] font-semibold'>Responsive Design</h1>
              <p className='text-14px text-A-writeup'>Ensuring that websites are optimized for various devices and screen sizes, providing a seamless user experience across desktops, tablets, and mobile devices.</p>
          </div>
            <div className='mb-3'>
              <h1 className='font=[16px] font-semibold'>Frontend Development</h1>
              <p className='text-14px text-A-writeup'>Building the frontend interface of websites using technologies like HTML, CSS, and JavaScript, and frameworks/libraries like React</p>
          </div>
            <div className='mb-3'>
              <h1 className='font=[16px] font-semibold'>Backend Development</h1>
              <p className='text-14px text-A-writeup'>Creating the server-side functionality and database management systems required to power dynamic web applications. This involves using server-side languages like Node.js and database systems like PostgreSQL.</p>
          </div>
            <div className='mb-3'>
              <h1 className='font=[16px] font-semibold'>Website Maintenance and Support</h1>
              <p className='text-14px text-A-writeup'> Providing ongoing maintenance services to ensure websites remain secure, up-to-date, and free from errors. This includes software updates, security patches, and troubleshooting technical issues.</p>
          </div>
          </div>
        </div>
        <div className='w-[1px] mx-4 hidden md:block bg-A-writeup h-auto'>
        </div>

        <div className='md:w-[50%]'>
        <div className='border-b mb-3 text-lg border-arinze-blue'>
          <h1 className='font-semibold'>Stacks</h1>
          </div>

          <div className='flex justify-between'>
            <div className='flex flex-col justify-center items-center w-[4.5%] mx-[5px]'>
              <img className='' src={Html} alt="" />
              <p className="text-xs text-A-writeup mt-2">HTML</p>
            </div>
            <div className='flex flex-col justify-center items-center w-[4.5%] mx-[5px]'>
              <img className='' src={CSS} alt="" />
              <p className="text-xs text-A-writeup mt-2">CSS</p>
            </div>
            <div className='flex flex-col justify-center items-center w-[4.5%] mx-[5px]'>
              <img className='' src={JS} alt="" />
              <p className="text-xs text-A-writeup mt-2">javaScript</p>
            </div>
            <div className='flex flex-col justify-center items-center w-[4.5%] mx-[5px]'>
              <img className='' src={Reactjs} alt="" />
              <p className="text-xs text-A-writeup mt-2">Reactjs</p>
            </div>
            <div className='flex flex-col justify-center items-center w-[4.5%] mx-[5px]'>
              <img className='' src={T} alt="" />
              <p className="text-xs text-A-writeup mt-2">TailwindCSS</p>
            </div>
            <div className='flex flex-col justify-center items-center w-[4.5%] mx-[5px]'>
              <img className='' src={api} alt="" />
              <p className="text-xs text-A-writeup mt-2">API</p>
            </div>
            <div className='flex flex-col justify-center items-center w-[4.5%] mx-[5px]'>
              <img className='' src={nodejs} alt="" />
              <p className="text-xs text-A-writeup mt-2">Nodejs</p>
            </div>
            <div className='flex flex-col justify-center items-center w-[4.5%] mx-[5px]'>
              <img className='' src={figma} alt="" />
              <p className="text-xs text-A-writeup mt-2">Figma</p>
            </div>
          </div>
          </div>
      </div>
    </div>
  )
}

export default About
