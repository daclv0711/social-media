import { LOG_IN, LOG_OUT } from "constants/auth"
import { USER_ONLINE } from "constants/user"
import { getType } from "redux/actions"
import { UserAction } from "redux/actions/user.action"

const initialState = {
    isLoggedIn: false,
    passwordWrong: "",
    emailExist: "",
    createUser: false,
    infoUser: {},
    userOnline: [],
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOG_IN:
            return {
                ...state,
                isLoggedIn: true,
            }
        case LOG_OUT:
            return {
                ...state,
                isLoggedIn: false,
            }
        case USER_ONLINE:
            return {
                ...state,
                userOnline: action.payload,
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
        case getType(UserAction.postSignOutSuccess):
            return {
                ...state,
                isLoggedIn: false,
            }
        case getType(UserAction.postSignOutFailure):
            return {
                ...state,
            }
        case getType(UserAction.getUserSuccess):
            return {
                ...state,
                infoUser: action.payload,
            }
        default:
            return state
    }
}

export default authReducer;