import React from 'react'

const CheckBoxComponent = ({label, checked, handleCheck}) => {
  return (
  <div>
    <label htmlFor={label}>{label}</label>
    <input id={label} type='checkbox' checked={checked} onChange={handleCheck}/>
  </div>
  )
}


export default CheckBoxComponent