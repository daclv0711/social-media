import React from 'react';
import { Wrapper } from './index.styles';
import Stories from './Stories';
import AddStatus from './AddStatus';
import Post from './Post';
import GroupMeet from './GroupMeet';

function BodyMain(props) {
    return (
        <Wrapper>
            <Stories />
            <AddStatus />
            <GroupMeet />
            <Post />
            <Post />
        </Wrapper>
    );
}

export default BodyMain;