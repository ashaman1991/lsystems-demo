import * as types from '../constants';

const initialCanvasState = {
  height: 600,
  width: 800,
  shouldRender: false,
  isAnimated: true
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

export default canvas;
