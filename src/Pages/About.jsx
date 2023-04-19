import React from 'react'
import MePhoto from '../assets/Profiline foto.png'

const About = () => {
    return (
        <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full'>
                    <div className='pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About</p>
                    </div>
                </div>
                <div className='grid grid-cols-[3fr_2fr] max-w-[1000px] gap-x-6'>
                    <div className='max-w-[1000px] w-full px-4'>
                        <div className='text-4xl font-bold mb-4'>
                            <p>Hi. I am Dom. I am a front-end developer based in Klaipeda, Lithuania. Please take a look around!</p>
                        </div>
                        <div>
                            <p>I am passionate about building beautiful and functional websites to elevate online presence. I mainly use React to build high-quality and efficient websites. I take pride in my ability to write clear, efficient code that delivers a seamless user experience.</p>
                        </div>
                    </div>
                    <div className='image-wrapper'>
                        <img src={MePhoto} className='max-w-[300px]'></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About