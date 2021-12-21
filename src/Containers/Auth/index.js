import { Row } from 'antd';
import ForgetPassword from 'Components/auth/ForgetPassword';
import Login from 'Components/auth/Login';
import NotFound from 'Containers/NotFound';
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { loadingState$ } from 'redux/selectors/loading';
import { isLoginState$, otpState$ } from 'redux/selectors/user';

function Auth(props) {

    const loading = useSelector(loadingState$);
    const isLogin = useSelector(isLoginState$);
    const otpSuccess = useSelector(otpState$);

    if (isLogin) {
        return <Navigate to='/' />
    }

    return (
        <Row align='middle' justify='center' style={{ height: '100vh' }}>
            <Routes>
                <Route path="/login" element={<Login loading={loading} />} />
                <Route path="/forgot-password" element={<ForgetPassword loading={loading} otpSuccess={otpSuccess} />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Row >
    );
}

export default Auth;