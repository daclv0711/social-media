import styled from "styled-components";
import { Flex } from "utils/FlexStyles";
// import { PostOptions } from "../index.styles";
import { Menu } from 'antd';

export const WrapperComment = styled(Flex)`
    position: relative;
    align-items: start;
    gap: 0.6rem;
    margin-bottom: 0.8rem;
`;

export const Comment = styled(Flex)`
    gap: 0.2rem;
    align-items:center;
    margin-bottom: 0.4rem;
    overflow-wrap: break-word;
    white-space: break-spaces;
    word-break: break-word;
    .comment-info {
        background-color: var(--gray);
        border-radius: 1rem;
        padding: 0.6rem;
        .comment-content {
            position: relative;
            .comment-like {
                position: absolute;
                right: 0;
                cursor: pointer;
                bottom: -18px;
                display: flex;
                padding: 0 0.2rem;
                gap: 0.2rem;
                border-radius: 0.8rem;
                background-color: var(--white);
                align-items: center;
                box-shadow: 0 1px 3px 0 var(--shadow-2);
                height: 20px;
            }
        }
    }
    .user-name{
        width: fit-content;
        cursor: pointer;
        font-size: 0.8rem;
        text-transform: capitalize;
        font-weight: bold;
        :hover, :active {
            text-decoration: underline;
        }
    }
`

export const CommentAction = styled(Flex)`
    padding: 0.2rem 0.6rem;
    gap: 0.2rem;
    font-size: 0.8rem;
    font-weight: 600;
    color: var(--secondary-text);
    div:last-child {
        font-weight: 400;
    }
    .like-comment {
        color: ${props => props.isLiked ? 'var(--blue)' : 'var(--secondary-text)'}
    }
    div {
        cursor: pointer;
        :hover {
            text-decoration: underline;
        }
    }
`;

export const MenuOptionComment = styled(Menu)`
    border-radius: 10px;
    padding: 4px;
    min-width: 150px;
    .ant-dropdown-menu-item {
        border-radius: 10px;
        padding: 8px 12px
   }
`;