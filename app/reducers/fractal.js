import { fractalTypes } from '../lib/lSys';
import * as types from '../constants';

const defaultOptions = {
  common: {
    lineColor: '#000000',
    stepLength: 25,
    animate: true,
    backgroundColor: '#ffffff'
  },
  any: {
    iterations: 5,
    start: { x: 0, y: 0 }
  },
  [fractalTypes.DRAGON_CURVE]: {
    start: { x: 600, y: 300 },
    iterations: 10
  },
  [fractalTypes.KOCH_CURVE]: {
    iterations: 3
  },
  [fractalTypes.PLANT]: {
    start: { x: 0, y: 300 },
    iterations: 4
  },
  [fractalTypes.TREE]: {
    start: { x: 0, y: 300 },
    iterations: 6
  }
};

const initialFractalState = {
  type: fractalTypes.SERPINSKY_TRIANGLE,
  options: Object.assign(
    {},
    defaultOptions.common,
    defaultOptions.any,
    defaultOptions[fractalTypes.SERPINSKY_TRIANGLE]
  )
};

let options;

const fractal = (state = initialFractalState, action) => {
  switch (action.type) {
    case types.CHANGE_TYPE:
      options = Object.assign(
        {},
        state.options,
        defaultOptions.any,
        defaultOptions[action.data]
      );
      return Object.assign({}, state, {
        type: action.data,
        options
      });
    case types.CHANGE_OPTIONS:
      options = Object.assign({}, state.options, action.data);
      return Object.assign({}, state, { options });
    default:
      return state;
  }
};

export default fractal;
