import React from 'react';
import ImgUser from 'assets/images/no-img.png'
import { Wrapper, UserName } from './index.styles';
import { Avatar, Badge } from 'antd';

function Contacts({ user }) {
    return (
        <Wrapper>
            <Badge dot offset={[-4, 27]} style={{ backgroundColor: 'green' }}>
                <Avatar src={user.avatar || ImgUser} size={32} />
            </Badge>
            <UserName>{`${user.last_name} ${user.first_name}`}</UserName>
        </Wrapper>
    );
}

export default Contacts;