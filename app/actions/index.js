import * as types from '../constants';

// eslint-disable-next-line
export const changeType = type => {
  return {
    type: types.CHANGE_TYPE,
    data: type
  };
};

export const changeOptions = options => {
  return {
    type: types.CHANGE_OPTIONS,
    data: options
  };
};

export const resize = data => {
  return {
    type: types.RESIZE,
    data
  };
};

export const render = data => {
  return {
    type: types.RENDER_STATE,
    data
  };
};
