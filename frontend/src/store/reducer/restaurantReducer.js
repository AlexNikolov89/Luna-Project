import {GET_RESTAURANTS, CREATE_NEW_RESTAURANT, GET_BEST_RESTAURANTS} from '../actions/actionTypes';

const initialState = {
    all_restaurants: null,
    best_restaurants: null
};

export const restaurantReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_RESTAURANTS: {
            return {...state, all_restaurants: [...action.payload]}
        }
    }
    switch(action.type) {
        case GET_BEST_RESTAURANTS: {
            return {...state, best_restaurants: [...action.payload]}
        }
    }
    return {...state};
}