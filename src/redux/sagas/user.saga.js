import { getUser, signIn, signOut, signUp } from "apis/api";
import { UserAction } from "redux/actions/user.action";
import { call, put } from "redux-saga/effects";
import { setLocalStorage } from "utils/localStorage";
import { hiddenLoading, showLoading } from "redux/actions/loading";
import { socket } from "constants/socket.io";

export const signInSaga = function* ({ payload }) {
    try {
        yield put(showLoading());
        const signin = yield call(signIn, payload);
        yield put(UserAction.postSignInSuccess(signin.data));
        yield put(UserAction.getUserSuccess(signin.data.user));
        yield setLocalStorage("accessToken", signin.data.token);
        yield setLocalStorage("refreshToken", signin.data.refreshToken);
        yield socket.emit("user", signin.data.user);
    } catch (error) {
        yield put(UserAction.postSignInFailure(error.response.data.message));
    }
    yield put(hiddenLoading());
};

export const signUpSaga = function* ({ payload }) {
    try {
        yield put(showLoading());
        const signup = yield call(signUp, payload);
        yield put(UserAction.postSignUpSuccess(signup.data));
    } catch (error) {
        yield put(UserAction.postSignUpFailure(error.response.data.message));
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
        yield put(UserAction.postSignOutFailure(error.response.data.message));
    }
}

export const getMeSaga = function* () {
    try {
        const me = yield call(getUser);
        yield put(UserAction.getUserSuccess(me.data));
        console.log('21212')
        yield socket.emit("user", me.data);
    } catch (error) {
        yield setLocalStorage("refreshToken", "");
        yield setLocalStorage("accessToken", "");
        yield put(UserAction.getUserSuccess(false));
        yield put(UserAction.getUserFailure(error.response.data.message));
    }
}
