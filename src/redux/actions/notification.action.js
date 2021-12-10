import { GET_NOTIFICATION_STATUS } from "constants/notification";

export const getNotification = (payload) => {
    return {
        type: GET_NOTIFICATION_STATUS,
        payload
    };
}