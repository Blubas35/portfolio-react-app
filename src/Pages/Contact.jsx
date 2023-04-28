import React, { useEffect } from 'react'
import { motion, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer';

const Contact = () => {

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
        <div name='contact' className='w-full h-full bg-black flex justify-center items-center p-4 pt-12'>
            <motion.div
                ref={ref}
                variants={variant}
                initial='hidden'
                animate={controls}
            >
                <form action='https://getform.io/f/ff8cf66e-dc56-4ef4-8566-ac034364dcf7' method='POST' className='flex flex-col max-w-[600px] w-full'>
                    <div className='pb-8'>
                        <p className='text-4xl font-bold inline border-b-4 border-orange text-light-gray'>Let's Chat</p>
                        <p className='text-gray-300 py-4'>// Submit the form below or contact me through an email - dtevelis@gmail.com</p>
                    </div>
                    <input className='bg-[#ccd6f6] p-2' type='text' placeholder='Name' name='name'></input>
                    <input className='my-4 p-2 bg-[#ccd6f6]' type='email' placeholder='Email' name='email'></input>
                    <textarea className='bg-[#ccd6f6] p-2' name='message' row='10' placeholder='Message'></textarea>
                    <button className='text-light-gray border-2 hover:bg-orange hover:border-orange hover:text-black px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
                </form>
            </motion.div>
        </div>
    )
}

export default Contact