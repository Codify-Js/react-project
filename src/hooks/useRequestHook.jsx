import React, {useCallback, useState, useEffect} from 'react';
import axios from 'axios';
const API_URL = 'https://jsonplaceholder.typicode.com';

export const usePostsRequestHook = () => {
  const [posts, setPosts] = useState([]);
  const [counter, setCounter] = useState(0)

  const getUsers = useCallback(() => {
        axios.get(`${API_URL}/posts/`)
            .then((response) => {
                setPosts(response.data)
            })
    }, [])

    useEffect(() => {
      getUsers()
    }, [])

    return {posts, setPosts, counter, setCounter, getUsers}
}