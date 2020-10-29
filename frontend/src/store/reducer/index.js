import { combineReducers } from 'redux';
import { authReducer } from './authReducer'

const reducers = combineReducers({
    authReducer,
});

export default reducers

// import { GET_TOKEN } from '../actions/actionTypes'

// const initialState = {
//     token: "",
// }


// export const lunaReducer = (state = initialState, action) => {

//     switch (action.type) {
//         case GET_TOKEN:
//             console.log("in da token ", action.payload)
//             return { ...state, token: action.payload }
//         default:
//             return state;
//     }
// }
