import { fractalTypes } from '../lib/lSys';
import * as types from '../constants';

const defaultOptions = {
  any: {
    start: { x: 0, y: 0 },
    lineColor: '#000000',
    iterations: 5,
    stepLength: 25,
    animate: true,
    backgroundColor: '#ffffff'
  }
};

defaultOptions[fractalTypes.DRAGON_CURVE] = Object.assign(
  {},
  defaultOptions.any,
  {
    start: { x: 600, y: 300 },
    iterations: 10
  }
);

defaultOptions[fractalTypes.KOCH_CURVE] = Object.assign(
  {},
  defaultOptions.any,
  {
    iterations: 3
  }
);

defaultOptions[fractalTypes.PLANT] = Object.assign({}, defaultOptions.any, {
  start: { x: 0, y: 300 },
  iterations: 4
});

defaultOptions[fractalTypes.TREE] = Object.assign({}, defaultOptions.any, {
  start: { x: 0, y: 300 },
  iterations: 6
});

const initialFractalState = {
  type: fractalTypes.SERPINSKY_TRIANGLE,
  options: defaultOptions.any
};

let options;

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

export default fractal;
