import React from 'react'
import WorkImg from '../assets/logo.png'
import BookReview from '../assets/BookReview.PNG'
import GridItem from '../Components/WorkItem/GridItem'

const Work = () => {
    return (
        <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Work</p>
                    <p className='py-4'>// Check out some of my recent work</p>
                </div>

                {/* Container */}
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                    {/*Grid item */}
                    <GridItem 
                    bgImage={BookReview}
                    spanText='React JS + Scss'
                    />
                    {/*Grid item */}
                    <GridItem 
                    bgImage={WorkImg}
                    spanText='Vieta jusu projektui'
                    />
                    {/*Grid item */}
                    <GridItem 
                    bgImage={WorkImg}
                    spanText='Vieta jusu projektui'
                    />
                    {/*Grid item */}
                    <GridItem 
                    bgImage={BookReview}
                    spanText='Vieta jusu projektui'
                    />
                </div>
            </div>
        </div>
    )
}

export default Work