import React, { useEffect, useRef } from 'react';
import { BlockImgUser } from '../../index.styles';
import { FormAddComment } from './index.styles';
import ImgUser from 'assets/images/no-img.png'
import { Input, Image } from 'antd';
import { CommentActions } from 'redux/actions/comment.action';
import { useDispatch, useSelector } from 'react-redux';
import { socket } from 'constants/socket.io';
import { contentCommentState$ } from 'redux/selectors/comment';

function AddComment({ statusId, userImg }) {
    const [form] = FormAddComment.useForm();
    const dispatch = useDispatch();
    const inputRef = useRef(null);

    const contentComment = useSelector(contentCommentState$)
    useEffect(() => {
        inputRef.current.focus();
        dispatch(CommentActions.getContentComment());
    }, [dispatch])

    useEffect(() => {
        if (contentComment?.status_id === statusId) {
            inputRef.current.focus();
            form.setFieldsValue({
                comment: contentComment?.comment
            });
        }
        return () => {
        }
    }, [contentComment, form, statusId])
    // useImperativeHandle(ref, () => ({
    //     focusInput() {
    //         inputComment.current.focus();
    //     }
    // }));

    const handleSubmitComment = (data) => {
        if (contentComment && contentComment.status_id === statusId) {
            dispatch(CommentActions.updateCommentRequest({
                comment: data.comment,
                statusId: statusId,
                commentId: contentComment._id
            }));
            dispatch(CommentActions.getContentComment());
        } else {
            dispatch(CommentActions.createCommentRequest({
                _id: statusId,
                data: {
                    ...data,
                    statusId,
                }
            }));
        }
        form.resetFields();
        socket.emit('blur-comment', statusId);
    }

    const handleOnpressEnter = (e) => {
        e.preventDefault();
        form.submit();
    }
    const handleFocus = () => {
        socket.emit('focus-comment', statusId);
    }
    const handleBlur = () => {
        socket.emit('blur-comment', statusId);
    }
    return (
        <FormAddComment
            onFinish={handleSubmitComment}
            autoComplete="off"
            form={form}
        >
            <BlockImgUser>
                <Image src={userImg || ImgUser} alt='user' />
            </BlockImgUser>
            <FormAddComment.Item
                name='comment'
                rules={[{ required: true, message: '' }]}
            >
                <Input.TextArea
                    ref={inputRef}
                    placeholder='Viết bình luận...'
                    rules={{ required: true }}
                    autoSize={true}
                    bordered={false}
                    onPressEnter={handleOnpressEnter}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                />
            </FormAddComment.Item>
        </FormAddComment>
    );
}

export default React.memo(AddComment);