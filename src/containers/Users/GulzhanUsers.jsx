import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { JSON_PLACEHOLDER_API_URL } from '../../components/constants/gulzhan-api'
import { Container, Row, Col, Spinner, Dropdown, DropdownButton} from 'react-bootstrap';
import InputComponent from '../../components/Input/InputComponent';

const GulzhanUsers = () => {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false)
    const [search, setSearch] = useState('')
    const [namesSorted, setNamesSorted] = useState(false)

    useEffect(() => {
        setLoading(true)
        axios.get(`${JSON_PLACEHOLDER_API_URL}/users`)
          .then((response) => {
            setUsers(response.data)
          }).then(() => {
            setLoading(false)
          })
    
      }, [])

      

      const handleInput = (event) => {
          setSearch(event.target.value)
      }

      const filteredUsers = users.filter(user => user.name.toLowerCase().includes(search.toLowerCase()))

      const spinnerStyles = { display: 'flex', justifyContent: 'center' }

      const headerStyles = { textAlign: 'center', color: 'gray'}

      const handleSortName = () => {
        setNamesSorted(!namesSorted)
      }

      const handleSortEmail = () => {
        setNamesSorted(!namesSorted)
      }

      const handleSortAddress = () => {
        setNamesSorted(!namesSorted)
      }

      const handleSortCompany = () => {
        setNamesSorted(!namesSorted)
      }

  return (
    <>
      <h1 style={headerStyles}>Users page</h1>

      <Container>
      <div className='filter'>
      <Row>
            <Col>
             <InputComponent placeholder='search' value={search} onChange={handleInput} />
            </Col>
            <Col>
              <DropdownButton id="dropdown-basic-button" title="Sorting">
                <Dropdown.Item>A-Z</Dropdown.Item>
                <Dropdown.Item>Z-A</Dropdown.Item>
              </DropdownButton>
            </Col>
          </Row>
      </div>

      {loading && <div style={spinnerStyles}><Spinner animation="border"/></div>}
      {!loading && <>
        <Row style={{background: 'gray'}}>
                  <Col sm={3} onClick={handleSortName}>Name</Col>
                  <Col sm={3} onClick={handleSortEmail}>Email</Col>
                  <Col sm={3} onClick={handleSortAddress}>Address</Col>
                  <Col sm={3} onClick={handleSortCompany}>Company</Col>
            </Row>
          {filteredUsers.map(user => (
              <Row>
                  <Col sm={3}>{user.name}</Col>
                  <Col sm={3}>{user.email}</Col>
                  <Col sm={3}>{user.address.street}</Col>
                  <Col sm={3}>{user.company.name}</Col>
              </Row>
          ))}
      </>}
      {!namesSorted && <>
        <Row style={{background: 'gray'}}>
                  <Col sm={3} onClick={handleSortName}>Name</Col>
                  <Col sm={3} onClick={handleSortEmail}>Email</Col>
                  <Col sm={3} onClick={handleSortAddress}>Address</Col>
                  <Col sm={3} onClick={handleSortCompany}>Company</Col>
            </Row>
          {filteredUsers.map(user => (
              <Row>
                  <Col sm={3}>{user.name}</Col>
                  <Col sm={3}>{user.email}</Col>
                  <Col sm={3}>{user.address.street}</Col>
                  <Col sm={3}>{user.company.name}</Col>
              </Row>
          )).sort()}
      </>}
      </Container>
      
    </>
  )
}

export default GulzhanUsers