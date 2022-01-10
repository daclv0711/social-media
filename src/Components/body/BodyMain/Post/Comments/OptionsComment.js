import { Button, Divider, Menu, Modal, Tooltip } from 'antd';
import React from 'react';
import { useDispatch } from 'react-redux';
import { CommentActions } from 'redux/actions/comment.action';
import { FormatDate, FormatFullDate } from 'utils/FormatDate';
import { ListOldStatus, TitleModal } from '../MenuStatus/index.styles';
import { MenuOptionComment } from './index.styles';

function OptionsComment(comment, userId) {

    const dispatch = useDispatch();
    const [visible, setVisible] = React.useState(false);

    const handleClickDeletePost = (e) => {
        dispatch(CommentActions.deleteCommentRequest({
            _id: comment._id,
            statusId: comment.status_id
        }));
    }

    const handleClickGetContentComment = (e) => {
        dispatch(CommentActions.getContentComment(e));
    }

    const handleCancel = () => {
        setVisible(false);
    }

    const showModal = () => {
        setVisible(true);
    }

    return (
        <MenuOptionComment>
            {
                userId === comment.user_id &&
                <>
                    <Menu.Item key="0" onClick={() => handleClickGetContentComment(comment)}>
                        Sửa
                    </Menu.Item>
                    <Menu.Item key="1" onClick={() => handleClickDeletePost(comment)}>
                        Xóa
                    </Menu.Item>
                </>
            }
            {comment.old_status && comment.old_status.length > 1 &&
                <Menu.Item key="2" onClick={showModal}>Lịch sử chỉnh sửa</Menu.Item>
            }
            <Menu.Item key="3">Tùy chọn</Menu.Item>

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
                    comment.old_comment.map(content => {
                        return (
                            <ListOldStatus key={content._id}>
                                <Divider>
                                    <Tooltip title={FormatFullDate(content.update)} placement='bottom' >
                                        <div className='date'>{FormatDate(content.update)}</div>
                                    </Tooltip>
                                </Divider>
                                <p className='content'>{content.commnet}</p>
                            </ListOldStatus>
                        )
                    })
                }
            </Modal>
        </MenuOptionComment>
    )
}

export default OptionsComment;
