import { UploadOutlined } from '@ant-design/icons';
import { Button, Divider, Form, Input, Typography, Upload } from 'antd'
import React from 'react'
import { useDispatch } from 'react-redux';
import { UserAction } from 'redux/actions/user.action';
import { WrapperMain } from './index.styles'

function ChangeInfoUser({ user }) {

    const formItemLayout = {
        labelCol: { span: 2 },
        wrapperCol: { span: 8 },
    };
    const [form] = Form.useForm();
    const dispatch = useDispatch()

    const handleSubmit = (dataUser) => {
        let data = new FormData()
        dataUser.avatar?.length > 0 && data.append('avatar', dataUser.avatar[0].originFileObj)
        data.append('first_name', dataUser.firstName)
        data.append('last_name', dataUser.lastName)
        data.append('email', dataUser.email)
        dispatch(UserAction.updateUserRequest(data))
        form.setFieldsValue({
            avatar: [],
        })
    }
    const normFile = (e) => {
        // console.log('Upload event:', e);
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
    };

    const dummyRequest = ({ file, onSuccess }) => {
        setTimeout(() => {
            onSuccess('ok');
        }, 0);
    }

    return (
        <WrapperMain>
            <Divider orientation="left">
                <Typography.Title level={3}>Thông tin tài khoản</Typography.Title>
            </Divider>
            <Form
                onFinish={handleSubmit}
                name="avatar"
                encType='multipart/form-data'
                form={form}
            >
                <Form.Item
                    label="Họ"
                    {...formItemLayout}
                    name="firstName"
                    initialValue={user.first_name}
                    rules={[{ required: true, message: 'Họ không được để trống' },
                    { pattern: /(^[^0-9!@#$%^&*()_+\-=[\]{};':"\\|,~`.<>/?]{2,9}$)/g, message: 'Họ không hợp lệ' }
                    ]}
                >
                    <Input placeholder="Họ" />
                </Form.Item>
                <Form.Item
                    label="Tên"
                    {...formItemLayout}
                    name="lastName"
                    initialValue={user.last_name}
                    rules={[{ required: true, message: 'Tên không được để trống' },
                    { pattern: /(^[^0-9!@#$%^&*()_+\-=[\]{};':"\\|,~`.<>/?]{2,9}$)/g, message: 'Tên không hợp lệ' }
                    ]}
                >
                    <Input placeholder="Tên" />
                </Form.Item>
                <Form.Item
                    label="Email"
                    {...formItemLayout}
                    name="email"
                    initialValue={user.email}
                    rules={[{ required: true, message: 'Email không được để trống' },
                    { type: 'email', message: 'email không hợp lệ.' }]}
                >
                    <Input placeholder="Email" />
                </Form.Item>
                <Form.Item
                    label="Avatar"
                    {...formItemLayout}
                    name="avatar"
                    valuePropName="fileList"
                    getValueFromEvent={normFile}
                >
                    <Upload
                        name="avatar"
                        listType="picture"
                        maxCount={1}
                        customRequest={dummyRequest}
                    >
                        <Button icon={<UploadOutlined />}>Thay avatar</Button>
                    </Upload>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Thay đổi
                    </Button>
                </Form.Item>
            </Form>
        </WrapperMain >
    )
}

export default ChangeInfoUser
