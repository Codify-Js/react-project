import * as actions from '../actions/actionTypes';

const questions = [
    {
      id: 1,
      title: 'В каком году вышел Шрек 1',
      answers: [
        {
          title: '1999',
          correct: false
        },
        {
          title: '2001',
          correct: true
        },
        {
          title: '2004',
          correct: false
        },
        {
          title: '2000',
          correct: false
        }
      ]
    },
    {
      id: 2,
      title: 'Сколько серий в Наруто',
      answers: [
        {
          title: '500',
          correct: true
        },
        {
          title: '600',
          correct: false
        },
        {
          title: '700',
          correct: false
        },
        {
          title: '800',
          correct: false
        }
      ]
    },
    {
      id: 2,
      title: 'Самое длинное Аниме',
      answers: [
        {
          title: '7000 серий',
          correct: true
        },
        {
          title: '10000 серий',
          correct: false
        },
        {
          title: '100 серий',
          correct: false
        },
        {
          title: '4000 серий',
          correct: false
        }
      ]
    }
  ]

const initState = {
  posts: [],
  postLoading: false,
  createdPosts: [],
  questions: questions,
  users: [],
  currentUser: null
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

    case actions.CREATE_USER:
      const users = [...state.users, action.payload]
      return {
        ...state,
        users
      }

    case actions.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload
      }
    default:
      return state;
  }
}