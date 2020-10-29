import baseUrl from '../../helpers/baseUrl'
import { GET_RESTAURANTS } from './actionTypes';

export const getAllRestaurantsAction = (dispatch, getState) => {
    const token = getState().auth.token;
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