import React from 'react'
import { Link } from 'react-router-dom'

const ReadLink = ({ link, text, disabled }) => {
  return (
    <div className="cta-wrapper">
      {disabled ? (
        <span className='cta cta-link'>{text}</span>

      ) : (
        <Link to={link} className="cta cta-link" >
          {text}
        </Link>
      )}

      <img className='arrow' src={require("../assets/images/fatarow.svg")} alt="" />
    </div>
  )
}

export default ReadLink