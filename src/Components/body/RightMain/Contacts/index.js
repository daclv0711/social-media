import React from 'react';
import ImgUser from 'assets/images/no-img.png'
import { Wrapper, UserName } from './index.styles';
import { Avatar, Badge } from 'antd';

function Contacts(props) {
    return (
        <Wrapper>
            <Badge dot offset={[-4, 27]} style={{ backgroundColor: 'green' }}>
                <Avatar src={ImgUser} size={32} />
            </Badge>
            <UserName>Name</UserName>
        </Wrapper>
    );
}

export default Contacts;