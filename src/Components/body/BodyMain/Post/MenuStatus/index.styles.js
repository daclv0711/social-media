import styled from 'styled-components';
import { FlexAll } from 'utils/FlexStyles';
import { Menu } from 'antd'
export const TitleModal = styled.div`
    font-size: 1rem;
    font-weight: bold;
`;

export const ListOldStatus = styled.div`
    .date {
        cursor: pointer;
        font-style: italic;
        font-size: 0.8rem;
        :hover {
            text-decoration: underline;
        }
    }
    .content {
        padding: 1rem;
        border-radius: 1rem;
        background-color: var(--gray-70);
        white-space: break-spaces;
        word-break: break-word;
    }
`;

export const PostIconOptions = styled(FlexAll)`
    font-size: 1.2rem;
    cursor: pointer;
    padding: 0.4rem;
    border-radius: 50%;
    :hover {
        background-color: var(--gray);
    }
`;

export const MenuOptionStatus = styled(Menu)`
    border-radius: 10px;
    padding: 4px;
    min-width: 150px;
    .ant-dropdown-menu-item {
        border-radius: 10px;
        padding: 8px 12px
    }
`;