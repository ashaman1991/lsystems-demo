import * as types from '../constants';

export const render = data => {
  return {
    type: types.RENDER_STATE,
    data
  };
};

export const exportImage = data => {
  return {
    type: types.IMAGE_EXPORT,
    data
  };
};
