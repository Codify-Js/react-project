import React, {useState} from 'react'

import { Container, Dropdown, DropdownButton } from 'react-bootstrap';

const UserTodoListComponent = (props) => {
  const {user, todoList, resetUser} = props
  const [filterStatus, setFilterStatus] = useState(null)


  const handleBack = () => {
    resetUser()
  }

  const handleChangeStatus = (status) => {
    setFilterStatus(status)
  }


  const isAll = filterStatus === null
  const filteredTodos =  isAll ? todoList : todoList.filter(item => item.completed === filterStatus)
  
  return (
    <Container>
      <span onClick={handleBack}>back</span>
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <h1> {user.name} todo list: </h1>
        <div>
          <DropdownButton id="dropdown-basic-button" title="Status">
            <Dropdown.Item onClick={() => handleChangeStatus(null)}>All</Dropdown.Item>
            <Dropdown.Item onClick={() => handleChangeStatus(true)}>Completed</Dropdown.Item>
            <Dropdown.Item onClick={() => handleChangeStatus(false)}>Uncompleted</Dropdown.Item>
          </DropdownButton>
        </div>
      </div>
      {filteredTodos.map((todo) => (
        <div style={{display: 'flex', justifyContent: 'space-between'}} key={todo.id}>
          <div>{todo.title}</div>
          <div>{todo.completed ? 'completed' : 'uncompleted'}</div>
         
        </div>
      ))}
    </Container>
  )
}

export default UserTodoListComponent