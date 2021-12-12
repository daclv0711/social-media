import { Button, Divider, Form, Input, message, Typography } from 'antd'
import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { UserAction } from 'redux/actions/user.action';
import { infoChangePasswordState$ } from 'redux/selectors/user';
import { WrapperChangePassword } from './index.styles'

function ChangePassword() {
    const [form] = Form.useForm()

    const formItemLayout = {
        labelCol: { span: 6 },
        wrapperCol: { span: 8 },
    };

    const infoChangePassword = useSelector(infoChangePasswordState$)

    const dispatch = useDispatch()

    useEffect(() => {
        if (infoChangePassword === 'Thay đổi mật khẩu thành công') {
            form.resetFields()
            message.success(infoChangePassword);
        }
    }, [infoChangePassword, form, dispatch])

    const handleSubmit = dataPassword => {
        dispatch(UserAction.changePasswordRequest(dataPassword))
    }
    return (
        <WrapperChangePassword>
            <Divider orientation="left">
                <Typography.Title level={3}>Đổi mật khẩu</Typography.Title>
            </Divider>
            <>
                <Form
                    name='changePassword'
                    autoComplete='off'
                    onFinish={handleSubmit}
                    form={form}
                >
                    <Form.Item
                        label="Mật khẩu hiện tại"
                        {...formItemLayout}
                        name="password"
                        rules={[{ required: true, message: 'Vui lòng nhập mật khẩu.' }, {
                            pattern: /^(?=.*?[a-z])(?=.*?[0-9]).{8,32}$/g,
                            message: 'Mật khẩu 8-32 ký tự, bao gồm số và chữ.'
                        }]}
                    >
                        <Input.Password placeholder="Mật khẩu cũ" />
                    </Form.Item>
                    <Form.Item
                        label="Mật khẩu mới"
                        {...formItemLayout}
                        name="newPassword"
                        rules={[{ required: true, message: 'Vui lòng nhập mật khẩu mới.' }, {
                            pattern: /^(?=.*?[a-z])(?=.*?[0-9]).{8,32}$/g,
                            message: 'Mật khẩu 8-32 ký tự, bao gồm số và chữ.'
                        }, {
                            validator: (_, value, cb) => {
                                if (value && value === form.getFieldValue('password')) {
                                    return cb('Mật khẩu mới không được trùng với mật khẩu cũ.')
                                }
                                return cb()
                            }
                        }]}
                    >
                        <Input.Password placeholder="Mật khẩu mới" />
                    </Form.Item>
                    <Form.Item
                        label="Nhập lại mật khẩu mới"
                        {...formItemLayout}
                        name="reNewPassword"
                        rules={[{ required: true, message: 'Vui lòng nhập lại mật khẩu mới.' }, {
                            validator: (_, value, cb) => {
                                if (value && value !== form.getFieldValue('newPassword')) {
                                    return cb('Mật khẩu không khớp')
                                }
                                return cb()
                            },
                        }]}
                    >
                        <Input.Password placeholder="Nhập lại mật khẩu mới" />
                    </Form.Item>
                    <Typography.Text italic type="danger" style={{ display: 'block', marginBottom: 8 }} >
                        {infoChangePassword !== 'Thay đổi mật khẩu thành công' ? infoChangePassword : ''}
                    </Typography.Text>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Đổi mật khẩu
                        </Button>
                    </Form.Item>
                </Form>
            </>
        </WrapperChangePassword>
    )
}

export default memo(ChangePassword)
