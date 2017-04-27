import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import * as types from '../constants';
import { defaultOptions } from '../lib/lSys';

let options;

const initialCanvasState = {
  height: 600,
  width: 800,
  shouldRender: false
};

const initialFractalState = {
  type: 'serpinskyTriangle',
  options: defaultOptions.any
};

const canvas = (state = initialCanvasState, action) => {
  switch (action.type) {
    case types.RESIZE:
      return Object.assign({}, state, action.data);
    case types.RENDER_STATE:
      return Object.assign({}, state, { shouldRender: action.data });
    default:
      return state;
  }
};

const fractal = (state = initialFractalState, action) => {
  switch (action.type) {
    case types.CHANGE_TYPE:
      return Object.assign({}, state, {
        type: action.data,
        options: defaultOptions[action.data] || defaultOptions.any
      });
    case types.CHANGE_OPTIONS:
      options = Object.assign({}, state.options, action.data);
      return Object.assign({}, state, { options });
    default:
      return state;
  }
};

export default combineReducers(
  {
    canvas,
    fractal,
    routing: routerReducer
  },
  {}
);
