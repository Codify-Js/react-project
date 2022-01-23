// import * as actions from './actionTypes';
import axios from 'axios';
import { API_URL } from '../../components/constants/api';

import { 
  POST_LIST_REQUEST,
  POST_LIST_RESPONSE,
  POST_CREATE_RESPONSE,
} from './actionTypes';

export const fetchPostList = () => ({
  type: POST_LIST_REQUEST
});

export const setPostList = posts => ({
  type: POST_LIST_RESPONSE,
  payload: posts
});

export const setCreatePost = post => ({
  type: POST_CREATE_RESPONSE,
  payload: post
});

export const getPostsFromApi = () => {
  return (dispatch, getState) => {
    const state = getState()
    console.log('state', state);

    dispatch(fetchPostList());
    
    axios.get(`${API_URL}/posts/`)
      .then((response) => {
        console.log('response', response);
        // dispatch(setPostList(response.data))
      })
  };
};

export const createPost = (payload) => {
  return (dispatch) => {
    axios.post(`${API_URL}/posts`, payload)
      .then((response) => {
        console.log('response', response.data);
        dispatch(setCreatePost(response.data))
      })
  };
};