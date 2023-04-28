import { useEffect } from 'react'
import {useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer';

const ScrollAnimation = (variant) => {

    const { ref, inView } = useInView();
    const controls = useAnimation();

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        } else {
            controls.start('hidden');
        }
    }, [controls, inView]);

    return { controls, ref, variant }

}

export default ScrollAnimation