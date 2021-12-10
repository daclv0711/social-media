import { FileImageFilled, PlusSquareOutlined, VideoCameraFilled } from '@ant-design/icons';
import React from 'react';
import { Block } from '../index.styles';
import { Media, StatusMedia, StatusInfo, CreateStatus } from './index.styles';
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

    return (
        <Block>
            <StatusInfo>
                <CreateStatus
                    onClick={showModal}
                >
                    <PlusSquareOutlined />
                    <div>Tạo bài viết</div>
                    {/* Modal */}

                </CreateStatus>
            </StatusInfo>
            <StatusMedia>
                <Media>
                    <VideoCameraFilled style={{ color: '#F3425F' }} />
                    <div>Video trực tiếp</div>
                </Media>
                <Media>
                    <FileImageFilled style={{ color: '#45BD62' }} />
                    <div>Ảnh/Video</div>
                </Media>
                {/* <Media>
                    <RedditOutlined style={{ color: '#F7B928' }} />
                    <div>Cảm xúc/Hoạt động</div>
                </Media> */}
            </StatusMedia>
        </Block>
    );
}

export default React.memo(AddStatus);