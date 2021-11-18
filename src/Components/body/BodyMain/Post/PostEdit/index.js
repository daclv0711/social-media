import React from 'react';
import { Menu, Dropdown, Modal, Button, Tooltip, Divider } from 'antd';
import { PostOptions } from '../index.styles.js'
import { EllipsisOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { showStatusModal, StatusAction, statusModalContent, statusModalTitle } from 'redux/actions/status.action.js';
import FormStatus from '../../FormStatus/index.js';
import { FormatDate, FormatFullDate } from 'utils/FormatDate.js';
import { ListOldStatus, TitleModal } from './index.styles.js';
import { infoUserState$ } from 'redux/selectors/user';

function PostEdit({ status }) {

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

    const menu = (
        <Menu>
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

        </Menu>
    )
    return (
        <Dropdown overlay={menu} trigger={['click']} placement="bottomRight">
            <PostOptions>
                <EllipsisOutlined />
            </PostOptions>

        </Dropdown>
    );
}

export default React.memo(PostEdit);