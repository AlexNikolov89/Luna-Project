import {GET_RESTAURANTS, CREATE_NEW_RESTAURANT} from '../actions/actionTypes';

const initialState = {
    all_restaurants: null
};

export const restaurantReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_RESTAURANTS: {
            return {...state, all_restaurants: [...action.payload]}
        }
    }
    return {...state};
}