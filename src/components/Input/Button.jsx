import React from 'react'

import './Button.css'

const Button = (props) => {

  const { text, onClick } = props
  return (
    <button className="btn" type="submit" onClick={onClick}>{text}</button>
  )
}

export default Button