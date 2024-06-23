import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
    const isactive = 'text-[#01FFFF] font-bold ';
    const inactive ='';
  return (
    <div className='lg:py-[15px] sticky top-0 text-white bg-[#1E2326] duration-200 hover:bg-[#262d31]'>
        <nav className='flex flex-row justify-between items-center lg:px-[150px]'>
            <div><h1>Pascal</h1></div>
            <div className='lg:flex lg:gap-[80px] font-primaryFont'>
                
                <NavLink to='/'className={({isActive}) => isActive ? isactive:inactive}> <a href="#">HOME</a> </NavLink>
                <NavLink to='/about'className={({isActive}) => isActive ? isactive:inactive}> <a href="#">ABOUT</a> </NavLink>
                <NavLink to='/project'className={({isActive}) => isActive ? isactive:inactive}> <a href="#">PROJECTS</a> </NavLink>
                <NavLink to='/contact'className={({isActive}) => isActive ? isactive:inactive}> <a href="#">CONTACT</a> </NavLink>
              
            </div>
            <div>
                <a href="#" className='text-[#262d31] font-primaryFont bg-[#01FFFF] px-[15px] py-[5px] rounded-[5px] hover:bg-transparent hover:duration-300 hover:border-[1px] hover:border-[#01FFFF] hover:text-[#01FFFF]'>HIRE ME</a>
            </div>
        </nav>
    </div>
  )
}

export default Nav