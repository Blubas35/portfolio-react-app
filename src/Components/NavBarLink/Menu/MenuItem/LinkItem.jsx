import React from 'react'
import { Link } from 'react-scroll'

const LinkItem = ({ linkTo, text }) => {
    return (
        <li>
            <Link to={linkTo} smooth={true} duration={500} >
                {text}
            </Link>
        </li>
    )
}

export default LinkItem