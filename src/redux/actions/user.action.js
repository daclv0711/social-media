import { LOG_IN, LOG_OUT } from "constants/auth"
import { USER_ONLINE } from "constants/user"
import { createActions } from "redux-actions"

export const LogIn = () => {
    return {
        type: LOG_IN,
    }
}

export const Logout = () => {
    return {
        type: LOG_OUT,
    }
}

export const getUserOnline = (payload) => {
    return {
        type: USER_ONLINE,
        payload,
    }
}

export const UserAction = createActions({
    //signin
    postSignInRequest: (payload) => payload,
    postSignInSuccess: (payload) => payload,
    postSignInFailure: (err) => err,

    //signup
    postSignUpRequest: (payload) => payload,
    postSignUpSuccess: (payload) => payload,
    postSignUpFailure: (err) => err,

    //signout
    postSignOutRequest: undefined,
    postSignOutSuccess: (payload) => payload,
    postSignOutFailure: (err) => err,
    //get user
    getUserRequest: undefined,
    getUserSuccess: (payload) => payload,
    getUserFailure: (err) => err,
});

