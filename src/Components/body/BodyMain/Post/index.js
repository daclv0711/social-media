import { CaretDownOutlined, EllipsisOutlined, EnvironmentOutlined, LikeFilled, LikeOutlined, MessageOutlined } from '@ant-design/icons';
import ImgUser from 'assets/images/no-img.png';
import React from 'react';
import { Block, BlockImgUser, BorderImg, UserImg } from '../index.styles';
import AddComment from './AddComment';
import Comments from './Comments';
import { Action, NameUser, PostContent, PostHashtag, PostOptions, PostReaction, PostStatus, PostTime, PostUserInfo, Sort } from './index.styles';

function Post(props) {
    return (
        <Block>
            <PostUserInfo>
                <BlockImgUser>
                    <UserImg src={ImgUser} alt='user' />
                    <BorderImg />
                </BlockImgUser>
                <NameUser>
                    <div className='user-name'>Nguyễn Văn A</div>
                    <PostTime>
                        <div>1 giờ</div>
                        <div>.</div>
                        <EnvironmentOutlined />
                    </PostTime>
                </NameUser>
                <PostOptions>
                    <EllipsisOutlined />
                </PostOptions>
            </PostUserInfo>
            <PostContent>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. In voluptate ipsa animi corrupti unde, voluptatibus expedita suscipit, itaque, laudantium accusantium aspernatur officia repellendus nihil mollitia soluta distinctio praesentium nulla eos?
            </PostContent>
            <PostHashtag to='/'>
                #abc
            </PostHashtag>
            <PostStatus>
                <div className='thrilling'>
                    <LikeFilled style={{ color: 'var(--blue)', fontSize: 16 }} />
                    <div className='like-count'>12</div>
                </div>
                <div className='comment-count'>99 Bình luận</div>
            </PostStatus>
            <PostReaction>
                <Action>
                    <LikeOutlined />
                    <div>Thích</div>
                </Action>
                <Action>
                    <MessageOutlined />
                    <div>Bình luận</div>
                </Action>
            </PostReaction>
            <Sort>
                <div>Phù hợp nhất</div>
                <CaretDownOutlined />
            </Sort>
            <AddComment />
            <Comments />
            <Comments />
            <Comments />

        </Block>
    );
}

export default Post;