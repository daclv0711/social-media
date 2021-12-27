import { EnvironmentOutlined, LikeFilled, LikeOutlined, MessageOutlined } from '@ant-design/icons';
import { Image, Tooltip } from 'antd';
import ImgUser from 'assets/images/no-img.png';
import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StatusAction } from 'redux/actions/status.action';
import { listCommentsState$ } from 'redux/selectors/comment';
import { loadingState$ } from 'redux/selectors/loading';
import { FormatDate, FormatFullDate } from 'utils/FormatDate';
import { Block, BlockImgUser } from '../index.styles';
import AddComment from './AddComment';
import Comments from './Comments';
import { Action, NameUser, PostAddComment, PostContent, PostHashtag, PostImage, PostLodingInput, PostReaction, PostStatus, PostTime, PostUserInfo } from './index.styles';
import MenuStatus from './MenuStatus';
import Loading from 'assets/images/loading.gif';
import { useNavigate } from 'react-router-dom';

function Status({ status, user, loadingInput, allUsers }) {
    const [showComment, setShowComment] = React.useState(false);
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const loading = useSelector(loadingState$)

    const hanldeClickLike = (id) => {
        if (!loading && user) {
            dispatch(StatusAction.likeStatusRequest({ status_id: id }))
        }
    }
    const comments = useSelector(listCommentsState$)

    const dataComment = useMemo(() => {
        const arr = [];
        comments.forEach(comment => {
            const userComment = allUsers.find(user => user._id === comment.user_id)
            if (userComment) {
                arr.push({
                    ...comment,
                    userName: `${userComment.last_name} ${userComment.first_name}`,
                    avatar: userComment.avatar,
                })
            }

        })
        return arr.filter(comment => comment.status_id === status._id)
    }, [comments, status._id, allUsers])

    const handleClickComment = () => {
        setShowComment(true)
    }

    const handleClickWriteComment = () => {
        if (user)
            setShowComment(true)
        else navigate('/account/login')
    }

    const handlePublishStatus = (status) => {
        switch (status) {
            case 'public':
                return 'Công khai'
            case 'private':
                return 'Chỉ mình tôi'
            case 'friends':
                return 'Bạn bè'
            default:
                return 'Công khai'
        }
    }
    return (
        <Block>
            <PostUserInfo>
                <BlockImgUser>
                    <Image src={status.avatar || ImgUser} alt='user' />
                </BlockImgUser>
                <NameUser>
                    <div className='user-name'>{`${status.lastName} ${status.firstName}`}</div>
                    <PostTime>
                        <Tooltip title={FormatFullDate(status.createdAt)} placement="bottom">
                            <div>{FormatDate(status.createdAt)}</div>
                        </Tooltip>
                        <div>.</div>
                        <Tooltip title={handlePublishStatus(status.publices)} placement="bottom">
                            <EnvironmentOutlined />
                        </Tooltip>
                    </PostTime>
                </NameUser>
                {/* Post edit */}
                {user && <MenuStatus status={status} />}

            </PostUserInfo>
            <PostContent>
                {status.status}
            </PostContent>
            <PostHashtag to='/'>
                #abc
            </PostHashtag>
            {status.image &&
                <PostImage >
                    <Image src={status.image} alt={status.status} />
                </PostImage>
            }
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
                <Action onClick={() => hanldeClickLike(status._id)} colors={status.likes.includes(user?._id)}>
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
                    {user && <AddComment userImg={user.avatar} statusId={status._id} comment={dataComment} />}
                    {
                        dataComment.map(comment => <Comments key={comment._id} user={user} comment={comment} />)
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
            <PostAddComment onClick={handleClickWriteComment}>Viết bình luận...</PostAddComment>
        </Block>
    );
}

export default React.memo(Status);