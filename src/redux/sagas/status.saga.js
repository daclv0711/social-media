import { call, put } from '@redux-saga/core/effects';
import { postStatus, getStatus, deleteStatus, updateStatus, likeStatus } from 'apis/api';
import { socket } from 'constants/socket.io';
import { hiddenLoading, showLoading } from 'redux/actions/loading';
import { StatusAction } from '../actions/status.action';

export const getStatusSaga = function* ({ payload }) {
    try {
        const status = yield call(getStatus, payload);
        yield put(StatusAction.getStatusSuccess(status?.data));
    } catch (error) {
        yield put(StatusAction.getStatusFailure(error));
    }
}

export const likeStatusSaga = function* ({ payload }) {
    try {
        yield put(showLoading())
        yield call(likeStatus, payload);
        // yield put(StatusAction.updateStatusSuccess(status.data));
    } catch (error) {
        yield put(StatusAction.updateStatusFailure(error));
    }
    yield put(hiddenLoading())
}

export const postStatusSaga = function* ({ payload }) {
    try {
        yield put(showLoading())
        const status = yield call(postStatus, payload);
        socket.emit("notify-status", status.data.newStatus);

        // yield put(StatusAction.postStatusSuccess(status.data));

    } catch (error) {
        yield put(StatusAction.postStatusFailure(error));
    }
    yield put(hiddenLoading())
}

export const updateStatusSaga = function* ({ payload }) {
    try {
        yield put(showLoading())
        yield call(updateStatus, payload.idStatus, payload.payload);
        // yield put(StatusAction.updateStatusSuccess(status.data));

    } catch (error) {
        yield put(StatusAction.updateStatusFailure(error));
    }
    yield put(hiddenLoading())
}

export const deleteStatusSaga = function* ({ payload }) {
    try {
        yield call(deleteStatus, payload);
        // yield put(StatusAction.deleteStatusSuccess(status.data));

    } catch (error) {
        yield put(StatusAction.deleteStatusFailure(error));
    }
}