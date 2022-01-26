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
        createdPosts: [...state.createdPosts, {...action.payload, id: state.createdPosts.length + 1}],
      }
    case actions.POST_DELETE:
      // const filteredCreatedPosts = state.createdPosts.filter(item => item.id !== action.postId)
      const filteredCreatedPosts = [...state.createdPosts]
      const target = filteredCreatedPosts.find(item => item.id === action.postId)
      const targetIndex = filteredCreatedPosts.indexOf(target)
      filteredCreatedPosts.splice(targetIndex, 1)
      
      return {
        ...state,
        createdPosts: filteredCreatedPosts,
      }

    case actions.POST_UPDATE:
      const newPosts = [...state.createdPosts]
      const targetPost = newPosts.find(item => item.id === action.payload.id);
      const index = newPosts.indexOf(targetPost);
      newPosts[index] = action.payload;

      return {
        ...state,
        createdPosts: newPosts,
      }
    default:
      return state;
  }
}