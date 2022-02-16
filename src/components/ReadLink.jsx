import React from 'react'
import { Link } from 'react-router-dom'

const ReadLink = ({ link, text }) => {
  return (
    <div className="cta-wrapper">

      <Link to={link} onClick={() => console.log("scroll to register")} className="cta cta-link">
        {text}
      </Link>
      <img className='arrow' src={require("../assets/images/fatarow.svg")} alt="" />
    </div>
  )
}

export default ReadLink