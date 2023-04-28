import React, { useEffect } from 'react'
import JSONApi from '../assets/JSONApiWebsite.PNG'
import BookReview from '../assets/BookReview.PNG'
import ReactBasics from '../assets/ReactBasics.PNG'
import GridItem from '../Components/WorkItem/GridItem'
import { motion, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer';

const Work = () => {

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
        <div name='work' className='w-full pt-8 md:h-screen text-gray-300 bg-black'>
            <motion.div
                className='max-w-[1000px] mx-auto flex flex-col justify-center w-full h-full p-4 pt-4 pb-12'
                ref={ref}
                variants={variant}
                initial='hidden'
                animate={controls}
            >
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 text-light-gray border-orange'>Work</p>
                    <p className='py-4'>// Check out some of my recent work</p>
                </div>

                {/* Container */}
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                    {/*Grid item */}
                    <GridItem
                        bgImage={BookReview}
                        spanText='React JS + Scss'
                        demoLink='https://finals-api-1.vercel.app/'
                        codeLink='https://github.com/Blubas35/finals-api-1-react-scss'
                    />
                    {/*Grid item */}
                    <GridItem
                        bgImage={JSONApi}
                        spanText='JS + BootsTrap'
                        demoLink='https://blubas35.github.io/Api-Project-JS-BootsTrap/'
                        codeLink='https://github.com/Blubas35/Api-Project-JS-BootsTrap'
                    />
                    {/*Grid item */}
                    <GridItem
                        bgImage={ReactBasics}
                        spanText='React basics'
                        demoLink=''
                        codeLink=''
                        titleText='React Challenges'
                        bodyText='These small project showcases my skills with React. By completing various tasks using React hooks, such as useState, useEffect, and useCallback, as well as click events, props etc. Through this project, I was able to deepen my understanding of these concepts and improve my proficiency with React.'
                    />
                    {/*Grid item */}
                    {/* <GridItem 
                    bgImage={BookReview}
                    spanText='Vieta jusu projektui'
                    demoLink=''
                    codeLink=''
                    /> */}
                </div>
            </motion.div>
        </div>
    )
}

export default Work