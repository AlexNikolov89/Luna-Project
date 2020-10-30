import baseUrl from '../../helpers/baseUrl'
import { GET_BEST_RESTAURANTS, GET_RESTAURANTS } from './actionTypes';

export const getAllRestaurantsAction = (dispatch, getState) => {
    const token = getState().auth.token;
    fetch(`${baseUrl}/backend/api/restaurants/`, {
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

export const getBestRestaurantsAction = (dispatch, getState) => {
    const token = getState().auth.token;
    fetch(`${baseUrl}/backend/api/home/`, {
        headers: new Headers({
            Authorization: `Bearer ${token}`,
        }),
    })
        .then((r) => r.json())
        .then((restaurants) => {
            console.log("restaurants", restaurants);
            dispatch({
                type: GET_BEST_RESTAURANTS,
                payload: restaurants,
            });
        });
};
