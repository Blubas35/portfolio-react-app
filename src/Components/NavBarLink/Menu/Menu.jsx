import React from 'react'
import LinkItem from './MenuItem/LinkItem'
import { motion } from "framer-motion"

const Menu = () => {

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
        <motion.ul 
        className='hidden gap-x-8 pr-3 md:flex'
        variants={navVariants}
        initial='hidden'
        animate='visible'
        >

            <LinkItem
                linkTo='home'
                text='Home'
            />

            <LinkItem
                linkTo='about'
                text='About'
            />

            <LinkItem
                linkTo='skills'
                text='Skills'
            />

            <LinkItem
                linkTo='work'
                text='Work'
            />

            <LinkItem
                linkTo='contact'
                text='Contact'
            />

        </motion.ul>
    )
}

export default Menu