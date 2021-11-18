import { FileImageFilled, RedditOutlined, VideoCameraFilled } from '@ant-design/icons';
import React from 'react';
import ImgUser from 'assets/images/no-img.png'
import { Block, BlockImgUser, UserImg } from '../index.styles';
import { Media, StatusMedia, StatusInfo } from './index.styles';
import { useDispatch } from 'react-redux';
import { showStatusModal, statusModalContent, statusModalTitle } from 'redux/actions/status.action';
import FormStatus from '../FormStatus';


function AddStatus(props) {
    const dispatch = useDispatch();

    const showModal = () => {
        dispatch(showStatusModal())
        dispatch(statusModalTitle('Tạo bài viết mới'))
        dispatch(statusModalContent(<FormStatus />))
    };

    console.log(2)
    return (
        <Block>
            <BlockImgUser>
                <UserImg src={ImgUser} alt="user" />
                <StatusInfo
                    onClick={showModal}
                >Bạn đang nghĩ gì?</StatusInfo>
                {/* Modal */}

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

export default React.memo(AddStatus);