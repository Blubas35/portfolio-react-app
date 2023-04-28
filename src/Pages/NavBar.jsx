import React, { useState } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa'
import Logo from '../assets/DTLogo.png'
import { Link } from 'react-scroll'
import Menu from '../Components/NavBarLink/Menu/Menu'
import MobileMenu from '../Components/NavBarLink/MobileMenu/MobileMenu'
import SocialIcons from '../Components/NavBarLink/SocialIcons/SocialIcons'
import { motion } from "framer-motion"




const NavBar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    const navVariants = {
        hidden: {
            opacity: 0,
            y: -50,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.7,
                staggerChildren: 0.1,
            },
        },
    };

    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-black text-gray-300 z-50'>
            <motion.div
                variants={navVariants}
                initial='hidden'
                animate='visible'
            >
                <Link to="home" smooth={true} duration={500}>
                    <img className='cursor-pointer' src={Logo} alt='Logo image' style={{ width: '32px' }}></img>
                </Link>
            </motion.div>
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