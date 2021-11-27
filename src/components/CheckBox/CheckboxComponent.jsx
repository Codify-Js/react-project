import React from 'react'

const CheckBoxComponent = ({checked, handleCheck}) => {
  return <input type='checkbox' checked={checked} onChange={handleCheck}/>
}

export default CheckBoxComponent