import React from 'react'
import { Link } from 'react-scroll'

const MobileLinkItem = ({ onClick, linkTo, text }) => {
  return (
    <li className='py-6 text-4xl'>
      <Link onClick={onClick} to={linkTo} smooth={true} duration={500} >
        {text}
      </Link>
    </li>
  )
}

export default MobileLinkItem