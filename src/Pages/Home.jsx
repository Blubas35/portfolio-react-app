import React, { useEffect } from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-scroll'
import { motion, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer';


const Home = () => {

    const { ref, inView, entry } = useInView({ threshold: 0.2, triggerOnce: true });
    const controls = useAnimation();

    const variant = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 2 } },
    };

    useEffect(() => {
        if (inView && entry.isIntersecting) {
            controls.start('visible');
        } else {
            controls.start('hidden');
        }
    }, [controls, inView, entry]);

    return (
        <div name='home' className='w-full h-screen bg-black'>

            {/* CONTAINER */}
            <motion.div
                className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'
                ref={ref}
                variants={variant}
                initial='hidden'
                animate={controls}
            >
                <p className='text-light-gray'>Hi, my name is </p>
                <h1 className='text-4xl sm:text-7xl font-bold text-orange'>Domantas Tevelis</h1>
                <h2 className='text-4xl sm:text-7xl font-bold text-light-gray'>I am a Junior Front-End Developer</h2>
                <p className='text-light-gray py-4 max-w-[700px]'>I specialized in building and designing websites. Currently, I am focused on React responsive websites that deliver exceptional user experiences.</p>
                <div>
                    <Link to="work" smooth={true} duration={500}>
                        <button className='text-light-gray group border-2 border-light-gray px-6 py-3 my-2 flex items-center hover:bg-orange hover:border-orange hover:text-black'>View Work
                            <span className='group-hover:rotate-90 duration-300'>
                                <HiArrowNarrowRight className='ml-3' />
                            </span>
                        </button>
                    </Link>
                </div>
            </motion.div>
        </div>
    )
}

export default Home