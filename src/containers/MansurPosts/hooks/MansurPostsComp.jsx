import React, { useState, useEffect, useLayoutEffect,useCallback } from 'react'
import { Button } from 'react-bootstrap'
import axios from 'axios'
import PostsList from '../../MansurPosts/PostsList'
import {usePostsRequestHook} from '../../../hooks/useRequestHook'

const API_URL = 'https://jsonplaceholder.typicode.com';

const MansurPostsComp = () => {
  const [showButton, setShowButton] = useState(false) // Boolean
  const [counter, setCounter] = useState(0) // Number

  const [posts, setPosts] = usePostsRequestHook()

  console.log('posts', posts);

  const handleClean = () => {
    setPosts([])
  }

  const handleShowBodyBtn = () => {
      setShowButton(!showButton)
      setCounter(counter + 1)
      console.log('counter',counter);
  }
  const handlePostClick = (id) => {
      console.log('postId',id);
  }
  
  console.log('showButton',showButton)
  const buttonText = showButton ? 'Hide Body' : 'Show body'
    return(
        <div  className="post-container">
            <div className="post-container_header">
                Functional Component
            </div>
            <div>
                Counter:{counter}
            </div>
            <Button onClick={handleShowBodyBtn}>{buttonText}</Button>
            <Button onClick={handleClean}>CLEAN POSTS</Button>
            
            <PostsList list={posts} onChange={handlePostClick}/>  
            
        </div>
    )
}

export default MansurPostsComp;
