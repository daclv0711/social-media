import React from 'react';
import { Row, Col } from 'antd';
import LeftNav from 'Components/header/LeftNav';
import MainNav from 'Components/header/MainNav';
import EndNav from 'Components/header/EndNav';
import { useSelector } from 'react-redux';
import { isLoginState$ } from 'redux/selectors/user';
const style = {
    height: 'var(--height-header)',
    padding: '0 12px',
    borderBottom: '1px solid #e8e8e8',
    boxShadow: '0 1px 1px rgba(0,0,0,.15)',
    backgroundColor: 'var(--white)',
    position: 'fixed',
    zIndex: '999',
    width: '100%',
    top: 0,
}


function Headers({ user }) {
    const isLogin = useSelector(isLoginState$);
    return (
        <Row align='middle' wrap={true} justify='space-between' style={style}>
            <Col md={7} xs={4} flex='flex'>
                <LeftNav isLogin={isLogin} />
            </Col>
            {isLogin && <Col md={10} xs={16}>
                <MainNav />
            </Col>
            }
            <Col md={7} xs={4} style={{ textAlign: 'end' }}>
                <EndNav user={user} isLogin={isLogin} />
            </Col>
        </Row>
    );
}

export default Headers;
