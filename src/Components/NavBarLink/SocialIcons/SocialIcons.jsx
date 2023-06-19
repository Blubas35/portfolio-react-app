import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { Link } from 'react-scroll'
import { motion } from "framer-motion"

const SocialIcons = () => {

    const navVariants = {
        hidden: {
            opacity: 0,
            x: -50,
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.7,
                staggerChildren: 0.1,
            },
        },
    };

    return (
        <motion.div
            className='hidden lg:flex fixed flex-col top-[35%] left-0'
            variants={navVariants}
            initial='hidden'
            animate='visible'
        >
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                    <a className='flex justify-between items-center w-full text-gray-300'
                        href='https://www.linkedin.com/in/domantas-tevelis-697343169/' target='_blank' rel='noreferrer'>
                        Linkedin <FaLinkedin size={30} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                    <a className='flex justify-between items-center w-full text-gray-300'
                        href='https://github.com/Blubas35?tab=repositories' target='_blank' rel='noreferrer'>
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
                        href='https://www.dropbox.com/s/8d9x9jx11i3tbo0/CV%20EN%20Front-end.pdf?dl=0' target='_blank' rel='noreferrer'>
                        Resume <BsFillPersonLinesFill size={30} />
                    </a>
                </li>
            </ul>
        </motion.div>
    )
}

export default SocialIcons