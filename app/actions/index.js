import * as types from '../constants';

// eslint-disable-next-line
export const changeType = type => {
  return {
    type: types.CHANGE_TYPE,
    data: type
  };
};
