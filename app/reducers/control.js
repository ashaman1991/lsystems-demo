import * as types from '../constants';

const initialControlState = {
  shouldRender: false,
  imageExport: false
};

const control = (state = initialControlState, action) => {
  switch (action.type) {
    case types.RENDER_STATE:
      return Object.assign({}, state, { shouldRender: action.data });
    case types.IMAGE_EXPORT:
      return Object.assign({}, state, { imageExport: action.data });
    default:
      return state;
  }
};

export default control;
