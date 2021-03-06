export const statusState$ = state => state.status;

export const modalStatusState$ = state => state.status.showModal;

export const modalContentState$ = state => state.status.modalContent;

export const modalTitleState$ = state => state.status.title;

export const loadingInputState$ = state => state.status.loadingInput;

//notification

export const notifyStatusState$ = state => state.notify.notifyStatus;