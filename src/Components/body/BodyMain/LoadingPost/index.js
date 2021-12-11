import { Skeleton } from 'antd';
import React from 'react';
import { Block } from '../index.styles';

function LoadingPost(props) {

    return (
        <Block>
            <Skeleton active avatar paragraph={{ rows: 5 }} />
        </Block>
    );
}

export default React.memo(LoadingPost);