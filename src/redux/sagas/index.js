import { fork, takeLatest } from "@redux-saga/core/effects";
import { StatusAction } from "redux/actions/status.action";
import { UserAction } from "redux/actions/user.action";
import { socketSaga } from "./socket.io";
import * as status from "./status.saga";
import { getMeSaga, signInSaga, signOutSaga, signUpSaga } from "./user.saga";


function* mySaga() {

    //user
    yield takeLatest(UserAction.postSignInRequest, signInSaga);
    yield takeLatest(UserAction.postSignUpRequest, signUpSaga);
    yield takeLatest(UserAction.postSignOutRequest, signOutSaga);
    yield takeLatest(UserAction.getUserRequest, getMeSaga);

    //status
    yield takeLatest(StatusAction.getStatusRequest, status.getStatusSaga);
    yield takeLatest(StatusAction.postStatusRequest, status.postStatusSaga);
    yield takeLatest(StatusAction.likeStatusRequest, status.likeStatusSaga);
    yield takeLatest(StatusAction.updateStatusRequest, status.updateStatusSaga);
    yield takeLatest(StatusAction.deleteStatusRequest, status.deleteStatusSaga);

    //socket.io connection
    yield fork(socketSaga)
}

export default mySaga;