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
                <div className='grid md:grid-cols-about max-w-[1000px] gap-6'>
                    <div className='max-w-[1000px] w-full px-4 flex flex-col justify-center'>
                        <div className='text-4xl font-bold mb-4'>
                            <p>Hi. I am Dom. I am a front-end developer based in Klaipeda, Lithuania. Please take a look around!</p>
                        </div>
                        <div>
                            <p>I am passionate about building beautiful and functional websites to elevate online presence. I mainly use React to build high-quality and efficient websites. I take pride in my ability to write clear, efficient code that delivers a seamless user experience.</p>
                        </div>
                    </div>
                    <div className='styled-pic relative max-w-[300px] w-[70%] mt-[50px] mb-0 mx-auto'>
                        <div className='wrapper shadow-[0_10px_30px_-15px_rgba(2,11,26,0.7)] transition-[var(--transition)] max-w-[250px] block relative w-full rounded bg-[#5fe5c9]'>
                            <div className='image-wrapper w-full max-w-[250px] align-middle overflow-hidden'>
                                <div className='overlay max-w-[500px] block'></div>
                                <div className='overlay-2 max-w-[250px] opacity-0 transition-opacity duration-500 ease-linear delay-[0s] bg-[rgb(232,232,232)] absolute object-cover inset-0'></div>
                                <img src={MePhoto} alt='my profile picture' className='profile-pic object-cover opacity-100 transition-opacity duration-[0.25s] ease-linear will-change-[opacity] absolute m-0 p-0 inset-0 rounded max-w-[250px] z-10 w-full h-full'></img>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default About