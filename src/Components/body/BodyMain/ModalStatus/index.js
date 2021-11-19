import { Modal } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hideStatusModal } from 'redux/actions/status.action';
import { modalContentState$, modalStatusState$, modalTitleState$ } from 'redux/selectors/status';
import { StatusTitle } from './index.styles';


function ModalStatus(props) {

    const dispatch = useDispatch();
    const showModalStatus = useSelector(modalStatusState$)
    const modalStatus = useSelector(modalContentState$)
    const modalTitle = useSelector(modalTitleState$)
    const handleCancel = () => {
        dispatch(hideStatusModal())
    };

    return (
        <Modal
            title={<StatusTitle>{modalTitle}</StatusTitle>}
            visible={showModalStatus}
            footer={null}
            onCancel={handleCancel}
        >
            {modalStatus}
        </Modal>
    );
}

export default React.memo(ModalStatus);