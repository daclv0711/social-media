import { SearchOutlined } from '@ant-design/icons';
import React from 'react';
import { Input, Wrapper } from './index.styles';
import Logo from 'assets/images/fb-logo.png';
import { Avatar, Col } from 'antd';
import { Link } from 'react-router-dom';
function LeftNav({ isLogin }) {
    return (
        <Wrapper>
            <Link to="/">
                <Avatar src={Logo} size={40} alt='logo' />
            </Link>
            {isLogin &&
                <Col md={24} xs={0}>
                    <Input>
                        <label htmlFor="search"><SearchOutlined /></label>
                        <input placeholder="Tìm kiếm..." name='search' id='search' />
                    </Input>
                </Col>
            }
        </Wrapper>
    );
}

export default LeftNav;