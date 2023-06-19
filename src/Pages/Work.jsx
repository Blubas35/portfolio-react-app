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
                        titleText='React API project'
                        bodyText= "This was my bootcamp's final exam project, which I developed using React and Scss. I was able to achieve the maximum score for this project. The task for this project was to use an API to create a web page with dynamic data using React and Scss."
                        bodyText2= "This project showcases my ability to create web pages with dynamic data using the JSON Placeholder API (I also created my own local data about books). Throughout this project, I utilized various skills such as React hooks, CRUD methods, error handling, asynchronous programming, DOM manipulation, and responsive design. I am excited to showcase this project and my skills as a React developer."
                    />
                    {/*Grid item */}
                    <GridItem
                        bgImage={JSONApi}
                        spanText='JS + BootsTrap'
                        demoLink='https://blubas35.github.io/Api-Project-JS-BootsTrap/'
                        codeLink='https://github.com/Blubas35/Api-Project-JS-BootsTrap'
                        titleText='JSON API website'
                        bodyText= "This was my first bootcamp project and it was made using JavaScript and Bootstrap. By doing this project I further improved my JavaScript skills. I was able to deepen my understanding of API functionality, DOM manipulation, asynchronous programming, error handling, responsive design and CRUD method."
                    />
                    {/*Grid item */}
                    <GridItem
                        bgImage={ReactBasics}
                        spanText='React basics'
                        demoLink='https://interview-challenges-coral.vercel.app/cells'
                        codeLink='https://github.com/Blubas35/interview-challenges'
                        titleText='React Challenges'
                        bodyText='These small project showcases my skills with React. By completing various tasks using React hooks, such as useState, useEffect, as well as click events, props etc. Through this project, I was able to deepen my understanding of these concepts and improve my proficiency with React. (More information inside).'
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