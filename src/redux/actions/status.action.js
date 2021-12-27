import { createActions } from "redux-actions";
import * as status from "constants/status";

export const showStatusModal = () => {
    return {
        type: status.SHOW_STATUS_MODAL,
    };
}

export const statusModalContent = (payload) => {
    return {
        type: status.STATUS_MODAL_CONTENT,
        payload,
    };
}

export const statusModalTitle = (payload) => {
    return {
        type: status.STATUS_MODAL_TITLE,
        payload,
    };
}

export const hideStatusModal = () => {
    return {
        type: status.HIDE_STATUS_MODAL,
    }
}

export const showStatusLoadingInput = (payload) => {
    return {
        type: status.LOADING_INPUT_START,
        payload,
    }
}

export const hideStatusLoadingInput = (payload) => {
    return {
        type: status.LOADING_INPUT_END,
        payload,
    }
}

export const StatusAction = createActions({

    // users
    getAllUsersSuccess: (payload) => payload,

    //like status
    likeStatusRequest: (payload) => payload,
    //get status
    getStatusRequest: (payload) => payload,
    getStatusSuccess: (payload) => payload,
    getStatusFailure: (err) => err,

    //post status
    postStatusRequest: (payload) => payload,
    postStatusSuccess: (payload) => payload,
    postStatusFailure: (err) => err,

    //put status
    updateStatusRequest: (idStatus, payload) => { return { idStatus, payload } },
    updateStatusSuccess: (payload) => payload,
    updateStatusFailure: (err) => err,

    //delete status
    deleteStatusRequest: (payload) => payload,
    deleteStatusSuccess: (payload) => payload,
    deleteStatusFailure: (err) => err,
})