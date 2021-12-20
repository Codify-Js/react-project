import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'
import axios from 'axios'
import PostsList from '../../MansurPosts/PostsList'

const API_URL = 'https://jsonplaceholder.typicode.com';

const MansurPostsComp = () => {
  const [showButton, setShowButton] = useState(false) // Boolean
  const [counter, setCounter] = useState(0) // Number
  const [posts, setPosts] = useState([]) // Array

  useEffect(() => {
    console.log('triggered');

    axios.get(`${API_URL}/posts`)
      .then((response) => {
        setPosts(response.data)
      })

  }, [])

  useEffect(() => {
    setCounter(counter + 1)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showButton])

  const handleShowBodyBtn = () => {
    setShowButton(!showButton)
  }

  const handlePostClick = (id) => {
    console.log('postId', id);
  }

  const buttonText = showButton ? 'Hide Body' : 'Show Body'

  console.log('Render');
  return (
    <div className="post-container">
      <div className="post-container_header">
        Functional Component
      </div>
      <div>
        Counter: {counter}
      </div>

      <Button onClick={handleShowBodyBtn}>{buttonText}</Button>
    
        <div className="post-container_body">
           <PostsList list={posts} onChange={handlePostClick}/>
        </div>

    </div>
    
  )
}

export default MansurPostsComp;