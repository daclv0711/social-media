import { HIDE_STATUS_MODAL, SHOW_STATUS_MODAL, STATUS_MODAL_CONTENT, STATUS_MODAL_TITLE } from 'constants/status';
import { getType } from 'redux/actions';
import { StatusAction } from 'redux/actions/status.action';

const initialState = {
    allStatus: [],
    allUsers: [],
    showModal: false,
    modalContent: null,
    title: ''
}

const statusReducer = (state = initialState, action) => {
    switch (action.type) {

        case SHOW_STATUS_MODAL:
            return {
                ...state,
                showModal: true,
            }
        case HIDE_STATUS_MODAL:
            return {
                ...state,
                showModal: false,
            }
        case STATUS_MODAL_CONTENT:
            return {
                ...state,
                modalContent: action.payload,
            }
        case STATUS_MODAL_TITLE:
            return {
                ...state,
                title: action.payload,
            }
        case getType(StatusAction.getStatusSuccess):
            return {
                ...state,
                allStatus: action.payload,
            }
        case getType(StatusAction.postStatusSuccess):
            return {
                ...state,
                allStatus: [action.payload, ...state.allStatus],
                showModal: false
            }
        case getType(StatusAction.getAllUsersSuccess):
            return {
                ...state,
                allUsers: action.payload,
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