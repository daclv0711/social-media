import { changePassword, getUser, signIn, signOut, signUp, updateUser } from "apis/api";
import { UserAction } from "redux/actions/user.action";
import { call, put, select } from "redux-saga/effects";
import { setLocalStorage } from "utils/localStorage";
import { hiddenLoading, hiddenLoadingMain, loadingMain, showLoading } from "redux/actions/loading";
import { socket } from "constants/socket.io";
import { infoUserState$ } from "redux/selectors/user";

export const signInSaga = function* ({ payload }) {
    try {
        yield put(showLoading());
        const signin = yield call(signIn, payload);
        yield put(UserAction.postSignInSuccess(signin?.data));
        yield put(UserAction.getUserSuccess(signin?.data?.user));
        yield setLocalStorage("accessToken", signin?.data?.token);
        yield setLocalStorage("refreshToken", signin.data.refreshToken);
        yield socket.emit("user", signin.data.user);
    } catch (error) {
        yield put(UserAction.postSignInFailure(error?.response?.data?.message || "Internal server error"));
    }
    yield put(hiddenLoading());
};

export const signUpSaga = function* ({ payload }) {
    try {
        yield put(showLoading());
        const signup = yield call(signUp, payload);
        yield put(UserAction.postSignUpSuccess(signup.data));
    } catch (error) {
        yield put(UserAction.postSignUpFailure(error?.response?.data?.message || "Internal server error"));
    }
    yield put(hiddenLoading());
}

export const signOutSaga = function* () {
    try {
        const out = yield call(signOut);
        yield put(UserAction.postSignOutSuccess(out.data));
        yield setLocalStorage("accessToken", "");
        yield setLocalStorage("refreshToken", "");
        yield put(UserAction.getUserSuccess(null));
        yield socket.disconnect();
    } catch (error) {
        yield put(UserAction.postSignOutFailure(error?.response?.data?.message || "Internal server error"));
    }
}

export const getMeSaga = function* () {
    try {
        yield put(showLoading());
        const me = yield call(getUser);
        yield put(UserAction.getUserSuccess(me.data));
        yield socket.emit("user", me.data);
        yield put(hiddenLoading());
    } catch (error) {
        yield setLocalStorage("refreshToken", "");
        yield setLocalStorage("accessToken", "");
        yield put(UserAction.getUserSuccess(false));
        yield put(UserAction.getUserFailure(error?.response?.data?.message || "Internal server error"));
    }
}

export const updateUserSaga = function* ({ payload }) {
    try {
        yield put(loadingMain());
        const user = yield select(infoUserState$)
        const update = yield call(updateUser, user._id, payload);
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
        const newPassword = yield call(changePassword, user._id, payload);
        yield put(UserAction.changePasswordSuccess(newPassword.data));
    } catch (error) {
        yield put(UserAction.changePasswordFailure(error?.response?.data || "Internal server error"));
    }
    yield put(hiddenLoadingMain());

}