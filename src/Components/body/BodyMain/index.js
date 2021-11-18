import React, { useEffect, useMemo } from 'react';
import { Wrapper } from './index.styles';
import Stories from './Stories';
import AddStatus from './AddStatus';
import Post from './Post';
import GroupMeet from './GroupMeet';
import Loading from './Loading';
import { allUsersState$, statusState$ } from 'redux/selectors/status';
import { useDispatch, useSelector } from 'react-redux';
import { StatusAction } from 'redux/actions/status.action';
import ModalStatus from './ModalStatus';

function BodyMain(props) {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(StatusAction.getStatusRequest())
    }, [dispatch])
    const statusAll = useSelector(statusState$);
    const allUser = useSelector(allUsersState$);

    const post = useMemo(() => {
        const arr = [];
        console.log('1', statusAll);
        statusAll.forEach(sta => {
            const user = allUser.find(user => user._id === sta.user_id);
            if (user) {
                const { avatar, last_name, first_name } = user;
                const { status, createdAt, _id, updatedAt, old_status, likes, user_id } = sta;
                arr.push({
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
                })
            }

        })
        return arr;
    }, [statusAll, allUser])
    // console.log(post);
    return (
        <Wrapper>
            <ModalStatus />
            <Stories />
            <AddStatus />
            <GroupMeet />
            {
                post.map(status => <Post key={status._id} status={status} />)
            }
            <Loading />
            <Loading />
        </Wrapper>
    );
}

export default BodyMain;