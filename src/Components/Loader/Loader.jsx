import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as Logo } from '../../assets/loading.svg';
import { useState } from 'react';
import { useEffect } from 'react';
import ReactLoading from 'react-loading';

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
        }, 2000)

        return () => {
            clearTimeout(timeout1)
            clearTimeout(timeout2)
        }
    }, [finishLoading, isMountedRef]);

    return (
        <div className='h-screen flex justify-center items-center'>
            <ReactLoading type={'balls'} color={'green'} height={200} width={200} />
        </div>
    );
};

Loader.propTypes = {
    finishLoading: PropTypes.func.isRequired,
};

export default Loader;