import { EllipsisOutlined, LikeFilled } from '@ant-design/icons';
import React from 'react';
import { BlockImgUser, BorderImg, UserImg } from '../../index.styles';
import { PostOptions } from '../index.styles';
import { Comment, CommentAction, PostComment } from './index.styles';
import ImgUser from 'assets/images/no-img.png'

function Comments(props) {
    return (
        <PostComment>
            <BlockImgUser>
                <UserImg src={ImgUser} alt='user' />
                <BorderImg />
            </BlockImgUser>
            <div>
                <Comment>
                    <div className='comment-info'>
                        <div className='user-name'>Nguyễn Văn A</div>
                        <div className='comment-content'>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. In voluptate ipsa animi corrupti unde, voluptatibus expedita suscipit, itaque, laudantium accusantium aspernatur
                            officia repellendus nihil mollitia soluta distinctio praesentium nulla eos?
                            <div className='comment-like'>
                                <LikeFilled style={{ color: 'var(--blue)', fontSize: 12 }} />
                                <span>1</span>
                            </div>
                        </div>
                    </div>
                    <PostOptions>
                        <EllipsisOutlined />
                    </PostOptions>
                </Comment>
                <CommentAction>
                    <div>Thích</div>
                    <div>.</div>
                    <div>Phản hồi</div>
                    <div>.</div>
                    <div>23 phút</div>
                </CommentAction>
            </div>
        </PostComment>
    );
}

export default Comments;