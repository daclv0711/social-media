import React from 'react';
import { Row, Col } from 'antd';
import LeftNav from 'Components/header/LeftNav';
import MainNav from 'Components/header/MainNav';
import EndNav from 'Components/header/EndNav';
const style = {
    height: 'var(--height-header)',
    padding: '0 12px',
    borderBottom: '1px solid #e8e8e8',
    boxShadow: '0 1px 1px rgba(0,0,0,.15)',
    backgroundColor: 'var(--white)',
    position: 'fixed',
    zIndex: '100',
    width: '100%',
}


function Headers() {
    return (
        <Row align={'middle'} wrap={true} justify={'space-around'} style={style}>
            <Col md={6} xs={0} flex='flex'>
                <LeftNav />
            </Col>
            <Col md={12} xs={24}>
                <MainNav />
            </Col>
            <Col md={6} xs={0}>
                <EndNav />
            </Col>
        </Row>
    );
}

export default Headers;
