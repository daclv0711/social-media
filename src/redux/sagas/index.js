import { takeLatest } from "@redux-saga/core/effects";
import { StatusAction } from "redux/actions/status.action";
import { UserAction } from "redux/actions/user.action";
import * as status from "./status.saga";
import { signInSaga, signOutSaga, signUpSaga } from "./user.saga";


function* mySaga() {
    //auth
    yield takeLatest(UserAction.postSignInRequest, signInSaga);
    yield takeLatest(UserAction.postSignUpRequest, signUpSaga);
    yield takeLatest(UserAction.postSignOutRequest, signOutSaga);

    //status
    yield takeLatest(StatusAction.getStatusRequest, status.getStatusSaga);
    yield takeLatest(StatusAction.postStatusRequest, status.postStatusSaga);
    yield takeLatest(StatusAction.likeStatusRequest, status.likeStatusSaga);
    yield takeLatest(StatusAction.updateStatusRequest, status.updateStatusSaga);
    yield takeLatest(StatusAction.deleteStatusRequest, status.deleteStatusSaga);
}

export default mySaga;