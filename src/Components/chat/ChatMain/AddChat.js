import { FileImageTwoTone, LikeTwoTone } from '@ant-design/icons'
import { Input } from 'antd'
import React from 'react'
import { FormChat } from './index.styles';

function AddChat() {
    const [form] = FormChat.useForm();

    const handleOnpressEnter = (e) => {
        e.preventDefault();
        form.submit();
    }

    const handleSubmitChat = (data) => {
        console.log(data);
        form.resetFields();
    }

    return (
        <FormChat
            onFinish={handleSubmitChat}
            form={form}
        >
            <FileImageTwoTone />
            <FormChat.Item
                name='chat'
            >
                <Input.TextArea
                    placeholder='Viết bình luận...'
                    autoSize={{ minRows: 1, maxRows: 6 }}
                    bordered={false}
                    onPressEnter={handleOnpressEnter}
                />
            </FormChat.Item>
            <LikeTwoTone />
        </FormChat>
    )
}

export default AddChat
