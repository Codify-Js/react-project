import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { JSON_PLACEHOLDER_API_URL } from '../../components/constants/gulzhan-api'
import { Container, Row, Col, Button, Badge} from 'react-bootstrap';
import InputComponent from '../../components/Input/InputComponent';
import './GulzhanPostListContainer.css'

const GulzhanPostListContainer = () => {
  const [posts, setPosts] = useState([])
  const [search, setSearch] = useState('')
  const [clickedPost, setClickedPost] = useState({})
  const [clickedPostId, setClickedPostId] = useState(0)
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    axios.get(`${JSON_PLACEHOLDER_API_URL}/posts`)
      .then((response) => {
        setPosts(response.data)
      })
  }, [])

  useEffect(() => {
    axios.get(`${JSON_PLACEHOLDER_API_URL}/posts/${clickedPostId}`)
    .then((response) => {
      setClickedPost (response.data)
    })},[counter])

  const handleInput = (event) => {
      setSearch(event.target.value)
  }

  const handlePostClick = (id) => {
    setClickedPostId(id)
    setCounter(counter+1)
  }

  const filteredPosts = posts.filter(post => post.title.toLowerCase().includes(search.toLowerCase()) || post.body.toLowerCase().includes(search.toLowerCase()))


  return (
    <>
      <h1>All Posts</h1>

      <Container className='postList-container'  style={{padding: '50px'}}>
      <div className='searchInputArea'>
        <InputComponent placeholder='Search' value={search} onChange={handleInput}/>
      </div>      
      <Row className='clickedPostDisplay'>
        POST: {clickedPost ? clickedPost.title : 'No clicked post'}
      </Row>
      <div className='displayClickCounter'>
        <Button variant="light">
          Counter <Badge bg="secondary">{counter}</Badge>
        </Button>
      </div>     
      <Row className='postList-columnTitles'>
        <Col className='column' sm={1}>ID</Col>
        <Col className='column' sm={2}>Post</Col>
        <Col className='column' sm={9}>Description</Col>
      </Row>

      {filteredPosts.map(post => (
        <Row key={post.id} className='postList-posts' onClick={() => handlePostClick(post.id)}>
          <Col className='column' sm={1}>{post.id}</Col>  
          <Col className='column' sm={2}>{post.title}</Col>
          <Col className='column' sm={9}>{post.body}</Col>
        </Row>
      ))}
      </Container>
      
    </>
    )
  }

  export default GulzhanPostListContainer