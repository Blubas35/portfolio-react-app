import React, { useState } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import Logo from '../assets/dt-logo.png'
import { Link } from 'react-scroll'
import LinkItem from '../Components/NavBarLink/Menu/MenuItem/LinkItem'
import Menu from '../Components/NavBarLink/Menu/Menu'
import MobileMenu from '../Components/NavBarLink/MobileMenu/MobileMenu'
import SocialIcons from '../Components/NavBarLink/SocialIcons/SocialIcons'



const NavBar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 z-50'>
            <div>
                <Link to="home" smooth={true} duration={500}>
                    <img className='cursor-pointer' src={Logo} alt='Logo image' style={{ width: '50px' }}></img>
                </Link>
            </div>
            {/* menu */}
            <Menu />

            {/* Hamburger */}
            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            {/* mobile menu */}
            <MobileMenu 
            nav={nav}
            onClick={handleClick}
            />

            {/* Social icons */}
            {/* <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                        <a className='flex justify-between items-center w-full text-gray-300'
                            href='https://www.linkedin.com/in/domantas-tevelis-697343169/' target='_blank'>
                            Linkedin <FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                        <a className='flex justify-between items-center w-full text-gray-300'
                            href='https://github.com/Blubas35?tab=repositories' target='_blank'>
                            GitHub <FaGithub size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                        <Link to='contact' className='flex justify-between items-center w-full text-gray-300'>
                            Email <HiOutlineMail size={30} />
                        </Link>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                        <a className='flex justify-between items-center w-full text-gray-300'
                            href='https://www.dropbox.com/s/8d9x9jx11i3tbo0/CV%20EN%20Front-end.pdf?dl=0' target='_blank'>
                            Resume <BsFillPersonLinesFill size={30} />
                        </a>
                    </li>
                </ul>
            </div> */}
            <SocialIcons 
            
            />

        </div>
    )
}

export default NavBar