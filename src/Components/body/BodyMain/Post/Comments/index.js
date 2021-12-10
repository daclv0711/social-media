import { EllipsisOutlined, LikeFilled } from '@ant-design/icons';
import React from 'react';
import { BlockImgUser, BorderImg, UserImg } from '../../index.styles';
import { Comment, CommentAction, PostComment } from './index.styles';
import ImgUser from 'assets/images/no-img.png'
import { PostIconOptions } from '../PostOptionStatus/index.styles';
import { FormatDate } from 'utils/FormatDate';
import { Dropdown, Menu } from 'antd';
import MenuOptionComment from './MenuOptionComment';

function Comments({ comment }) {

    const menu = (
        <Menu>
            <MenuOptionComment comment={comment} />
        </Menu>
    )

    return (
        <PostComment>
            <BlockImgUser>
                <UserImg src={ImgUser} alt='user' />
                <BorderImg />
            </BlockImgUser>
            <div>
                <Comment>
                    <div className='comment-info'>
                        <div className='user-name'>{comment.userName}</div>
                        <div className='comment-content'>
                            {comment.comment}
                            <div className='comment-like'>
                                <LikeFilled style={{ color: 'var(--blue)', fontSize: 12 }} />
                                <span>1</span>
                            </div>
                        </div>
                    </div>
                    <Dropdown overlay={menu} trigger={['click']} placement="bottomRight">
                        <PostIconOptions>
                            <EllipsisOutlined />
                        </PostIconOptions>
                    </Dropdown>
                </Comment>
                <CommentAction>
                    <div>Thích</div>
                    <div>.</div>
                    <div>Phản hồi</div>
                    <div>.</div>
                    <div>{FormatDate(comment.updatedAt)}</div>
                </CommentAction>
            </div>
        </PostComment>
    );
}

export default React.memo(Comments);