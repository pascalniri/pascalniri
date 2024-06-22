import React from 'react'
import { SiNextdotjs } from "react-icons/si";
import { GrReactjs } from "react-icons/gr";
import { FaFigma } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa6";
import { RiJavascriptFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";

const About = () => {
  return (
    <div className='bg-[#1E2326] min-h-screen py-[50px] mx-auto px-4 sm:px-[100px] md:px-[150px] lg:grid lg:grid-cols-2 lg:gap-[100px]'>
        <div className=''>
            <h1 className='text-[#01FFFF] font-primaryFont text-[30px] pt-[50px] mb-[20px]'>About Me</h1>
            <img src="./profile.jpg" alt="" className='w-[200px] h-[200px] rounded-[50%] my-[50px]' />
            <p className='text-white font-secondaryFont text-[15px]'>
            I'm a passionate and creative UI/UX designer and front-end developer
          with 3 years of experience. I specialize in designing user-centric
          interfaces and developing responsive, interactive websites and
          applications. My goal is to bridge the gap between design and
          technology to create seamless and engaging user experiences.
            </p>
        </div>

        <div className='mt-[50px]'>
            <h1 className='text-[#919191] font-primaryFont text-[25px] mb-[20px]'>
                Technologies
            </h1>
            <p className='text-white font-secondaryFont text-[15px]'>
            I'm a passionate and creative UI/UX designer and front-end developer
            with 3 years of experience. I specialize in 
            </p>
            <div className='text-white mt-[50px] font-secondaryFont grid grid-cols-2 gap-9'>
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
                <ul className='hover:text-[#01FFFF] w-[120px]'>
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