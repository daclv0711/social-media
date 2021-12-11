import { USER_ONLINE } from "constants/user"
import { getType } from "redux/actions"
import { UserAction } from "redux/actions/user.action"

const initialState = {
    passwordWrong: "",
    emailExist: "",
    createUser: false,
    infoUser: null,
    userOnline: [],
    infoChangePassword: "",
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_ONLINE:
            return {
                ...state,
                userOnline: action.payload.filter(user => user._id !== state.infoUser?._id),
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