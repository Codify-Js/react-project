import React, { useEffect , useState} from 'react'
import axios from 'axios'
import {API_URL} from '../../components/constants/api'
import { Container,Row,Col,Spinner,DropdownButton, Dropdown} from 'react-bootstrap'
import InputComponent from '../../components/Input/InputComponent'

const TimaUser = () => {
    const [users, setUsers] = useState([])
    const [loading, setLoading]= useState(false)
    const [search,setSearch] = useState('')
    const [nameSortType , setNameSortType] = useState(null)

    useEffect(() => {
    setLoading(true)
      axios.get(`${API_URL}/users`)
        .then((response) => {
          setUsers(response.data)
        }).then(() => {
            setLoading(false)
        })
    },[])
    const handleInput = (event) =>{
        setSearch(event.target.value)
    }

    const spinnerStyles = {display:'flex', justifyContent:"center"};

    const filteredUsers = users.filter(user => user.name.toLowerCase().includes(search.toLowerCase()))
  return (
    <>
      <h1>Users page</h1>
      <Container>
      <Row>
            <Col>
              <DropdownButton id="dropdown-basic-button" title="Sorting">
                <Dropdown.Item>A-Z</Dropdown.Item>
                <Dropdown.Item>Z-A</Dropdown.Item>
              </DropdownButton>
            </Col>
        </Row>
          <div>
              <InputComponent placeholder='search' value={search} onChange={handleInput}></InputComponent>
          </div>
          {loading && <div style={spinnerStyles}><Spinner animation="border"/></div>}
          {!loading && <>
             <Row style={{backgroundColor: 'gray'}}>
                <Col sm={3}>Name</Col>
                <Col sm={3}>Email</Col>
                <Col sm={3}>Adress</Col>
                <Col sm={3}>Company name</Col>
              </Row>
            {filteredUsers.map(user => (
              <Row key={user.id}>
                  <Col sm={3}>{user.name}</Col>
                  <Col sm={3}>{user.email}</Col>
                  <Col sm={3}>{user.address.street}</Col>
                  <Col sm={3}>{user.company.name}</Col>
              </Row>
          ))}
          </>
          }
      </Container>
    </>
  )
}

export default TimaUser