import React from 'react'

import './InputComponent.css'

const InputNameComponent = (props) => {

  const { value, onChange } = props
  return (
    <input type="text" placeholder="First Name" value={value} onChange={onChange}/>   
  )
}

export default InputNameComponent