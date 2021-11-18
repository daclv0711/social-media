import React from 'react';
import { Button } from 'antd';
import { Wrapper, FormLogin } from './index.styles';
import Register from '../Register';
import { useForm } from 'react-hook-form';
import { InputForm } from 'utils/InputForm';
import { useDispatch, useSelector } from 'react-redux';
import { UserAction } from 'redux/actions/user.action';
import { Email, Error, Password } from '../Register/index.styles';
import { passwordWrongState$ } from 'redux/selectors/user';
import { loadingState$ } from 'redux/selectors/loading';

function Login(props) {
    const { handleSubmit, control, formState: { errors } } = useForm();
    const passWrong = useSelector(passwordWrongState$)
    const dispatch = useDispatch()
    const loading = useSelector(loadingState$)
    const handleSubmitLogin = (data) => {
        dispatch(UserAction.postSignInRequest(data))
    }

    return (
        <Wrapper>
            <h1>Đăng Nhập</h1>
            <FormLogin onSubmit={handleSubmit(handleSubmitLogin)}>
                <Email>
                    <InputForm
                        placeholder="Email"
                        name='email'
                        control={control}
                        rules={{ required: 'Không để trống email' }}
                    />
                    <Error>{errors.email?.message}</Error>
                </Email>
                <Password>
                    <InputForm
                        placeholder="Mật khẩu"
                        name='password'
                        type="password"
                        control={control}
                        rules={{ required: 'Không để trống password' }}
                    />
                    <Error>{errors.password?.message}</Error>
                </Password>
                <Error>{passWrong}</Error>
                <Button type="primary" htmlType="submit" block size='large' loading={loading}>
                    Đăng nhập
                </Button>
                <p className="login-form-forgot">
                    Quên mật khẩu?
                </p>
                <hr />
            </FormLogin>
            <Register loading={loading} />
        </Wrapper>
    );
}

export default Login;