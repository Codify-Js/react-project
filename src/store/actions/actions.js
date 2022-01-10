// import * as actions from './actionTypes';
import { 
  POST_LIST_REQUEST,
  POST_LIST_RESPONSE,
} from './actionTypes';

export const fetchPostList = () => ({
  type: POST_LIST_REQUEST
});

export const setPostList = posts => ({
  type: POST_LIST_RESPONSE,
  payload: posts
});