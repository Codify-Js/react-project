import React from 'react'

import './InputComponent.css'

const InputSurnameComponent = (props) => {

  const { value, onChange } = props
  return (
    <input type="text" placeholder="Last Name" value={value} onChange={onChange}/>   
  )
}

export default InputSurnameComponent 