import React, { useEffect, useMemo } from 'react';
import { Wrapper, Block, PostSuccess } from './index.styles';
// import Stories from './Stories';
import AddStatus from './AddStatus';
import Status from './Post';
import GroupMeet from './GroupMeet';
import LoadingPost from './LoadingPost';
import { allUsersState$, statusState$ } from 'redux/selectors/status';
import { useDispatch, useSelector } from 'react-redux';
import { StatusAction } from 'redux/actions/status.action';
import ModalStatus from './ModalStatus';
import { CommentActions } from 'redux/actions/comment.action';
import { CheckCircleTwoTone } from '@ant-design/icons';
import { infoUserState$ } from 'redux/selectors/user';

function BodyMain(props) {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(StatusAction.getStatusRequest())
        dispatch(CommentActions.getCommentRequest())
    }, [dispatch])

    const user = useSelector(infoUserState$)

    const statusAll = useSelector(statusState$);

    const allUser = useSelector(allUsersState$);

    const statusUser = useMemo(() => {
        const arr = [];
        statusAll.forEach(stt => {
            const user = allUser.find(user => user._id === stt.user_id);
            if (user) {
                const { avatar, last_name, first_name } = user;
                const { status, createdAt, _id, updatedAt, old_status, likes, user_id, image, cloudinary_id } = stt;
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
                    user_id,
                    image,
                    cloudinary_id
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
            <AddStatus user={user} />
            <GroupMeet />
            {
                statusUser.map(status => <Status key={status._id} status={status} user={user} />)
            }
            {
                statusUser.length > 0 ?
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