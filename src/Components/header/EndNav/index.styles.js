import { Menu } from 'antd';
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

export const MenuAccount = styled(Menu)`
    border-radius: 10px;
    padding: 10px;
   .ant-dropdown-menu-item {
       border-radius: 10px;
   }
   .ant-dropdown-menu-item:first-child {
       margin-bottom: 10px;
   }
`;

export const ProfileUser = styled(Flex)`
    align-items: center;
    gap: 0.6rem;
    .info {
        .user-name {
            font-weight: 600;
            font-size: var(--font-small);
            text-transform: capitalize;
        }
        .content {
            font-size: 16px;
            color: var(--secondary-text);
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