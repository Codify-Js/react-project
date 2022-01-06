import React, { useEffect, useState, useMemo, useRef } from 'react'
import axios from 'axios'
import { JSON_PLACEHOLDER_API_URL } from '../../constants/api'
import { Container, Row, Col, Spinner, DropdownButton, Dropdown } from 'react-bootstrap'
import InputComponent from '../../components/Input/InputComponent';
import UserTodoListComponent from './UserTodoListComponent'
import CheckBoxComponent from '../../components/CheckBox/CheckboxComponent';

const UsersContainer = () => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)
  const [search, setSearch] = useState('')
  const [nameSortType, setNameSortType] = useState(null)
  const [activeUser, setActiveUser] = useState(null)
  const [userTodos, setUserTodos] = useState([])
  const [filter, setFilter] = useState({a: false, b: false})

  useEffect(() => {
    setLoading(true)
    axios.get(`${JSON_PLACEHOLDER_API_URL}/users`)
      .then((response) => {
        setUsers(response.data)
      }).then(() => {
        setLoading(false)
      })
  }, [])

  useEffect(()=> {
    axios.get(`${JSON_PLACEHOLDER_API_URL}/users?a=${filter.a}&b=${filter.b}`)
      .then((response) => {
        setUsers(response.data)
      })
    
  }, [filter.a, filter.b])

  useEffect(() => {
    const compareType = nameSortType ? compareDESC : compareASC
    const sorted = [...users].sort(compareType)
    setUsers(sorted)
  
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nameSortType])

  useEffect(() => {
    if (!activeUser) {
      setUserTodos([])
      return;
    }

    axios.get(`${JSON_PLACEHOLDER_API_URL}/users/${activeUser.id}/todos`)
      .then((response) => {
        setUserTodos(response.data)
      })
  }, [activeUser])

  const handleInput = (event) => {
    setSearch(event.target.value)
  }

  function compareASC( a, b ) {
      if ( a.name < b.name ) {
        return -1;
      }
      if ( a.name > b.name ) {
        return 1;
      }
      return 0;
    }

  function compareDESC( a, b ) {
    if ( a.name < b.name ) {
      return 1;
    }
    if ( a.name > b.name ) {
      return -1;
    }
    return 0;
  }

  const handleSortName = () => {
    setNameSortType(!nameSortType)
  }

  const handleUserClick = (user) => {
    setActiveUser(user)
  }

  const handleResetUser = () => {
    setActiveUser(null)
  }

  const spinnerStyles = { display: 'flex', justifyContent: "center" };

  const filteredUsers = users.filter(user => user.name.toLowerCase().includes(search.toLowerCase()))

  const nameSortTypeIcon = nameSortType ?  'DESC' : 'ASC'

  return (
    <>
      <h1>Users page</h1>
      <Container>
        <div className="filter">
          <Row>
            <Col sm={4}>
             <InputComponent placeholder='search' value={search} onChange={handleInput} />
            </Col>
            <Col sm={4}>
            <CheckBoxComponent
              label={'Filter A'} 
              checked={filter.a} 
              handleCheck={() => setFilter({...filter, a: !filter.a})}
              />
            </Col>
            <Col sm={4}>
            <CheckBoxComponent 
            label={'Filter B'}
             checked={filter.b} 
             handleCheck={() => setFilter({...filter, b: !filter.b})}/>
             </Col>
          </Row>
        </div>
        {loading && <div style={spinnerStyles}><Spinner animation="border"/></div>}

        <UserTodoListComponent user={activeUser} todoList={userTodos} resetUser={() => null}/>

        {!loading && <>
          <Row style={{backgroundColor: 'gray'}}>
            <Col onClick={handleSortName} sm={4}>Name {nameSortType !== null && nameSortTypeIcon}</Col>
            <Col sm={3}>Email</Col>
            <Col sm={3}>Address</Col>
            <Col sm={2}>Company Name</Col>
          </Row>
          {filteredUsers.map(user => (
            <Row key={user.id} onClick={() => handleUserClick(user)}>
              <Col sm={4}>{user.name}</Col>
              <Col sm={3}>{user.email}</Col>
              <Col sm={3}>{user.address.street}</Col>
              <Col sm={2}>{user.company.name}</Col>
            </Row>
          ))}
        </>}
      </Container>
    </>
  )
}

export default UsersContainer