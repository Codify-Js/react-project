
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import PostsList from '../../MansurPosts/PostsList';

const API_URL = 'https://jsonplaceholder.typicode.com';

const EllePostsComp = () => {
const [showButton, setShowButton] = useState(false) //Boolean
const [counter, setCounter] = useState(0) // Number
const [posts, setPosts ] = useState([]) // Array


  useEffect(() => {
    console.log('triggered');

    axios.get(`${API_URL}/posts`)
      .then((response) => {
        setPosts(response.data)
      })

  }, [])

  const handleShowBodyBtn = () => {
    setShowButton(!showButton)
    setCounter( counter + 1)
    // console.log('counter', counter);
  }

  const handlePostClick = (id) => {
    console.log('postId', id);
  }

  console.log('showButton', showButton);

  const buttonText = showButton ? 'Hide Body' : 'Show Body'

  return (
    <div className="post-container">
      <div className="post-container_header">
        Functional Component
      </div>
      <div>
        Counter:{counter}
      </div>
      <Button onClick={handleShowBodyBtn}>{buttonText}</Button>

      {showButton && (
        <div className="post-container_body">
          <PostsList list={posts} onChange={handlePostClick}/>
        </div>
      )}

    </div>
  
  )
}

export default EllePostsComp;