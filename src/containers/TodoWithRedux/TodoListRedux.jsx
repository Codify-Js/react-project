import React, {useCallback, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {getPostsFromApi} from '../../store/actions/actions.js';
import {postsSelector, postsLoadingSelector} from '../../store/selectors/selectors'

const TodoListRedux = () => {
  const dispatch = useDispatch();
  
  const posts = useSelector((state) => postsSelector(state));
  const loading = useSelector(postsLoadingSelector);
  
  const getUsers = useCallback(() => {
    dispatch(getPostsFromApi());
  }, [])

  useEffect(() => {
    getUsers()

    return () => {
      // dispatch(setPostList([]))
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