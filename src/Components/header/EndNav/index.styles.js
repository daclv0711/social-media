import { Drawer, Input, Menu } from 'antd';
import styled from 'styled-components'
import { Flex } from 'utils/FlexStyles';

export const Wrapper = styled.div`
    display: flex;
    gap: 10px;
    justify-content: flex-end;
    align-items: center;
`

export const EndHeader = styled.div`
    font-size: var(--font-icons);
    width: 40px;
    height: 40px;
    background-color: var(--lightGray);
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    :hover{
        background-color: var(--gray-80);
    }
`

export const User = styled.div`
    border-radius: 25px;
    display: flex;
    align-items: center;
    gap:4px;
    padding: 0 4px;
    cursor: pointer;
    height: 36px;
    .user-name {
        font-weight: bold;
        text-transform: capitalize;
    }
    :hover{
        background-color: var(--gray);
    }
`

export const MenuOption = styled(Menu)`
    border-radius: 10px;
    padding: 12px;
    width: 350px;
   .ant-dropdown-menu-item {
        border-radius: 10px;
        padding: 8px 12px
   }
   .ant-dropdown-menu-item:first-child {
        margin-bottom: 10px;
   }
   .content-chat {
        border-top: 1px solid var(--gray-80);
        font-weight: 600;
        font-size: var(--font-small);
        color: var(--blue);
   }
`;

export const ProfileUser = styled(Flex)`
    align-items: ;
    gap: 0.6rem;
    .info {
        white-space: pre-wrap;
        width: 75%;
        word-break: break-word;
        .user-name {
            font-weight: 600;
            font-size: var(--font-small);
            text-transform: capitalize;
        }
        .content {
            font-size: 16px;
            color: var(--secondary-text);
        }
        .notify {
            color: ${props => props.notify ? '#000' : 'var(--secondary-text)'};
            b {
                text-transform: capitalize;
            }
            font-size: var(--font-small);
        }
        .time {
            font-size: 12px;
            color: ${props => props.notify ? 'var(--blue)' : 'var(--secondary-text)'};
        }
    }
`;

export const ProfileItem = styled(Flex)`
    gap: 0.6rem;
    align-items: center;
    .content {
        font-weight: 600;
        font-size: var(--font-small);
    }
`;

export const Title = styled.div`
    font-size: 1.5rem;
    font-weight: 600;
    color: #000;
`

export const InputChat = styled(Input)`
`;

export const DrawerMenu = styled(Drawer)`
    .ant-drawer-header {
        background: var(--blue);
    }
`;

export const DrawerMenuTitle = styled.div`
    font-size: 20px;
    font-weight: bold;
    color: #fff;
`;

export const WrapperMenuMobile = styled.div`
    ${ProfileItem} {
        font-size: 30px;
        color: #000;
        margin-bottom: 16px;
    }

`;