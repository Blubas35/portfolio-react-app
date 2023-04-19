import React, { useState } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa'
import Logo from '../assets/DTLogo.png'
import { Link } from 'react-scroll'
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
                    <img className='cursor-pointer' src={Logo} alt='Logo image' style={{ width: '32px' }}></img>
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
            <SocialIcons 
            />

        </div>
    )
}

export default NavBar