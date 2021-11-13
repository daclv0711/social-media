import { SearchOutlined } from '@ant-design/icons';
import React from 'react';
import { Input, Wrapper } from './index.styles';
import Logo from 'assets/images/fb-logo.png';

function LeftNav() {
    return (
        <Wrapper>
            <img
                src={Logo}
                alt="logo"
                width={40}
            />
            <Input>
                <label htmlFor="search"><SearchOutlined /></label>
                <input placeholder="Search" name='search' id='search' />
            </Input>
        </Wrapper>
    );
}

export default LeftNav;