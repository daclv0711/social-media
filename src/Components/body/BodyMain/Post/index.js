import { EnvironmentOutlined, LikeFilled, LikeOutlined, MessageOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';
import ImgUser from 'assets/images/no-img.png';
import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StatusAction } from 'redux/actions/status.action';
import { listCommentsState$ } from 'redux/selectors/comment';
import { loadingState$ } from 'redux/selectors/loading';
import { infoUserState$ } from 'redux/selectors/user';
import { FormatDate, FormatFullDate } from 'utils/FormatDate';
import { Block, BlockImgUser, BorderImg, UserImg } from '../index.styles';
import AddComment from './AddComment';
import Comments from './Comments';
import { Action, NameUser, PostAddComment, PostContent, PostHashtag, PostLodingInput, PostReaction, PostStatus, PostTime, PostUserInfo } from './index.styles';
import PostOptionStatus from './PostOptionStatus';
import { allUsersState$, loadingInputState$ } from 'redux/selectors/status';
import Loading from 'assets/images/loading.gif';

function Post({ status }) {
    const [showComment, setShowComment] = React.useState(false);
    const dispatch = useDispatch();

    const user = useSelector(infoUserState$)

    const loading = useSelector(loadingState$)

    const allUser = useSelector(allUsersState$)

    const loadingInput = useSelector(loadingInputState$)
    const hanldeClickLike = (id) => {
        if (!loading) {
            dispatch(StatusAction.likeStatusRequest({ status_id: id }))
        }
    }
    const comments = useSelector(listCommentsState$)

    const dataComment = useMemo(() => {
        const arr = [];
        comments.forEach(comment => {
            const userComment = allUser.find(user => user._id === comment.user_id)
            if (userComment) {
                arr.push({
                    ...comment,
                    userName: `${userComment.last_name} ${userComment.first_name}`,
                    avatar: userComment.avatar,
                })
            }

        })
        return arr.filter(comment => comment.status_id === status._id)
    }, [comments, status._id, allUser])

    const handleClickComment = () => {
        setShowComment(true)
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
                        <Tooltip title={FormatFullDate(status.createdAt)} placement="bottom">
                            <div>{FormatDate(status.createdAt)}</div>
                        </Tooltip>
                        <div>.</div>
                        <EnvironmentOutlined />
                    </PostTime>
                </NameUser>
                {/* Post edit */}
                <PostOptionStatus status={status} />

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
                {
                    dataComment.length > 0 && <div className='comment-count' onClick={() => setShowComment(!showComment)}>{dataComment.length} Bình luận</div>
                }
            </PostStatus>
            <PostReaction>
                <Action onClick={() => hanldeClickLike(status._id)} colors={status.likes.includes(user._id)}>
                    <LikeOutlined />
                    <div>Thích</div>
                </Action>
                <Action onClick={() => handleClickComment()}>
                    <MessageOutlined />
                    <div>Bình luận</div>
                </Action>
            </PostReaction>
            {
                showComment &&
                <>
                    <AddComment statusId={status._id} />
                    {
                        dataComment.map(comment => <Comments key={comment._id} comment={comment} />)
                    }

                </>
            }
            {
                loadingInput === status._id &&
                <PostLodingInput >
                    <img src={Loading} alt='loading' />
                    <div>Ai đó đang nhập...</div>
                </PostLodingInput>
            }
            {/* <Sort>
                <div>Phù hợp nhất</div>
                <CaretDownOutlined />
            </Sort>
            <Comments />
            <Comments /> */}
            <PostAddComment onClick={() => setShowComment(true)}>Viết bình luận...</PostAddComment>
        </Block>
    );
}

export default React.memo(Post);