import React from 'react'
import MobileLinkItem from './MobileMenuItem/MobileLinkItem'

const MobileMenu = ({ nav, onClick }) => {
    return (
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-black flex flex-col justify-center items-center text-light-gray'}>

            <MobileLinkItem 
            onClick={onClick}
            linkTo={'home'}
            text={'Home'}
            />

            <MobileLinkItem 
            onClick={onClick}
            linkTo={'about'}
            text={'About'}
            />

            <MobileLinkItem 
            onClick={onClick}
            linkTo={'skills'}
            text={'Skills'}
            />

            <MobileLinkItem 
            onClick={onClick}
            linkTo={'work'}
            text={'Work'}
            />

            <MobileLinkItem 
            onClick={onClick}
            linkTo={'contact'}
            text={'Contact'}
            />

        </ul>
    )
}

export default MobileMenu