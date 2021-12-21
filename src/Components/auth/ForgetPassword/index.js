import { Button, Divider, Form, Input, Typography } from 'antd'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { UserAction } from 'redux/actions/user.action'
import { otpErrorState$ } from 'redux/selectors/user'
import ChangePasswordForgot from '../ChangePasswordForgot'
import { Error, WrapperAuth } from '../index.styles'
import { WrapperForgetPassword } from './index.styles'

function ForgetPassword({ loading, otpSuccess }) {

    const [email, setEmail] = useState('')
    const dispatch = useDispatch()

    const messOtpError = useSelector(otpErrorState$)
    useEffect(() => {
        dispatch(UserAction.postOtpSuccess(false))
        dispatch(UserAction.postOtpFailure(''))
        document.title = 'Quên mật khẩu'
    }, [dispatch])
    const onFinish = values => {
        dispatch(UserAction.postOtpRequest(values))
        setEmail(values.email)
    }
    return (
        <WrapperAuth>
            <WrapperForgetPassword>
                {
                    otpSuccess ?
                        <ChangePasswordForgot email={email} />
                        :
                        <>
                            <Typography.Title level={3}>Nhập email của bạn</Typography.Title>
                            <Divider />
                            <Form
                                onFinish={onFinish}
                            >
                                <Form.Item
                                    name="email"
                                    rules={[{ required: true, message: 'Vui lòng nhập email!' }, {
                                        type: 'email', message: 'Email không hợp lệ!'
                                    }]}
                                >
                                    <Input placeholder="Nhập email của bạn" />
                                </Form.Item>
                                <Error>{messOtpError}</Error>
                                <div className='buttom-select'>
                                    <Link to='/account/login'>
                                        <Button >Hủy bỏ</Button>
                                    </Link>
                                    <Button loading={loading} type="primary" htmlType="submit">Tìm</Button>
                                </div>
                            </Form>
                        </>
                }
            </WrapperForgetPassword>
        </WrapperAuth>
    )
}

export default React.memo(ForgetPassword)
