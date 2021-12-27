import { EllipsisOutlined, SearchOutlined, VideoCameraAddOutlined } from '@ant-design/icons';
import React from 'react';
import { useSelector } from 'react-redux';
import { userOnlineState$ } from 'redux/selectors/user';
import Contacts from './Contacts';
import { TopContact, Wrapper, Title, SelectContact } from './index.styles';

function RightMain(props) {
    const userChat = useSelector(userOnlineState$);
    return (
        <Wrapper>
            <TopContact>
                <Title>Người liên hệ</Title>
                <SelectContact><VideoCameraAddOutlined /></SelectContact>
                <SelectContact><SearchOutlined /></SelectContact>
                <SelectContact><EllipsisOutlined /></SelectContact>
            </TopContact>
            {
                userChat.map(user => <Contacts key={user._id} userOnline={user} />)
            }
        </Wrapper>
    );
}

export default React.memo(RightMain);