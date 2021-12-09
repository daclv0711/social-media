import { FlagOutlined, GlobalOutlined, HomeOutlined, ShopOutlined, UsergroupAddOutlined } from '@ant-design/icons';
import { Badge, Tooltip } from 'antd';
import React, { useRef } from 'react';
import { HeaderTitle, Wrapper } from './index.styles';

function MainNav(props) {
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
            <Tooltip title="Marketplace" placement="bottom">
                <HeaderTitle >
                    <Badge count={100} offset={[8, 0]}>
                        <ShopOutlined />
                    </Badge>
                </HeaderTitle>
            </Tooltip>
            <Tooltip title="Nhóm" placement="bottom">
                <HeaderTitle >
                    <Badge count={100} offset={[8, 0]}>
                        <GlobalOutlined />
                    </Badge>
                </HeaderTitle>
            </Tooltip>
        </Wrapper>
    );
}

export default MainNav;