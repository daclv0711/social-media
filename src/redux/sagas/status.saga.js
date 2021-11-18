import { call, put } from '@redux-saga/core/effects';
import { postStatus, getStatus, deleteStatus, updateStatus, getAllUsers, likeStatus } from 'apis/api';
import { hiddenLoading, showLoading } from 'redux/actions/loading';
import { StatusAction } from '../actions/status.action';

export const getStatusSaga = function* () {
    try {
        const status = yield call(getStatus);
        yield put(StatusAction.getStatusSuccess(status.data));
        const users = yield call(getAllUsers);
        yield put(StatusAction.getAllUsersSuccess(users.data));
    } catch (error) {
        yield put(StatusAction.getStatusFailure(error.response.data.message));
    }
}

export const likeStatusSaga = function* ({ payload }) {
    try {
        const status = yield call(likeStatus, payload);
        yield put(StatusAction.updateStatusSuccess(status.data));
    } catch (error) {
        yield put(StatusAction.updateStatusFailure(error));
    }
}

export const postStatusSaga = function* ({ payload }) {
    try {
        yield put(showLoading())
        const status = yield call(postStatus, payload);
        yield put(StatusAction.postStatusSuccess(status.data));

    } catch (error) {
        yield put(StatusAction.postStatusFailure(error));
    }
    yield put(hiddenLoading())
}

export const updateStatusSaga = function* ({ payload }) {
    try {
        yield put(showLoading())
        const status = yield call(updateStatus, payload._id, payload);
        yield put(StatusAction.updateStatusSuccess(status.data));

    } catch (error) {
        yield put(StatusAction.updateStatusFailure(error));
    }
    yield put(hiddenLoading())
}

export const deleteStatusSaga = function* ({ payload }) {
    try {
        const status = yield call(deleteStatus, payload);
        yield put(StatusAction.deleteStatusSuccess(status.data));

    } catch (error) {
        yield put(StatusAction.deleteStatusFailure(error));
    }
}