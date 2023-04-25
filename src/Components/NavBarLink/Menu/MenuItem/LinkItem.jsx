import React from 'react'
import { Link } from 'react-scroll'

const LinkItem = ({ linkTo, text }) => {
    return (
        <li className='px-0 border-b-2 border-black hover:border-orange'>
            <Link to={linkTo} smooth={true} duration={500} >
                {text}
            </Link>
        </li>
    )
}

export default LinkItem