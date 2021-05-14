import axios from 'axios';

// initial state
const initialState = {
  count: 0,
  characters: [],
  loading: false,
  error: '',
}
// action types
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
  // alternative to increment and decrement
const CHANGE_COUNT = 'CHANGE_COUNT';
const GET_SW_CHARACTERS = 'GET_SW_CHARACTERS';
// action creator
export const increment = () => {
  return {
    type: INCREMENT,
  }
}
export const decrement = () => {
  return {
    type: DECREMENT,
  }
}
export const changeCount = (count) => {
  return {
    type: CHANGE_COUNT,
    payload: count,
  }
}
export const getSWCharacters = () => {
  return {
    type: GET_SW_CHARACTERS,
    payload: axios.get('https://swpi.dev/api/people'),
  }
}
// reducer
const reducer = (state=initialState, action) => {
  console.log(action);
  switch(action.type) {
    case INCREMENT: {
      console.log({
        ...state,
        count: state.count + 1, 
      })
      return {
        ...state,
        count: state.count + 1, 
      }
    }
    case DECREMENT: {
      return {
        ...state,
        count: state.count - 1,
      }
    }
    case CHANGE_COUNT: {
      return {
        ...state,
        count: state.count + action.payload,
      }
    }
    case `${GET_SW_CHARACTERS}_PENDING`: {
      return {
        ...state,
        loading: true,
      }
    }
    case `${GET_SW_CHARACTERS}_FULFILLED`: {
      return {
        ...state,
        loading: false,
        characters: action.payload.data.results,
      }
    }
    case `${GET_SW_CHARACTERS}_REJECTED`: {
      return {
        ...state,
        loading: false,
        error: 'Something bad happened',
      }
    }
    default: return state;
  }
}

export default reducer;