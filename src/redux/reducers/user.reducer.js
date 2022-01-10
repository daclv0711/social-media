import { USER_ONLINE, LOG_IN, LOG_OUT } from "constants/user"
import { getType } from "redux/actions"
import { UserAction } from "redux/actions/user.action"

const initialState = {
    passwordWrong: "",
    emailExist: "",
    createUser: false,
    infoUser: null,
    userOnline: [],
    infoChangePassword: "",
    isLogin: false,
    otp: false,
    otpError: "",
    resetPassword: false,
    resetPasswordError: "",
    allUsers: [],
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_ONLINE:
            return {
                ...state,
                userOnline: action.payload.filter(user => user.user_id !== state.infoUser?._id),
            }
        case LOG_IN:
            return {
                ...state,
                isLogin: true,
            }
        case LOG_OUT:
            return {
                ...state,
                isLogin: false,
            }
        case getType(UserAction.getAllUsersSuccess):
            return {
                ...state,
                allUsers: action.payload,
            }
        case getType(UserAction.postSignInSuccess):
            return {
                ...state,
                passwordWrong: ""
            }
        case getType(UserAction.postSignInFailure):
            return {
                ...state,
                passwordWrong: action.payload,
            }
        case getType(UserAction.postSignUpSuccess):
            return {
                ...state,
                createUser: action.payload,
                emailExist: "",
            }
        case getType(UserAction.postSignUpFailure):
            return {
                ...state,
                emailExist: action.payload,
                createUser: false,
            }
        case getType(UserAction.postSignOutFailure):
            return {
                ...state,
            }
        case getType(UserAction.postOtpSuccess):
            return {
                ...state,
                otp: action.payload,
                otpError: "",
            }
        case getType(UserAction.postOtpFailure):
            return {
                ...state,
                otpError: action.payload,
                otp: false,
            }
        case getType(UserAction.postResetPasswordSuccess):
            return {
                ...state,
                resetPassword: action.payload,
                resetPasswordError: "",
            }
        case getType(UserAction.postResetPasswordFailure):
            return {
                ...state,
                resetPassword: false,
                resetPasswordError: action.payload,
            }
        case getType(UserAction.getUserSuccess):
            return {
                ...state,
                infoUser: action.payload,
            }
        case getType(UserAction.updateUserSuccess):
            return {
                ...state,
                infoUser: action.payload,
            }
        case getType(UserAction.changePasswordSuccess):
            return {
                ...state,
                infoChangePassword: action.payload,
            }
        case getType(UserAction.changePasswordFailure):
            return {
                ...state,
                infoChangePassword: action.payload,
            }
        default:
            return state
    }
}

export default authReducer;