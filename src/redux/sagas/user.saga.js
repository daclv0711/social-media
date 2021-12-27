import * as apiUser from "apis/api";
import { isLoginFalse, isLoginTrue, UserAction } from "redux/actions/user.action";
import { call, put, select } from "redux-saga/effects";
import { setLocalStorage } from "utils/localStorage";
import { hiddenLoading, hiddenLoadingMain, loadingMain, showLoading } from "redux/actions/loading";
import { socket } from "constants/socket.io";
import { infoUserState$ } from "redux/selectors/user";

export const signInSaga = function* ({ payload }) {
    try {
        yield put(showLoading());
        const signin = yield call(apiUser.signIn, payload);
        yield put(UserAction.postSignInSuccess(signin?.data));
        yield put(isLoginTrue());
        yield socket.connect();
        yield socket.emit("user", signin.data.user);
        yield put(UserAction.getUserSuccess(signin?.data?.user));
        yield setLocalStorage("accessToken", signin?.data?.token);
        yield setLocalStorage("refreshToken", signin.data.refreshToken);
    } catch (error) {
        yield put(isLoginFalse());
        yield put(UserAction.postSignInFailure(error?.response?.data?.message || "Internal server error"));
    }
    yield put(hiddenLoading());
};

export const signUpSaga = function* ({ payload }) {
    try {
        yield put(showLoading());
        const signup = yield call(apiUser.signUp, payload);
        yield put(UserAction.postSignUpSuccess(signup.data));
    } catch (error) {
        yield put(UserAction.postSignUpFailure(error?.response?.data?.message || "Internal server error"));
    }
    yield put(hiddenLoading());
}

export const signOutSaga = function* () {
    try {
        yield localStorage.removeItem("accessToken");
        const out = yield call(apiUser.signOut);
        yield put(UserAction.postSignOutSuccess(out.data));
        yield localStorage.removeItem("refreshToken");
        yield put(isLoginFalse());
        yield put(UserAction.getUserSuccess(null));
        yield socket.disconnect();
    } catch (error) {
        yield put(UserAction.postSignOutFailure(error?.response?.data?.message || "Internal server error"));
    }
}

export const getOtpSaga = function* ({ payload }) {
    try {
        yield put(showLoading());
        const otp = yield call(apiUser.getOtp, payload);
        if (otp.data.success && otp.data.code === 200) {
            yield put(UserAction.postOtpSuccess(otp.data.success));
        }
    } catch (error) {
        yield put(UserAction.postOtpFailure(error?.response?.data?.message || "Internal server error"));
    }
    yield put(hiddenLoading());
}

export const resetPasswordSaga = function* ({ payload }) {
    try {
        yield put(showLoading());
        const reset = yield call(apiUser.resetPassword, payload);
        if (reset.data.success && reset.data.code === 200) {
            yield put(UserAction.postResetPasswordSuccess(reset.data.success));
        }
    } catch (error) {
        yield put(UserAction.postResetPasswordFailure(error?.response?.data?.message || "Internal server error"));
    }
    yield put(hiddenLoading());
}

export const getMeSaga = function* () {
    try {
        yield put(isLoginTrue())
        const me = yield call(apiUser.getUser);
        yield put(UserAction.getUserSuccess(me?.data));
        yield socket.emit("user", me.data);
    } catch (error) {
        yield put(isLoginFalse());
        yield put(UserAction.getUserSuccess(null));
        yield localStorage.removeItem("refreshToken");
        yield localStorage.removeItem("accessToken");
        yield put(UserAction.getUserFailure(error?.response?.data?.message || "Internal server error"));
    }
}

export const updateUserSaga = function* ({ payload }) {
    try {
        yield put(loadingMain());
        const user = yield select(infoUserState$)
        const update = yield call(apiUser.updateUser, user._id, payload);
        yield put(UserAction.updateUserSuccess(update.data));
    } catch (error) {
        yield put(UserAction.updateUserFailure(error?.response?.data?.message || "Internal server error"));
    }
    yield put(hiddenLoadingMain());
}

export const changePasswordSaga = function* ({ payload }) {
    try {
        yield put(loadingMain());
        const user = yield select(infoUserState$)
        const newPassword = yield call(apiUser.changePassword, user._id, payload);
        yield put(UserAction.changePasswordSuccess(newPassword?.data));
    } catch (error) {
        yield put(UserAction.changePasswordFailure(error?.response?.data?.message || "Internal server error"));
    }
    yield put(hiddenLoadingMain());

}