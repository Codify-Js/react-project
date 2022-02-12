// import * as actions from './actionTypes';
import axios from 'axios';
import { API_URL } from '../../components/constants/api';
import generateToken from '../../helpers/randomString';

import { 
  POST_LIST_REQUEST,
  POST_LIST_RESPONSE,
  POST_CREATE_RESPONSE,
  POST_DELETE,
  POST_UPDATE,
  CREATE_USER,
  SET_CURRENT_USER
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

export const removePost = id => ({
  type: POST_DELETE,
  postId: id
})

export const editPost = (post) => ({
  type: POST_UPDATE,
  payload: post
});

export const createUser = (payload) => ({
  type: CREATE_USER,
  payload
});

export const setCurrentUser = (payload) => ({
  type: SET_CURRENT_USER,
  payload
});

export const getPostsFromApi = () => {
  return (dispatch, getState) => {
    const state = getState()
    console.log('state', state);

    dispatch(fetchPostList());
    
    axios.get(`${API_URL}/posts/`)
      .then((response) => {
        console.log('response', response);
        dispatch(setPostList(response.data))
      })
  };
};

export const createPost = (payload) => {
  return (dispatch) => {
    axios.post(`${API_URL}/posts`, payload)
      .then((response) => {
        dispatch(setCreatePost(response.data))
      })
  };
};

export const deletePost = (id) => {
  return (dispatch) => {
    axios.delete(`${API_URL}/posts/${id}`)
      .then((response) => {
        dispatch(removePost(id))
      }).catch((e) => {

      })
  };
};

export const updatePost = (payload) => {
  return (dispatch) => {
    axios.put(`${API_URL}/posts/${payload.id}`, payload)
      .then((response) => {
        dispatch(editPost(payload))
      }).catch((e) => {

      })
  };
};

export const registerUser = (payload) => {
  return (dispatch) => {
    const user = {
      ...payload,
      token: generateToken()
    }

    console.log('user', user);
    //HACK
    dispatch(createUser(user))

    // axios.post(`${API_URL}/singup`, payload)
    //   .then((response) => {
      
    //   }).catch((e) => {

    //   })
  };
};

export const loginUser = (payload) => {
  return (dispatch, getState) => {
    const users = getState().users
    console.log('users', users);
    const targetUser = users.find(user => user.email === payload.email);
    console.log('targetUser', targetUser);
    dispatch(setCurrentUser(targetUser));
  };
};