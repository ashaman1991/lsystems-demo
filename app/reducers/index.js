import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import fractal from './fractal';
import canvas from './canvas';

export default combineReducers(
  {
    canvas,
    fractal,
    routing: routerReducer
  },
  {}
);
