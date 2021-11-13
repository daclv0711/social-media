import { FileImageFilled, RedditOutlined, VideoCameraFilled } from '@ant-design/icons';
import React from 'react';
import ImgUser from 'assets/images/no-img.png'
import { Block, BlockImgUser, UserImg } from '../index.styles';
import { Media, StatusInfo, StatusMedia } from './index.styles';

function AddStatus(props) {
    return (
        <Block>
            <BlockImgUser>
                <UserImg src={ImgUser} alt="user" />
                <StatusInfo>Bạn đang nghĩ gì?</StatusInfo>
            </BlockImgUser>
            <StatusMedia>
                <Media>
                    <VideoCameraFilled style={{ color: '#F3425F' }} />
                    <div>Video trực tiếp</div>
                </Media>
                <Media>
                    <FileImageFilled style={{ color: '#45BD62' }} />
                    <div>Ảnh/Video</div>
                </Media>
                <Media>
                    <RedditOutlined style={{ color: '#F7B928' }} />
                    <div>Cảm xúc/Hoạt động</div>
                </Media>
            </StatusMedia>
        </Block>
    );
}

export default AddStatus;