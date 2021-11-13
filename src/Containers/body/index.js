import { Col, Row } from 'antd';
import BodyMain from 'Components/body/BodyMain';
import LeftMain from 'Components/body/LeftMain';
import RightMain from 'Components/body/RightMain';
import React from 'react';

const style = {
    position: 'relative',
    top: 'var(--height-header)'
}

function Main(props) {
    return (
        <Row style={style}>
            <Col md={5} xs={0}>
                <LeftMain />
            </Col>
            <Col md={14} xs={24}>
                <BodyMain />
            </Col>
            <Col md={5} xs={0}>
                <RightMain />
            </Col>
        </Row>
    );
}

export default Main;