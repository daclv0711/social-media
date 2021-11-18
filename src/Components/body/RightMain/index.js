import { EllipsisOutlined, SearchOutlined, VideoCameraAddOutlined } from '@ant-design/icons';
import { socket } from 'constants/socket.io';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserOnline } from 'redux/actions/user.action';
import { userOnlineState$ } from 'redux/selectors/user';
import Contacts from './Contacts';
import { TopContact, Wrapper, Title, SelectContact } from './index.styles';

function RightMain(props) {

    const dispatch = useDispatch();

    const userChat = useSelector(userOnlineState$);

    useEffect(() => {
        socket.on('list-user', users => {
            dispatch(getUserOnline(users));
        });

        return () => {
            socket.removeAllListeners("list-user");
        }
    })

    return (
        <Wrapper>
            <TopContact>
                <Title>Người liên hệ</Title>
                <SelectContact><VideoCameraAddOutlined /></SelectContact>
                <SelectContact><SearchOutlined /></SelectContact>
                <SelectContact><EllipsisOutlined /></SelectContact>
            </TopContact>
            {
                userChat.map(user => <Contacts key={user._id} user={user} />)
            }
        </Wrapper>
    );
}

export default RightMain;