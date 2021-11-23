import React from 'react'

import './InputComponent.css'

const InputComponent = (props) => {
  const { onChange, myProp, hide } = props
  
  return (
    !hide && (
      <input type="text" value={myProp} placeholder={'Search'} onChange={onChange}/>
    )
  )
}

export default InputComponent