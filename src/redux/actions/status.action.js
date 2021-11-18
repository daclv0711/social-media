import { createActions } from "redux-actions";
import { SHOW_STATUS_MODAL, HIDE_STATUS_MODAL, STATUS_MODAL_CONTENT, STATUS_MODAL_TITLE } from "constants/status";
export const showStatusModal = () => {
    return {
        type: SHOW_STATUS_MODAL,
    };
}

export const statusModalContent = (payload) => {
    return {
        type: STATUS_MODAL_CONTENT,
        payload,
    };
}

export const statusModalTitle = (payload) => {
    return {
        type: STATUS_MODAL_TITLE,
        payload,
    };
}

export const hideStatusModal = () => {
    return {
        type: HIDE_STATUS_MODAL,
    }
}

export const StatusAction = createActions({

    // users
    getAllUsersSuccess: (payload) => payload,

    //like status
    likeStatusRequest: (payload) => payload,
    //get status
    getStatusRequest: undefined,
    getStatusSuccess: (payload) => payload,
    getStatusFailure: (err) => err,

    //post status
    postStatusRequest: (payload) => payload,
    postStatusSuccess: (payload) => payload,
    postStatusFailure: (err) => err,

    //put status
    updateStatusRequest: (payload) => payload,
    updateStatusSuccess: (payload) => payload,
    updateStatusFailure: (err) => err,

    //delete status
    deleteStatusRequest: (payload) => payload,
    deleteStatusSuccess: (payload) => payload,
    deleteStatusFailure: (err) => err,
})