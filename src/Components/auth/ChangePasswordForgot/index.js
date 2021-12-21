import { Button, Form, Input, message, Typography } from 'antd'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { UserAction } from 'redux/actions/user.action'
import { resetPasswordErrorState$, resetPasswordState$ } from 'redux/selectors/user'
import { Error } from '../index.styles'

function ChangePasswordForgot({ email }) {

    const dispatch = useDispatch();

    const messResetPasswordError = useSelector(resetPasswordErrorState$)
    const resetPassword = useSelector(resetPasswordState$)

    useEffect(() => {
        dispatch(UserAction.postResetPasswordSuccess(false))
        dispatch(UserAction.postResetPasswordFailure(''))
        return () => {
        }
    }, [dispatch])

    useEffect(() => {
        if (resetPassword) {
            message.success('Thay đổi mật khẩu thành công.');
            window.location.href = '/account/login'
        }
    }, [resetPassword, dispatch])

    const onFinish = values => {
        dispatch(UserAction.postResetPasswordRequest({
            password: values.password,
            otp: values.otp,
            email
        }))
    }

    return (
        <>
            <Typography.Title level={3}>Đổi mật khẩu</Typography.Title>
            <Form
                layout='vertical'
                onFinish={onFinish}
            >
                <Form.Item
                    label="Mật khẩu mới"
                    name="password"
                    rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }, {
                        pattern: /^(?=.*?[a-z])(?=.*?[0-9]).{8,32}$/g,
                        message: 'Mật khẩu 8-32 ký tự, bao gồm số và chữ.'
                    }]}
                >
                    <Input.Password placeholder="Nhập mật khẩu mới" />
                </Form.Item>
                <Form.Item
                    label="Nhập lại mật khẩu"
                    name="confirm"
                    dependencies={['password']}
                    rules={[({ getFieldValue }) => ({
                        validator(rule, value) {
                            if (!value || getFieldValue('password') === value) {
                                return Promise.resolve()
                            }
                            return Promise.reject('Mật khẩu không khớp!')
                        }
                    })]}
                >
                    <Input.Password placeholder="Nhập lại mật khẩu mới" />
                </Form.Item>
                <Form.Item
                    name="otp"
                    label="Mã xác thực"
                    rules={[{ required: true, message: 'Vui lòng nhập mã xác thực!' }, {
                        pattern: /^[0-9]{6}$/g,
                        message: 'Mã xác thực không hợp lệ.'
                    }]}
                >
                    <Input placeholder="Nhập OTP" />
                </Form.Item>
                <Error>{messResetPasswordError}</Error>
                <Button htmlType='submit' type="primary">Đổi mật khẩu</Button>
            </Form>
        </>
    )
}

export default React.memo(ChangePasswordForgot)
