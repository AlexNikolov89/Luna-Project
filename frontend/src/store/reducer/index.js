import { combineReducers } from 'redux';
import { profileReducer } from '../reducer/profileReducer'
import { restaurantReducer } from '../reducer/restaurantReducer';

const reducers = combineReducers({
    profile: profileReducer,
    restaurants: restaurantReducer
    auth: // @Stefan: Could you add a login reducer here?
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

