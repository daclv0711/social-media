import React, { useEffect, useRef } from 'react';
import { BlockImgUser, BorderImg, UserImg } from '../../index.styles';
import { FormAddComment } from './index.styles';
import ImgUser from 'assets/images/no-img.png'
import { Input } from 'antd';
import { CommentActions } from 'redux/actions/comment.action';
import { useDispatch } from 'react-redux';
import { socket } from 'constants/socket.io';

function AddComment({ statusId }) {
    const [form] = FormAddComment.useForm();
    const dispatch = useDispatch();

    const inputRef = useRef(null);
    // useImperativeHandle(ref, () => ({
    //     focusInput() {
    //         inputComment.current.focus();
    //     }
    // }));
    useEffect(() => {
        inputRef.current.focus();
    }, [])
    const handleSubmitComment = (data) => {
        dispatch(CommentActions.createCommentRequest({
            _id: statusId,
            data: {
                ...data,
                statusId,
            }
        }));
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
                <UserImg src={ImgUser} alt='user' />
                <BorderImg />
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