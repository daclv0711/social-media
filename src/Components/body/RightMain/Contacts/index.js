import React from 'react';
import ImgUser from 'assets/images/no-img.png'
import { Wrapper, UserName } from './index.styles';
import { Avatar, Badge } from 'antd';
import { FormatDate } from 'utils/FormatDate';

function Contacts({ userOnline }) {

    return (
        <Wrapper>
            <Badge dot offset={[-4, 27]} style={{ backgroundColor: userOnline.online ? 'green' : '#E41E3F' }}>
                <Avatar src={userOnline.avatar || ImgUser} size={32} />
            </Badge>
            <UserName>
                <div>{userOnline.user_name}</div>
                {userOnline.lastOnline && <div className='time-online'>{FormatDate(userOnline.lastOnline)}</div>}
            </UserName>
        </Wrapper>
    );
}

export default Contacts;