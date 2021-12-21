import { FlagOutlined, HomeOutlined, UsergroupAddOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';
import React, { useRef } from 'react';
import { HeaderTitle, Wrapper } from './index.styles';

function MainNav() {
    const mainRef = useRef(null);
    const theme = {
        target: 'var(--blue)'
    }

    return (
        <Wrapper ref={mainRef}>
            <Tooltip title="Trang chủ" placement="bottom">
                <HeaderTitle theme={theme}><HomeOutlined /></HeaderTitle>
            </Tooltip>
            <Tooltip title="Bạn bè" placement="bottom">
                <HeaderTitle><UsergroupAddOutlined /></HeaderTitle>
            </Tooltip>
            <Tooltip title="Trang" placement="bottom">
                <HeaderTitle ><FlagOutlined /></HeaderTitle>
            </Tooltip>
        </Wrapper>
    );
}

export default MainNav;