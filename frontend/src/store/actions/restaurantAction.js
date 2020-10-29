import baseUrl from '../../helpers/baseUrl'
import { GET_RESTAURANTS } from './actionTypes';

export const getAllRestaurantsAction = (dispatch, getState) => {
    // const token = getState().auth.token;
    const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjA0MTc4MTkyLCJqdGkiOiJkMjNiM2M1ZWViYzQ0ZmRlOTYzYTMyZTFmMzY0NTc3NCIsInVzZXJfaWQiOjEyfQ.c2lG_vLaCk7c-Rwe0rCb47jVBo0rjZo5s6A3xg144YE"
    fetch('http://0.0.0.0:8000/backend/api/restaurants/', {
        headers: new Headers({
            Authorization: `Bearer ${token}`,
        }),
    })
        .then((r) => r.json())
        .then((restaurants) => {
            console.log("restaurants", restaurants);
            dispatch({
                type: GET_RESTAURANTS,
                payload: restaurants,
            });
        });
};