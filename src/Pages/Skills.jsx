import React, { useEffect } from 'react'
import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import JavaScript from '../assets/javascript.png'
import GitHub from '../assets/github.png'
import ReactImg from '../assets/react.png'
import Tailwind from '../assets/tailwind.png'
import Bootstrap from '../assets/Bootstrap.png'
import { motion, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer';


const Skills = () => {

    const { ref, inView, entry } = useInView({ threshold: 0.2, triggerOnce: true });
    const controls = useAnimation();

    const variant = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 1 } },
    };

    useEffect(() => {
        if (inView && entry.isIntersecting) {
            controls.start('visible');
        } else {
            controls.start('hidden');
        }
    }, [controls, inView, entry]);


    return (
        <div name='skills' className='w-full h-full pt-32 md:pt-40 bg-black text-light-gray'>
            {/* container */}
            <motion.div
                className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'
                ref={ref}
                variants={variant}
                initial='hidden'
                animate={controls}
            >
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-orange'>Skills</p>
                    <p className='py-4'>// These are the technologies I've worked with</p>
                </div>
                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                    <div className='shadow-md shadow-[#040c16]'>
                        <img className='w-20 my-4 mx-auto' src={HTML} alt='HTML icon'></img>
                        <p className='my-4'>HTML</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16]'>
                        <img className='w-20 my-4 mx-auto' src={CSS} alt='CSS icon'></img>
                        <p className='my-4'>CSS</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16]'>
                        <img className='w-20 my-4 mx-auto' src={JavaScript} alt='JavaScript icon'></img>
                        <p className='my-4'>JavaScript</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16]'>
                        <img className='w-20 my-4 mx-auto' src={ReactImg} alt='React icon'></img>
                        <p className='my-4'>React</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16]'>
                        <img className='w-20 my-4 mx-auto' src={Tailwind} alt='Tailwind icon'></img>
                        <p className='my-4'>Tailwind</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16]'>
                        <img className='w-20 my-4 mx-auto' src={Bootstrap} alt='Bootstrap icon'></img>
                        <p className='my-4'>Bootstrap</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16]'>
                        <img className='w-20 my-4 mx-auto' src={GitHub} alt='GitHub icon'></img>
                        <p className='my-4'>GitHub</p>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default Skills