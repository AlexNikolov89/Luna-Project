import {GET_TOKEN} from '../actions/actionTypes';

const initialState = {
    token: null, //localStorage
}

export default function authReducer(state=initialState, action) {
    console.log('in da: authReducer -> state', state)
    console.log('in da: authReducer -> action', action)

    switch(action.type) {
        case GET_TOKEN: {
            const newState = {...state}
            newState.token = action.payload
            return newState
        }
        default: {
            return state
        }
    }

}