import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { JSON_PLACEHOLDER_API_URL } from '../../components/constants/gulzhan-api'
import { Container, Row, Col} from 'react-bootstrap';
import InputComponent from '../../components/Input/InputComponent';

const GulzhanPostListContainer = () => {
  const [posts, setPosts] = useState([])
  const [search, setSearch] = useState('')
  const [clickedPost, setClickedPost] = useState('')
  const [clickedPostId, setClickedPostId] = useState(0)

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
    })
    
  })

  const handleInput = (event) => {
      setSearch(event.target.value)
  }

  const handlePostClick = (event) => {
    setClickedPostId(event.target.id)
  }

  const filteredPosts = posts.filter(post => post.title.toLowerCase().includes(search.toLowerCase()) || post.body.toLowerCase().includes(search.toLowerCase()))


  return (
    <>
      <h1 style={{color: 'gray', textAlign: 'center'}}>All Posts</h1>

      <Container>
      <div className='searchInputArea' style={{display: 'flex', justifyContent:'center', padding: '20px'}}>
        <InputComponent placeholder='Search' value={search} onChange={handleInput}/>
      </div>      
      <Row className="post">
        POST: {clickedPost ? clickedPost.title : 'No clicked post'}
      </Row>
      <Row style={{background: 'gray'}}>
        <Col sm={1}>ID</Col>
        <Col sm={4}>Post</Col>
        <Col sm={7}>Description</Col>
      </Row>

      {filteredPosts.map(post => (
        <Row onClick={handlePostClick}>
          <Col sm={1}>{post.id}</Col>  
          <Col sm={4}>{post.title}</Col>
          <Col sm={7}>{post.body}</Col>
        </Row>
      ))}
      </Container>
      
    </>
    )
  }

export default GulzhanPostListContainer