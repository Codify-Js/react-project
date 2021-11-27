import React from 'react'

import './InputComponent.css'

const InputComponent = (props) => {
  const { value, onChange } = props

  return (
    <input type="text" value={value} placeholder={'Enter title'} onChange={onChange}/>   
  )
}

export default InputComponent