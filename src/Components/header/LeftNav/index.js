import { SearchOutlined } from '@ant-design/icons';
import React from 'react';
import { Input, Wrapper } from './index.styles';
import Logo from 'assets/images/fb-logo.png';
import { Avatar } from 'antd';
function LeftNav() {
    return (
        <Wrapper>
            <Avatar src={Logo} size={40} alt='logo' />
            <Input>
                <label htmlFor="search"><SearchOutlined /></label>
                <input placeholder="Search" name='search' id='search' />
            </Input>
        </Wrapper>
    );
}

export default LeftNav;