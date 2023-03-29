import React from 'react'

const About = () => {
    return (
        <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About</p>
                    </div>
                    <div></div>
                </div>
                <div className='max-w-[1000px] w-full sm:grid grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4-xl font-bold'>
                        <p>Hi. I am Dom, nice to meet you. I am a front-end developer based in Klaipeda, Lithuania. Please take a look around and don't hesitate to contact me!</p>
                    </div>
                    <div>
                        <p>I am passionate about building beautiful and functional websites to elevate online presence</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About