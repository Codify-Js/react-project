import React from 'react'
import {Button, Input} from 'antd'

export default function Answers({answers, handleAddNew, handleChange, onRemove}) {
  return ( 
    <div>
      <Button onClick={handleAddNew}>Add Answer</Button>
      {answers.map(a => (
        <div key={a.id} style={{display: 'flex', justifyContent: 'space-between'}}>
          <Input value={a.value} maxLength={60} onChange={(e) => handleChange(e, a.id)} />
          <Button onClick={() => onRemove(a.id)}>Remove</Button> 
        </div>
      ))}
    </div>
  )
}