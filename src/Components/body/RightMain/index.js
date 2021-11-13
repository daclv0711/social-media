import { EllipsisOutlined, SearchOutlined, VideoCameraAddOutlined } from '@ant-design/icons';
import React from 'react';
import Contacts from './Contacts';
import { TopContact, Wrapper, Title, SelectContact } from './index.styles';

function RightMain(props) {
    return (
        <Wrapper>
            <TopContact>
                <Title>Người liên hệ</Title>
                <SelectContact><VideoCameraAddOutlined /></SelectContact>
                <SelectContact><SearchOutlined /></SelectContact>
                <SelectContact><EllipsisOutlined /></SelectContact>
            </TopContact>
            <Contacts />
            <Contacts />
            <Contacts />
            <Contacts />
            <Contacts />
            <Contacts />
            <Contacts />
            <Contacts />
            <Contacts />
            <Contacts />
            <Contacts />
            <Contacts />
            <Contacts />
            <Contacts />
            <Contacts />
            <Contacts />
            <Contacts />
            <Contacts />
            <Contacts />
            <Contacts />
            <Contacts />
            <Contacts />
            <Contacts />
            <Contacts />
            <Contacts />
            <Contacts />
            <Contacts />
            <Contacts />
            <Contacts />
            <Contacts />
            <Contacts />
            <Contacts />
            <Contacts />
            <Contacts />
            <Contacts />
            <Contacts />
            <Contacts />
        </Wrapper>
    );
}

export default RightMain;