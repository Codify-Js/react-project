import React from 'react'

import './InputComponent.css'

const InputComponent = (props) => {

  const { value, onChange, placeholderText } = props
  return (
    <input type="text" placeholder={placeholderText} value={value} onChange={onChange}/>   
  )
}

export default InputComponent