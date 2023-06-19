import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import Lottie from "lottie-react";
import loadingAnimation from "../../assets/LoadingOrange.json"

const Loader = ({ finishLoading }) => {
    const isMountedRef = useRef(false)

    useEffect(() => {
        const timeout1 = setTimeout(() => {
            isMountedRef.current = true
        }, 10)

        const timeout2 = setTimeout(() => {
            if (isMountedRef) {
                finishLoading()
            }
        }, 750)

        return () => {
            clearTimeout(timeout1)
            clearTimeout(timeout2)
        }
    }, [finishLoading, isMountedRef]);

    return (
        <div className='h-screen flex justify-center items-center bg-black'>
            <Lottie animationData={loadingAnimation} loop={true} />
        </div>
    );
};

Loader.propTypes = {
    finishLoading: PropTypes.func.isRequired,
};

export default Loader;