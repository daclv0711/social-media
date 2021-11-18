import React from 'react';
import { BlockImgUser, BorderImg, UserImg } from '../../index.styles';
import { Wrapper } from './index.styles';
import ImgUser from 'assets/images/no-img.png'
import { InputForm } from 'utils/InputForm';
import { useForm } from 'react-hook-form';

function AddComment(props) {

    const { handleSubmit, control } = useForm();

    const handleSubmitComment = (data) => {
        console.log(data);
    }

    return (
        <Wrapper onSubmit={handleSubmit(handleSubmitComment)} >
            <BlockImgUser>
                <UserImg src={ImgUser} alt='user' />
                <BorderImg />
            </BlockImgUser>
            <InputForm
                type='textarea'
                placeholder='Viết bình luận...'
                name='comment'
                rules={{ required: true }}
                control={control}
                autoSize={true}
            />
        </Wrapper>
    );
}

export default React.memo(AddComment);