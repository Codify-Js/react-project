import React, {useState, useEffect} from 'react';
import Button from "../../../components/Button/Button";
import PostsList from '../../MansurPosts/PostsList'
import axios from 'axios'
const API_URL='https://jsonplaceholder.typicode.com';

const AisuluuPostsComp =()=>{
    const [showButton, setShowButton] = useState(false)
    const [counter, setCounter] = useState(0)
    const [posts, setPosts] = useState(0)
 

    useEffect(()=>{
        console.log('triggered')
        axios.get(`${API_URL}/posts`)
        .then((response) => {
            setPosts(response.data)
        })
    },[])
    const handleShowBodyBtn=()=>{
        setShowButton(!showButton)
        const newCounter= counter+1
        setCounter(newCounter)

    }
    console.log('showButton', showButton)

   
    const handlePostClick=(id)=>{
        console.log('post id', id);
    }

    const buttonText =showButton? 'Hide body': 'Show Body'
    console.log('render')
    return (
        <div className="post-container">
            <div className="post-container_header">
                 Functional Component
            </div>
            <div>
                counter: {counter} 
            </div>
            <Button onClick={handleShowBodyBtn} text={buttonText}></Button>
            {showButton &&(
                <div className="post-container_body">
                 <PostsList list={posts} onChange={handlePostClick}/>

            </div>
            )}
        </div>
    )
}
export default AisuluuPostsComp