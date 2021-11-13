import React from 'react';
import { BlockImgUser, BorderImg, UserImg } from '../../index.styles';
import { Wrapper, Input } from './index.styles';
import ImgUser from 'assets/images/no-img.png'

function AddComment(props) {
    return (
        <Wrapper>
            <BlockImgUser>
                <UserImg src={ImgUser} alt='user' />
                <BorderImg />
            </BlockImgUser>
            <Input type='text' placeholder='Viết bình luận...' />
        </Wrapper>
    );
}

export default AddComment;