import React from 'react';
import ImgUser from 'assets/images/no-img.png'
import { Wrapper, UserImg, UserOnline, UserName } from './index.styles';

function Contacts(props) {
    return (
        <Wrapper>
            <UserOnline>
                <UserImg src={ImgUser} alt='user' />
            </UserOnline>
            <UserName>Name</UserName>
        </Wrapper>
    );
}

export default Contacts;