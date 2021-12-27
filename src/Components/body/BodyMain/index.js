import React, { useCallback, useEffect, useMemo, useRef } from 'react';
import { Wrapper, Block, PostSuccess } from './index.styles';
// import Stories from './Stories';
import AddStatus from './AddStatus';
import Status from './Post';
import GroupMeet from './GroupMeet';
import LoadingPost from './LoadingPost';
import { statusState$ } from 'redux/selectors/status';
import { useDispatch, useSelector } from 'react-redux';
import { StatusAction } from 'redux/actions/status.action';
import ModalStatus from './ModalStatus';
import { CommentActions } from 'redux/actions/comment.action';
import { CheckCircleTwoTone } from '@ant-design/icons';
import { infoUserState$ } from 'redux/selectors/user';

function BodyMain(props) {
    const dispatch = useDispatch()

    const user = useSelector(infoUserState$)

    const statusState = useSelector(statusState$);

    const { allUsers, title, showModal, allStatus, total, modalContent, loadingInput, loading } = statusState;

    useEffect(() => {
        allStatus.length === 0 && dispatch(StatusAction.getStatusRequest(0))
    }, [dispatch, allStatus.length])

    useEffect(() => {
        dispatch(CommentActions.getCommentRequest())
    }, [dispatch])

    const refMain = useRef(null)
    const handleScroll = useCallback(() => {
        if ((refMain?.current.offsetHeight + 56 === Math.ceil(window.innerHeight + document.scrollingElement.scrollTop)) && (allStatus.length < total)) {
            dispatch(StatusAction.getStatusRequest(allStatus.length))
        }
    }, [dispatch, allStatus.length, total])

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [handleScroll])


    const statusUser = useMemo(() => {
        const arr = [];
        allStatus?.forEach(stt => {
            const user = allUsers.find(user => user._id === stt.user_id);
            if (user) {
                const { avatar, last_name, first_name } = user;
                const { status, createdAt, public: publices, _id, updatedAt, old_status, likes, user_id, image, cloudinary_id } = stt;
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
                    cloudinary_id,
                    publices
                }
                arr.push(newStatus)
            }
        })
        return arr;
    }, [allStatus, allUsers])

    return (
        <Wrapper ref={refMain}>
            <ModalStatus title={title} content={modalContent} showModal={showModal} />
            {/* <Stories /> */}
            <AddStatus user={user} />
            <GroupMeet />
            {
                statusUser.map(status => <Status
                    key={status._id}
                    status={status}
                    user={user}
                    allUsers={allUsers}
                    loadingInput={loadingInput}
                />)
            }
            {
                allStatus.length === total &&
                <Block>
                    <PostSuccess>
                        <CheckCircleTwoTone twoToneColor="#52c41a" />
                        <div>Bạn đã xem hết bài viết.</div>
                    </PostSuccess>
                </Block>
            }
            {
                (loading || statusUser.length === 0) &&
                <>
                    <LoadingPost />
                    <LoadingPost />
                </>
            }
        </Wrapper>
    );
}

export default React.memo(BodyMain);