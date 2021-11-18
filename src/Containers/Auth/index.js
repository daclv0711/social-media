import { Row } from 'antd';
import Login from 'Components/auth/Login';
import React from 'react';

function Auth(props) {
    return (
        <Row align='middle' justify='center' style={{ height: '100vh' }}>
            <Login />
        </Row >
    );
}

export default Auth;