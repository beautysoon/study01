import {LOGIN_TEACHER} from "./actionType";
import {combineReducers} from "redux";

function teaLogin(state = {id:0}, action) {
    switch (action.type) {
        case LOGIN_TEACHER:
            return {id:action.id};
            // return state+action.data;
            // return Object.assign({}, state, {
            //     id: action.data
            // });
        default:
            return state;
    }
}

// export const finalReducer = combineReducers({
//     teaLogin
// });

export default teaLogin;