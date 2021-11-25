import React from 'react'

import './AddButton.css'

const AddButton = (props) => {

  const { text, onClick } = props
  return (
    <button className="add-button" type="submit" onClick={onClick}>{text}</button>
  )
}

export default AddButton