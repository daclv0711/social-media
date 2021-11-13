import { BellFilled, CaretDownOutlined, CommentOutlined, TableOutlined } from '@ant-design/icons';
import React from 'react';
import { EndHeader, User, Wrapper } from './index.styles';
import ImgUser from 'assets/images/no-img.png';
function EndNav(props) {
    return (
        <Wrapper>
            <User>
                <img src={ImgUser} alt='user' />
                <div className='user-name'>Name</div>
            </User>
            <EndHeader><TableOutlined /></EndHeader>
            <EndHeader><CommentOutlined /></EndHeader>
            <EndHeader><BellFilled /></EndHeader>
            <EndHeader><CaretDownOutlined /></EndHeader>
        </Wrapper>
    );
}

export default EndNav;