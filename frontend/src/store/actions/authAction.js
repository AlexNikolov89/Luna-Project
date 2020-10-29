import {GET_TOKEN} from './actionTypes';
import baseUrl from '../../helpers/baseUrl'

export const setToken = (token) => {
    return {
        type: GET_TOKEN,
        payload: token,
    }
} 


export const authAction = (email, password) => async (dispatch, getState) => {
    const url = `${baseUrl}/api/auth/token/`;
    const config = {
        method: 'POST',
        headers: new Headers ({
            'Content-Type': 'application/json',
        }),
        body: JSON.stringify({email, password})
    };

    const response = await fetch(url, config)
    const data = await response.json()
    dispatch(setToken(data.access));
    localStorage.setItem('token', data.access)
    return data
}