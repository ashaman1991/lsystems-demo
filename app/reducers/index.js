// import { reducer as reduxFormReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

import { reducer as home } from '../components/canvas';

const initialState = {};

export default combineReducers(
  {
    home,
    routing: routerReducer
  },
  initialState
);
