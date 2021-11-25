import React from 'react'
import './InputComponent.css'

const InputComponent = (props) => {

  const { value, onChange } = props
  return (
    <input class="input" type="text" value={value} placeholder={'Search'} onChange={onChange}/>   
  )
}

export default InputComponent