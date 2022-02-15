import React from 'react'

import './InputComponent.css'

const InputComponent = (props) => {
  const { placeholder, value, onChange } = props

  return (
    <input type="text" value={value} placeholder={placeholder} onChange={onChange}/>   
  )
}

export default InputComponent