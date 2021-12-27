import { Modal } from 'antd';
import React from 'react';
import { useDispatch } from 'react-redux';
import { hideStatusModal } from 'redux/actions/status.action';
import { StatusTitle } from './index.styles';


function ModalStatus({ title, content, showModal }) {

    const dispatch = useDispatch();

    const handleCancel = () => {
        dispatch(hideStatusModal())
    };

    return (
        <Modal
            title={<StatusTitle>{title}</StatusTitle>}
            visible={showModal}
            footer={null}
            onCancel={handleCancel}
        >
            {content}
        </Modal>
    );
}

export default React.memo(ModalStatus);