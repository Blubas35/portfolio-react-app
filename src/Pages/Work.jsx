import React from 'react'
import JSONApi from '../assets/JSONApiWebsite.PNG'
import BookReview from '../assets/BookReview.PNG'
import GridItem from '../Components/WorkItem/GridItem'

const Work = () => {
    return (
        <div name='work' className='w-full pt-10 md:h-screen text-gray-300 bg-black'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
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
                    />
                    {/*Grid item */}
                    <GridItem 
                    bgImage={JSONApi}
                    spanText='JS + BootsTrap'
                    demoLink='https://blubas35.github.io/Api-Project-JS-BootsTrap/'
                    codeLink='https://github.com/Blubas35/Api-Project-JS-BootsTrap'
                    />
                    {/*Grid item */}
                    {/* <GridItem 
                    bgImage={JSONApi}
                    spanText='Vieta jusu projektui'
                    demoLink=''
                    codeLink=''
                    /> */}
                    {/*Grid item */}
                    {/* <GridItem 
                    bgImage={BookReview}
                    spanText='Vieta jusu projektui'
                    demoLink=''
                    codeLink=''
                    /> */}
                </div>
            </div>
        </div>
    )
}

export default Work