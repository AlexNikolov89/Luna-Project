import {GET_RESTAURANTS, CREATE_NEW_RESTAURANT} from '../actions/actionTypes';

const initialState = {
    restaurants: [],
}

export default function restaurantReducer(state=initialState, action) {
    switch(action.type) {
        case GET_RESTAURANTS :
            return {
                ...state,
                restaurants: action.payload
            }
        default:
            return state;
    }
}

// export default restaurantReducer = (state=initialState, action) {
//     switch(action.type) {
//         case GET_RESTAURANTS:{
//             return {...state, restaurants: [...state.restaurant, action.payload]}
//         }
//     }
// }