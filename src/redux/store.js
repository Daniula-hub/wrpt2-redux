import {
  createStore,
  combineReducers,
  applyMiddleware
} from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import reducer from './reducer';
import reducerTwo from './reducerTwo';

const rootReducer = combineReducers({
  reducer,
  reducerTwo
})

export default createStore(rootReducer, applyMiddleware(promiseMiddleware));