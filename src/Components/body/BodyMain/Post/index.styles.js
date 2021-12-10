import { Link } from "react-router-dom";
import styled from "styled-components";
import { Flex, FlexAll, FlexDir } from "utils/FlexStyles";

export const PostUserInfo = styled(Flex)`
    justify-content: space-between;
    gap: 0.4rem;
    align-items: center;
    margin-bottom: 0.6rem;
`

export const NameUser = styled(FlexDir)`
    width: 100%;
    gap: 4px;
    user-select: none !important;
    .user-name {
        width: fit-content;
        font-size: 0.95rem;
        font-weight: 600;
        cursor: pointer;
        text-transform: capitalize;
        :hover {
            text-decoration: underline;
        }
    }
`;

export const PostTime = styled(Flex)`
    align-items: center;
    gap: 0.3rem;
    color: var(--secondary-text);
    line-height: 0;
    div:first-child {
        font-weight: 400;
        cursor: pointer;
        :hover {
            text-decoration: underline;
        }
    }
    div:nth-child(2) {
        font-size: 1.2rem;
        position: relative;
        top: -0.3rem;
    }
`;

export const PostContent = styled.div`
    margin-bottom: 0.8rem;
`;

export const PostHashtag = styled(Link)`
    color: var(--blue);
    cursor: pointer;
    display: block;
    margin-bottom: 0.8rem;
    :hover {
        text-decoration: underline;
    }
`

export const PostStatus = styled(Flex)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.8rem;
    color: var(--secondary-text);
    font-size: 0.95rem;
    user-select: none !important;
    div {
        cursor: pointer;
    }
    .thrilling {
        display: flex;
        align-items: center;
        gap: 0.3rem;
        .like-count {
            :hover {
                text-decoration: underline;
            }
        }
    }
    .comment-count {
        :hover {
            text-decoration: underline;
        }
    }
`;

export const PostReaction = styled(FlexAll)`
    gap: 0.5rem;
    padding: 0.2rem 0;
    margin-bottom: 0.8rem;
    border-top: 1px solid var(--gray-80);
    border-bottom: 1px solid var(--gray-80);
`;

export const Action = styled(FlexAll)`
    display: flex;
    cursor: pointer;
    gap: 0.2rem;
    width: 50%;
    padding: 0.4rem 0;
    border-radius: 0.3rem;
    color: ${props => props.colors ? 'var(--blue)' : 'var(--secondary-text)'};
    font-size: 0.95rem;
    font-weight: 600;
    user-select: none !important;
    :hover {
        background-color: var(--gray);
    }
`;

export const Sort = styled(Flex)`
    align-items: center;
    justify-content: end;
    gap: 0.2rem;
    cursor: pointer;
    margin-bottom: 0.2rem;
    color: var(--secondary-text);
    font-size: 0.95rem;
    font-weight: 600;
`

export const PostAddComment = styled.div`
    color: var(--secondary-text);
    font-size: 0.925rem;
    font-weight: 600;
    user-select: none !important;
    :hover {
        text-decoration: underline;
        cursor: pointer;
    }
`;

export const PostLodingInput = styled(Flex)`
    align-items: center;
    color: #898989;
    gap: 0.5rem;
    img {
        width: 1.5rem;
    }
`;