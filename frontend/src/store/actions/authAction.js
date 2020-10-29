import { USER_LOGIN } from '../actions/actionTypes';

export const authAction = (token) => {
    console.log('in authAction, token: ', token);
    return {
        type: USER_LOGIN,
        payload: token
    }
};