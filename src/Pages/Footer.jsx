import React, { useEffect } from 'react'
import { motion, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer';

const Footer = () => {

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
        <motion.footer
            className='h-[150px] bg-black'
            ref={ref}
            variants={variant}
            initial='hidden'
            animate={controls}
        >
            <div class="container max-w-[1000px] mx-auto px-8 flex flex-col justify-end items-center h-full text-light-gray pb-10">
                <div class="row">
                    <div class="col-md-12">
                        <p>&copy; 2023 Domantas Portfolio. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </motion.footer>
    )
}

export default Footer