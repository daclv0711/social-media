import { getUser, signIn, signOut, signUp } from "apis/api";
import { LogIn, UserAction } from "redux/actions/user.action";
import { call, put } from "redux-saga/effects";
import { setLocalStorage } from "utils/localStorage";
import { hiddenLoading, showLoading } from "redux/actions/loading";

export const signInSaga = function* ({ payload }) {
    try {
        yield put(showLoading());
        const signin = yield call(signIn, payload);
        yield put(UserAction.postSignInSuccess(signin.data));
        yield setLocalStorage("accessToken", signin.data.token);
        yield setLocalStorage("refreshToken", signin.data.refreshToken);
        const user = yield call(getUser);
        yield put(UserAction.getUserSuccess(user.data));
        yield put(LogIn())
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
    } catch (error) {
        yield put(UserAction.postSignOutFailure(error.response.data.message));
    }
}
