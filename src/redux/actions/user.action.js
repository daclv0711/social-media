import { USER_ONLINE, LOG_IN, LOG_OUT } from "constants/user"
import { createActions } from "redux-actions"

export const getUserOnline = (payload) => {
    return {
        type: USER_ONLINE,
        payload,
    }
}

export const isLoginTrue = () => {
    return {
        type: LOG_IN,
    }
}

export const isLoginFalse = () => {
    return {
        type: LOG_OUT,
    }
}

export const UserAction = createActions({
    //all user
    getAllUsersSuccess: (payload) => payload,

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
    //get otp
    postOtpRequest: (payload) => payload,
    postOtpSuccess: (payload) => payload,
    postOtpFailure: (err) => err,

    //reset password
    postResetPasswordRequest: (payload) => payload,
    postResetPasswordSuccess: (payload) => payload,
    postResetPasswordFailure: (err) => err,
    //get user
    getUserRequest: undefined,
    getUserSuccess: (payload) => payload,
    getUserFailure: (err) => err,
    //update user
    updateUserRequest: (payload) => payload,
    updateUserSuccess: (payload) => payload,
    updateUserFailure: (err) => err,

    //change password
    changePasswordRequest: (payload) => payload,
    changePasswordSuccess: (payload) => payload,
    changePasswordFailure: (err) => err,
});

