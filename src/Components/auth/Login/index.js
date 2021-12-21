import React, { useEffect } from 'react';
import { Button, Input } from 'antd';
import { FormLogin } from './index.styles';
import { useDispatch, useSelector } from 'react-redux';
import { UserAction } from 'redux/actions/user.action';
import { Error } from '../index.styles';
import { passwordWrongState$ } from 'redux/selectors/user';
import { Link } from 'react-router-dom';
import { WrapperAuth } from '../index.styles';
import Register from '../Register';
// import ReCAPTCHA from 'react-google-recaptcha';
// import axios from 'axios';
// import { baseUrl } from 'constants/api';

function Login({ loading }) {

    // const [keyGoogleCaptcha, setKeyGoogleCaptcha] = useState(null);

    // useEffect(() => {
    //     let isSubscribe = true
    //     axios
    //         .get(`${baseUrl}/captcha`)
    //         .then((res) => {
    //             if (isSubscribe && res.status === 200)
    //                 setKeyGoogleCaptcha(res.data.KEY_GOOGLE_CAPTCHA)
    //         });
    //     return () => {
    //         isSubscribe = false
    //     }
    // }, []);

    useEffect(() => {
        document.title = 'Đăng nhập/Đăng ký';
    }, []);

    const dispatch = useDispatch();
    const passWrong = useSelector(passwordWrongState$);

    const handleSubmitLogin = (data) => {
        dispatch(UserAction.postSignInRequest(data));
    }

    return (

        <WrapperAuth>
            <h1>Đăng Nhập</h1>
            <FormLogin onFinish={handleSubmitLogin}>
                <FormLogin.Item
                    name='email'
                    rules={[{ required: true, message: 'Không để trống email' }]}
                >
                    <Input
                        size='large'
                        placeholder="Email"
                    />
                </FormLogin.Item>
                <FormLogin.Item
                    name='password'
                    rules={[{ required: true, message: 'Không để trống password' }]}
                >
                    <Input.Password size='large' placeholder="Mật khẩu" />
                </FormLogin.Item>
                <Error>{passWrong}</Error>
                {/* <FormLogin.Item
                    name='captcha'
                    rules={[{ required: true, message: 'Không để trống captcha' }]}
                >
                    {
                        keyGoogleCaptcha &&
                        <ReCAPTCHA sitekey={keyGoogleCaptcha} hl='vi' />
                    }
                </FormLogin.Item> */}
                <Button type="primary" htmlType="submit" block size='large' loading={loading}>
                    Đăng nhập
                </Button>
                <Link to='/account/forgot-password'>
                    <p className="login-form-forgot">
                        Quên mật khẩu?
                    </p>
                </Link>
                <hr />
            </FormLogin>
            <Register loading={loading} />
        </WrapperAuth>
    );
}

export default Login;