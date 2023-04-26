import React from 'react'
import { Link } from 'react-scroll'
import { motion } from "framer-motion"

const LinkItem = ({ linkTo, text }) => {
    return (
        <motion.li className='nav-link px-0 border-b-2 border-black hover:border-orange'>
            <Link to={linkTo} smooth={true} duration={500} >
                {text}
            </Link>
        </motion.li>
    )
}

export default LinkItem