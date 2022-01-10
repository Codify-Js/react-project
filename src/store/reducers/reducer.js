import * as actions from '../actions/actionTypes';

const initState = {
  posts: [],
  postLoading: false,
}

export default function reducer(state = initState, action) {
  console.log('action', action);
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
    default:
      return state;
  }
}