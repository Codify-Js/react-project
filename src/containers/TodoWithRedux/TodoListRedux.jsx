import React, {useCallback, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios';
import { API_URL } from '../../components/constants/api';
import {setPostList, fetchPostList} from '../../store/actions/actions.js';
import store from '../../store/store';

const TodoListRedux = () => {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts);
  const loading = useSelector(state => state.postLoading);
  
  const getUsers = useCallback(() => {
    dispatch(fetchPostList());

    axios.get(`${API_URL}/posts/`)
      .then((response) => {
        dispatch(setPostList(response.data))
      })
  }, [])

  useEffect(() => {
    getUsers()

    return () => {
      dispatch(setPostList([]))
    }
  }, [])

console.log('posts',posts);
console.log('loading',loading);
  return (
    <div>
      <h1>New Todo List</h1>
      {loading ? (
        <div>LOADING</div>
      ) : (
        <div>
          {posts.map(post => <div key={post.id}>{post.title}</div>)}
        </div>
      )}
    </div>
  )
}

export default TodoListRedux;