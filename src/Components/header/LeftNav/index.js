import { SearchOutlined } from '@ant-design/icons';
import React from 'react';
import { Input, Wrapper } from './index.styles';
import Logo from 'assets/images/fb-logo.png';
import { Avatar } from 'antd';
import { Link } from 'react-router-dom';
function LeftNav() {
    return (
        <Wrapper>
            <Link to="/">
                <Avatar src={Logo} size={40} alt='logo' />
            </Link>
            <Input>
                <label htmlFor="search"><SearchOutlined /></label>
                <input placeholder="Search" name='search' id='search' />
            </Input>
        </Wrapper>
    );
}

export default LeftNav;