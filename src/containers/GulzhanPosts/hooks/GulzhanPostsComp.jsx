import React, {useState, useEffect} from "react"
import Button from "../../../components/Button/Button"
import PostsList from "../../MansurPosts/PostsList"
import axios from 'axios'
const API_URL='https://jsonplaceholder.typicode.com';

const GulzhanPostsComp = () => {
    const [displayButton, setDisplayButton] = useState(false)
    const [counter, setCounter] = useState(0)
    const [posts, setPosts] = useState(0)

    const handleDisplayBodyBtn = () => {
        setDisplayButton(!displayButton)
        const newCounter = counter + 1
        setCounter(newCounter)
    }

    const handlePostClick = (id) => {
        console.log('postId', id)
    }

    useEffect(()=>{
        axios.get(`${API_URL}/posts`)
        .then((response) => {
            setPosts(response.data)
        })
    }, [])

    const buttonText = displayButton ? 'Hide Body' : 'Display Body'

    return (
        <div className="post-container">
            <div className="post-container_header">
                Functional Component
            </div>
            <div>
                Counter: {counter}
            </div>
            <Button onClick={handleDisplayBodyBtn} text={buttonText}></Button>

            {displayButton && (
                <div className="post-container_body">
                    <PostsList list={posts} onChange={handlePostClick}/>
                </div> 
            )

            }

        </div>

    )
}

export default GulzhanPostsComp