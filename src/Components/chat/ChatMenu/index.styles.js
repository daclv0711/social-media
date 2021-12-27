import { Menu } from "antd";
import styled from "styled-components";
import { Flex, FlexDir } from "utils/FlexStyles";

export const WrapperChatMenu = styled.div`
    background-color: #fff;
    height: 100%;
    border-right: 1px solid var(--shadow-1);
`;

export const Option = styled.div`
    position: relative;
    left: 80%;
    top: -60px;
    color: #000;
    height: 0;
    width: 0;
    .menu-option {
        height: 36px;
        width: 36px;
        background-color: #fff;
        border-radius: 50%;
        border: 1px solid var(--shadow-1);
        display: flex;
        align-items: center;
        justify-content: center;
        :hover {
            background-color: #0000000D;
        }
        cursor: pointer;
    }
    
`;

export const BlockChat = styled.div`
    display: flex;
    gap: 12px;
    align-items: center;
    padding: 4px;
    :hover {
        background-color: ${props => props.hover ? '#0000000D' : ''} ;
        
    }
`

export const MenuChat = styled(Menu)`
    border-right: 0;
    .ant-menu-item {
        padding: 0;
        position: relative;
        height: 100%;
        border-radius: 8px;
        margin-bottom: 0;
        margin-top: 0;
    }
`;

export const Content = styled(FlexDir)`
    gap: 2px;
    .user-name {
        font-size: 16px;
        text-transform: capitalize;
        line-height: 1.2308;
        color: #000;
    }

    .content-chat {
        font-size: 14px;
        line-height: 1.2308;
        color: var(--secondary-text);
    }
`;

export const Chat = styled(Flex)`
    gap: 4px;
    align-items: center;
`;

export const MenuChatContainer = styled.div`
    padding: 0 4px; 
    overflow-: auto;
    overflow-x: hidden;
    height: calc( 100vh - 104px - var(--height-header));

`


//menu item
export const WrapperItem = styled.div`
    position: relative;
`