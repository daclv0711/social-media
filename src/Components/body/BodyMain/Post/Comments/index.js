import { EllipsisOutlined, LikeFilled } from '@ant-design/icons';
import React from 'react';
import { BlockImgUser } from '../../index.styles';
import { Comment, CommentAction, WrapperComment } from './index.styles';
import ImgUser from 'assets/images/no-img.png'
import { PostIconOptions } from '../MenuStatus/index.styles';
import { FormatDate } from 'utils/FormatDate';
import { Dropdown, Image } from 'antd';
import { useDispatch } from 'react-redux';
import { CommentActions } from 'redux/actions/comment.action';
import OptionsComment from './OptionsComment';

function Comments({ comment, user }) {

    const dispatch = useDispatch()

    const handleClickLikeComment = (id) => {
        if (user)
            dispatch(CommentActions.likeCommentRequest({
                comment_id: id
            }))
    }

    return (
        <WrapperComment>
            <BlockImgUser>
                <Image src={comment.avatar || ImgUser} alt={comment.userName} />
            </BlockImgUser>
            <div>
                <Comment>
                    <div className='comment-info'>
                        <div className='user-name'>{comment.userName}</div>
                        <div className='comment-content'>
                            {comment.comment}
                            {
                                comment.likes.length > 0 &&
                                <div className='comment-like'>
                                    <LikeFilled style={{ color: 'var(--blue)', fontSize: 12 }} />
                                    <span>{comment.likes.length}</span>
                                </div>
                            }
                        </div>
                    </div>
                    {user && <Dropdown overlay={OptionsComment(comment, user?._id)} trigger={['click']} placement="bottomLeft">
                        <PostIconOptions>
                            <EllipsisOutlined />
                        </PostIconOptions>
                    </Dropdown>}
                </Comment>
                <CommentAction isLiked={comment.likes.includes(user?._id)}>
                    <div className='like-comment' onClick={() => handleClickLikeComment(comment._id)}>Thích</div>
                    <div>.</div>
                    <div>Phản hồi</div>
                    <div>.</div>
                    <div>{FormatDate(comment.createdAt)}</div>
                </CommentAction>
            </div>
        </WrapperComment>
    );
}

export default React.memo(Comments);