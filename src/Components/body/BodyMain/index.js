import React, { useEffect, useMemo } from 'react';
import { Wrapper, Block, PostSuccess } from './index.styles';
// import Stories from './Stories';
import AddStatus from './AddStatus';
import Post from './Post';
import GroupMeet from './GroupMeet';
import LoadingPost from './LoadingPost';
import { allUsersState$, statusState$ } from 'redux/selectors/status';
import { useDispatch, useSelector } from 'react-redux';
import { StatusAction } from 'redux/actions/status.action';
import ModalStatus from './ModalStatus';
import { CommentActions } from 'redux/actions/comment.action';
import { CheckCircleTwoTone } from '@ant-design/icons';

function BodyMain(props) {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(StatusAction.getStatusRequest())
        dispatch(CommentActions.getCommentRequest())
    }, [dispatch])

    const statusAll = useSelector(statusState$);

    const allUser = useSelector(allUsersState$);

    const post = useMemo(() => {
        const arr = [];
        statusAll.forEach(sta => {
            const user = allUser.find(user => user._id === sta.user_id);
            if (user) {
                const { avatar, last_name, first_name } = user;
                const { status, createdAt, _id, updatedAt, old_status, likes, user_id } = sta;
                const newStatus = {
                    avatar,
                    lastName: last_name,
                    firstName: first_name,
                    _id,
                    status,
                    createdAt,
                    updatedAt,
                    old_status,
                    likes,
                    user_id
                }
                arr.push(newStatus)
            }
        })
        return arr;
    }, [statusAll, allUser])

    return (
        <Wrapper>
            <ModalStatus />
            {/* <Stories /> */}
            <AddStatus />
            <GroupMeet />
            {
                post.map(status => <Post key={status._id} status={status} />)
            }
            {
                post.length > 0 ?
                    <Block>
                        <PostSuccess>
                            <CheckCircleTwoTone twoToneColor="#52c41a" />
                            <div>Bạn đã xem hết bài viết.</div>
                        </PostSuccess>
                    </Block>
                    :
                    <>
                        <LoadingPost />
                        <LoadingPost />
                    </>
            }
        </Wrapper>
    );
}

export default React.memo(BodyMain);