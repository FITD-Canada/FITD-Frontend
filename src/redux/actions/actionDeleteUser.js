import * as types from '../constants/actionTypes';

const actionDeleteUser = userId => {
  return {
    type: types.DELETE_USER_REQUEST,
    payload: userId,
  };
};

export default actionDeleteUser;
