import React from 'react'
import { SiNextdotjs } from "react-icons/si";
import { GrReactjs } from "react-icons/gr";
import { FaFigma } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa6";
import { RiJavascriptFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";

const About = () => {
  return (
    <div className='bg-[#1E2326] min-h-screen py-[50px] mx-auto px-4 sm:px-[100px] md:px-[150px]  lg:gap-[100px] lg:flex lg:justify-center '>
        <div className='lg:w-[50%]'>
            <h1 className='text-[#01FFFF] font-primaryFont text-[30px] pt-[50px] mb-[20px]'>About Me</h1>
            <img src="./profile.jpg" alt="" className='w-[200px] rounded-[20px] my-[50px]' />
            <p className='text-[#6d8092] font-thin font-primaryFont text-[15px]'>
            With a strong foundation in user research, wireframing, and prototyping, coupled with proficiency in HTML, CSS, JavaScript, Next Js, and React, I strive to bridge the gap between design and development. My toolkit includes industry-standard software like Figma and Git, enabling me to bring ideas to life efficiently and effectively.
            </p>
            <p className='text-[#6d8092] mt-[40px] font-thin font-primaryFont text-[15px]'>
            Throughout my career, I have had the privilege of working with notable companies such as <a href="https://caritasrwanda.org/" className='text-[#01FFFF]'>Caritas Rwanda</a>, and <a href="https://demo.efiche.rw/" className='text-[#01FFFF]'>eFiche</a>, where I contributed to the successful redesign of several high-traffic websites, resulting in a 20% increase in user engagement. My design philosophy centers around creating user-friendly, accessible, and aesthetically pleasing interfaces that resonate with users and achieve business goals.
            </p>
        </div>

        <div className='mt-[50px] lg:w-[50%]'>
            <h1 className='text-[#01FFFF] font-primaryFont text-[25px] mb-[20px]'>
                Technologies
            </h1>
            <p className='text-[#6d8092] font-primaryFont text-[15px]'>
            I specialize in using a range of cutting-edge technologies to design and develop seamless user experiences. My core skills include:
            </p>
            <div className='text-[#6d8092] mt-[50px] font-primaryFont grid grid-cols-2 gap-9'>
                <ul className='hover:text-[#01FFFF] w-[120px]'>
                    <li className='flex items-center gap-2'><GrReactjs className='text-[#01FFFF] w-[30px] h-[30px]' /><a href="https://react.dev/blog/2023/03/16/introducing-react-dev">
                         React Js</a></li>
                </ul>
                <ul className='hover:text-[#01FFFF] w-[120px]'>
                    <li className='flex items-center gap-2'><SiNextdotjs className='text-[#01FFFF] w-[30px] h-[30px]' />
                    <a href="https://nextjs.org/docs">Next Js</a></li>
                </ul>
                <ul className='hover:text-[#01FFFF] w-[120px]'>
                    <li className='flex items-center gap-2'><FaFigma className='text-[#01FFFF] w-[30px] h-[30px]' />
                    <a href="https://help.figma.com/hc/en-us/categories/360002051613-Get-started">Figma</a></li>
                </ul>
                <ul className='hover:text-[#01FFFF] w-[120px]'>
                    <li className='flex items-center gap-2'><FaHtml5 className='text-[#01FFFF] w-[30px] h-[30px]' />
                    <a href="https://www.w3schools.com/html/html_intro.asp">HTML</a></li>
                </ul>
                <ul className='hover:text-[#01FFFF] w-[150px]'>
                    <li className='flex items-center gap-2'><RiJavascriptFill className='text-[#01FFFF] w-[30px] h-[30px]' />
                    <a href="https://www.w3schools.com/js/">Javascript</a></li>
                </ul>
                <ul className='hover:text-[#01FFFF] w-[160px]'>
                    <li className='flex items-center gap-2'><RiTailwindCssFill className='text-[#01FFFF] w-[30px] h-[30px]' />
                    <a href="https://tailwindcss.com/docs/installation">Tailwind CSS</a></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default About