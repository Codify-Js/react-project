import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {JSON_PLACEHOLDER_API_URL} from '../api'
import { Container, Row, Col, Spinner, DropdownButton, Dropdown } from 'react-bootstrap';
import InputComponent from '../../components/Input/InputComponent';

const AisuluusContainer = () => {
  const [users, setUsers]= useState([])
  const [loading, setLoading]= useState(false)
  const [search, setSearch]= useState('')
  useEffect(() => {
    console.log('triggered'); 
    // try{
    //   throw new Error("test")
    // } catch(e){
    //   console.log("e", e)
    // } finally{

    // }
    setLoading(true)
    axios.get(`${JSON_PLACEHOLDER_API_URL}/posts`)
      .then((response) => {
        setUsers(response.data)
      }).then(()=>{
        setLoading(false)
      })
  }, [])
   
const handleInput=(event)=>{
  setSearch(event.target.value)
}

const handleSortName=()=>{

}

const spinnerStyles = {display: 'flex', justifyContent:"center"}
const filteredUsers = users.filter(user=>user.name.toLowerCase().includes(search.toLowerCase()))
  return (
    <>
      <h1>Users page</h1>
      <Container>
      <div className="filter">
       <Row>
       <Col>
          <InputComponent placeholder={'search'} value={search} onChange={handleInput}/>
       </Col>
      <Col>
        <DropdownButton id="dropdown-basic-button" title="Sorting">
          <Dropdown.Item>A-Z</Dropdown.Item>
          <Dropdown.Item>A-Z</Dropdown.Item>
          </DropdownButton>
      </Col>
       </Row>
      </div>
      {loading &&  <div style={spinnerStyles}><Spinner animation="border"/></div>}
             {!loading && <>
             <Row style={{backgroundColor: 'gray', color: '#0000'}}>
              <Col onClick={handleSortName} sm = {3}>Name</Col>
              <Col sm = {3}>Email</Col>
              <Col sm = {3}>Address</Col>
              <Col sm = {3}>Company name</Col>
            </Row>
        {users.map(user=>{
            <Row key={user.id}>
              <Col sm = {3}>{user.name}</Col>
              <Col sm = {3}>{user.email}</Col>
              <Col sm = {3}>{user.address.street}</Col>
              <Col sm = {3}>{user.company.name}</Col>
            </Row>
          })
        }
      </>}
      </Container>
    </>
  )
}

export default AisuluusContainer