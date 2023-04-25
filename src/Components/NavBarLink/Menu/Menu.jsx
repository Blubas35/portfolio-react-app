import React from 'react'
import LinkItem from './MenuItem/LinkItem'

const Menu = () => {
    return (
        <ul className='hidden gap-x-8 pr-3 md:flex'>

            <LinkItem
                linkTo='home'
                text='Home'
            />

            <LinkItem
                linkTo='about'
                text='About'
            />

            <LinkItem
                linkTo='skills'
                text='Skills'
            />

            <LinkItem
                linkTo='work'
                text='Work'
            />

            <LinkItem
                linkTo='contact'
                text='Contact'
            />

        </ul>
    )
}

export default Menu