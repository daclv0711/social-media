import { Button, Divider, Menu, Modal, Tooltip } from 'antd';
import FormStatus from 'Components/body/BodyMain/FormStatus';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showStatusModal, StatusAction, statusModalContent, statusModalTitle } from 'redux/actions/status.action';
import { infoUserState$ } from 'redux/selectors/user';
import { FormatDate, FormatFullDate } from 'utils/FormatDate';
import { ListOldStatus, TitleModal } from './index.styles';

function MenuOptionStatus({status}) {
    
    const dispatch = useDispatch();
    const [visible, setVisible] = React.useState(false);
    const user = useSelector(infoUserState$)

    const handleUpdateStatus = (data) => {
        dispatch(statusModalTitle('Cập nhật bài viết'))
        dispatch(showStatusModal());
        dispatch(statusModalContent(<FormStatus data={data} />))
    }

    const handleClickDeletePost = (e) => {
        dispatch(StatusAction.deleteStatusRequest(e));
    }

    const handleCancel = () => {
        setVisible(false);
    }

    const showModal = () => {
        setVisible(true);
    }

    return (
        <>
            {
                user._id === status.user_id &&
                <>
                    <Menu.Item key="0" onClick={() => handleUpdateStatus(status)}>
                        Sửa
                    </Menu.Item>
                    <Menu.Item key="1" onClick={() => handleClickDeletePost(status._id)}>
                        Xóa
                    </Menu.Item>
                </>
            }
            {status.old_status && status.old_status.length > 1 &&
                <Menu.Item key="2" onClick={showModal}>Lịch sử chỉnh sửa</Menu.Item>
            }
            <Modal
                visible={visible}
                title={<TitleModal>Lịch sử chỉnh sửa</TitleModal>}
                onCancel={handleCancel}
                footer={[
                    <Button type='primary' key="back" onClick={handleCancel}>
                        Đóng
                    </Button>,
                ]}
            >
                {
                    status.old_status.map(content => {
                        return (
                            <ListOldStatus key={content._id}>
                                <Divider>
                                    <Tooltip title={FormatFullDate(content.update)} placement='bottom' >
                                        <div className='date'>{FormatDate(content.update)}</div>
                                    </Tooltip>
                                </Divider>
                                <p className='content'>{content.status}</p>
                            </ListOldStatus>
                        )
                    })
                }
            </Modal>
        </>
    )
}

export default React.memo(MenuOptionStatus);
