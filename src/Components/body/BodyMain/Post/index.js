import { EnvironmentOutlined, LikeFilled, LikeOutlined, MessageOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';
import ImgUser from 'assets/images/no-img.png';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StatusAction } from 'redux/actions/status.action';
import { infoUserState$ } from 'redux/selectors/user';
import { FormatDate, FormatFullDate } from 'utils/FormatDate';
import { Block, BlockImgUser, BorderImg, UserImg } from '../index.styles';
// import AddComment from './AddComment';
// import Comments from './Comments';
import { Action, NameUser, PostAddComment, PostContent, PostHashtag, PostReaction, PostStatus, PostTime, PostUserInfo } from './index.styles';
import PostEdit from './PostEdit';

function Post({ status }) {
    console.log('post', status.createdAt)

    const dispatch = useDispatch();

    const user = useSelector(infoUserState$)

    const hanldeClickLike = (id) => {
        dispatch(StatusAction.likeStatusRequest({ status_id: id }))
    }
    return (
        <Block>
            <PostUserInfo>
                <BlockImgUser>
                    <UserImg src={status.avatar || ImgUser} alt='user' />
                    <BorderImg />
                </BlockImgUser>
                <NameUser>
                    <div className='user-name'>{`${status.lastName} ${status.firstName}`}</div>
                    <PostTime>
                        <Tooltip title={FormatFullDate(status.createdAt)} placement="bottom" style={{ borderRadius: 16 }}>
                            <div>{FormatDate(status.createdAt)}</div>
                        </Tooltip>
                        <div>.</div>
                        <EnvironmentOutlined />
                    </PostTime>
                </NameUser>
                {/* Post edit */}
                <PostEdit status={status} />

            </PostUserInfo>
            <PostContent>
                {status.status}
            </PostContent>
            <PostHashtag to='/'>
                #abc
            </PostHashtag>
            <PostStatus>
                {
                    status.likes.length > 0 ?
                        <div className='thrilling'>
                            <LikeFilled style={{ color: 'var(--blue)', fontSize: 16 }} />
                            <div className='like-count'>{status.likes.length}</div>
                        </div>
                        : <div></div>
                }

                <div className='comment-count'>0 Bình luận</div>
            </PostStatus>
            <PostReaction>
                <Action onClick={() => hanldeClickLike(status._id)} colors={status.likes.includes(user._id)}>
                    <LikeOutlined />
                    <div>Thích</div>
                </Action>
                <Action>
                    <MessageOutlined />
                    <div>Bình luận</div>
                </Action>
            </PostReaction>
            {/* <Sort>
                <div>Phù hợp nhất</div>
                <CaretDownOutlined />
            </Sort>
            <AddComment />
            <Comments />
            <Comments />
            <Comments /> */}
            <PostAddComment>Viết bình luận...</PostAddComment>
        </Block>
    );
}

export default React.memo(Post);