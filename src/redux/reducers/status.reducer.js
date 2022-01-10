import * as status from 'constants/status';
import { getType } from 'redux/actions';
import { StatusAction } from 'redux/actions/status.action';

const initialState = {
    allStatus: [],
    allUsers: [],
    showModal: false,
    modalContent: null,
    title: '',
    loadingInput: "",
    total: null,
    loading: false,
}

const statusReducer = (state = initialState, action) => {
    switch (action.type) {

        case status.LOADING_INPUT_START:
            return {
                ...state,
                loadingInput: action.payload
            }

        case status.LOADING_INPUT_END:
            return {
                ...state,
                loadingInput: action.payload
            }

        case status.SHOW_STATUS_MODAL:
            return {
                ...state,
                showModal: true,
            }
        case status.HIDE_STATUS_MODAL:
            return {
                ...state,
                showModal: false,
            }
        case status.STATUS_MODAL_CONTENT:
            return {
                ...state,
                modalContent: action.payload,
            }
        case status.STATUS_MODAL_TITLE:
            return {
                ...state,
                title: action.payload,
            }
        case getType(StatusAction.getStatusRequest):
            return {
                ...state,
                loading: true,
            }
        case getType(StatusAction.getStatusSuccess):
            const { data, total } = action.payload;

            return {
                ...state,
                allStatus: [...state.allStatus, ...data],
                total,
                loading: false,
            }
        case getType(StatusAction.postStatusSuccess):
            return {
                ...state,
                allStatus: [action.payload, ...state.allStatus],
                showModal: false
            }
        case getType(StatusAction.updateStatusSuccess):
            const { allStatus } = state;
            const allStatusIndex = allStatus.findIndex(status => status._id === action.payload._id);
            allStatus[allStatusIndex] = action.payload;
            return {
                ...state,
                allStatus: [...allStatus],
                showModal: false
            }
        case getType(StatusAction.deleteStatusSuccess):
            const { _id } = action.payload

            return {
                ...state,
                allStatus: state.allStatus.filter(status => status._id !== _id),
            }
        default:
            return state
    }
}

export default statusReducer;