import React, { useState, useEffect, useLayoutEffect,useCallback } from 'react'
import { Button } from 'react-bootstrap'
import axios from 'axios'
import PostsList from '../../MansurPosts/PostsList'
import {usePostsRequestHook} from '../../../hooks/useRequestHook'

const API_URL = 'https://jsonplaceholder.typicode.com';

const MansurPostsComp = () => {
  const [showButton, setShowButton] = useState(false) // Boolean
  const {posts, setPosts, counter, getUsers} = usePostsRequestHook()

  console.log('posts', posts);

  const handleClean = () => {
    setPosts([])
  }

  const handleRefetch = () => {
    getUsers()
  }

  const handleShowBodyBtn = () => {
      setShowButton(!showButton)
    //   setCounter(counter + 1)
    //   console.log('counter',counter);
  }
  const handlePostClick = (id) => {
      console.log('postId',id);
  }
  
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
            <Button onClick={handleRefetch}>REFETCH POSTS</Button>
            
            <PostsList list={posts} onChange={handlePostClick}/>  
            
        </div>
    )
}

export default MansurPostsComp;
