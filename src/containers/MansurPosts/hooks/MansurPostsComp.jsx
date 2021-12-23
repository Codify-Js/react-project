import  React,{ useState,useEffect } from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios'   
import PostsList from '../PostsList';
const API_URL = 'https://jsonplaceholder.typicode.com';

const MansurPostsComp = () => {
  const [showButton,setShowButton] = useState(false)
  const [counter,setCounter] = useState(0)
  const [posts,setPosts] = useState([])

  useEffect(() => {
      console.log('triggered')
    axios.get(`${API_URL}/posts`)
      .then((response) => {
        setPosts(response.data)
      })
  },[])

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
            {showButton && (
                 <PostsList list={posts} onChange={handlePostClick}/>  
            )} 
        </div>
    )
}

export default MansurPostsComp