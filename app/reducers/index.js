import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import fractal from './fractal';
import canvas from './canvas';
import control from './control';

export default combineReducers(
  {
    canvas,
    control,
    fractal,
    routing: routerReducer
  },
  {}
);
