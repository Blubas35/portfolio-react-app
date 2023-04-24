import React from 'react'

const GridItem = ({ bgImage, spanText, demoLink, codeLink }) => {
  return (
    <div className='relative group'>
      <div className='inset-0 bg-gradient-to-t from-gray-500 opacity-50 group-hover:opacity-100'>
        <div
          style={{ backgroundImage: `url(${bgImage})` }}
          className='bg-white shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

          {/* Hover Effects */}
          <div className='opacity-0 group-hover:opacity-100'>
            <span className='text-2xl font-bold text-white tracking-wider'>
            {spanText}
            </span>
            <div className='pt-8 text-center'>
              <a href={demoLink}target='_blank'>
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
              </a>
              <a href={codeLink} target='_blank'>
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GridItem