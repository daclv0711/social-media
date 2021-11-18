import { LOADING_END, LOADING_START } from "constants/loading";

export const showLoading = () => ({
    type: LOADING_START,
});

export const hiddenLoading = () => ({
    type: LOADING_END,
});