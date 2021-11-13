import { FlagOutlined, GlobalOutlined, HomeOutlined, ShopOutlined, UsergroupAddOutlined } from '@ant-design/icons';
import React, { useRef } from 'react';
import { HeaderTitle, Wrapper } from './index.styles';

function MainNav(props) {
    const mainRef = useRef(null);
    const theme = {
        target: 'var(--blue)'
    }
    return (
        <Wrapper ref={mainRef}>
            <HeaderTitle theme={theme}><HomeOutlined /></HeaderTitle>
            <HeaderTitle><UsergroupAddOutlined /></HeaderTitle>
            <HeaderTitle ><FlagOutlined /></HeaderTitle>
            <HeaderTitle ><ShopOutlined /></HeaderTitle>
            <HeaderTitle ><GlobalOutlined /></HeaderTitle>
        </Wrapper>
    );
}

export default MainNav;