import * as actions from '../actions/actionTypes';

const initState = {
  posts: [],
  postLoading: false,
  createdPosts: []
}

export default function reducer(state = initState, action) {
  switch (action.type) {
    case actions.POST_LIST_REQUEST:
      return { 
        ...state, 
        postLoading: true
      }
    case actions.POST_LIST_RESPONSE:
      return {
        ...state,
        posts: action.payload,
        postLoading: false
      }
    case actions.POST_CREATE_RESPONSE:
      return {
        ...state,
        createdPosts: [...state.createdPosts, action.payload],
      }
    default:
      return state;
  }
}