import { combineReducers } from 'redux';
import { profileReducer } from '../reducer/profileReducer'
import { restaurantReducer } from '../reducer/restaurantReducer';
import { authReducer } from '../reducer/authReducer';

const reducers = combineReducers({
    profile: profileReducer,
    restaurants: restaurantReducer,
    auth: authReducer
});
export default reducers

// const initialState = {
//     token: null,
// }


// export const lunaReducer = (state = initialState, action) => {

//     switch (action.type) {
//         // case GET_TOKEN:
//         //     console.log("in da token ", action.payload)
//         //     return { ...state, token: action.payload }
//         // default:
//         //     return state;
//     }
// }

