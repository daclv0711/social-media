import styled from "styled-components";
import { Flex } from "utils/FlexStyles";

export const Wrapper = styled(Flex)`
    align-items: center;
    gap: 0.6rem;
    padding: 0.6rem;
    margin-left: 0.4rem;
    cursor: pointer;
    border-radius: var(--border-radius-item);
    :hover {
        background-color: var(--gray-70);
    }
`;

export const UserOnline = styled.div`
    position: relative;
    width: 1.8rem;
    height: 1.8rem;
    ::after {
        content: "";
        position: absolute;
        width: 0.6rem;
        height: 0.6rem;
        background: var(--white);
        border-radius: 50%;
        bottom: 0;
        right: 0;
    }
    ::before {
        content: "";
        position: absolute;
        width: 0.4rem;
        height: 0.4rem;
        background: var(--green-online);
        border-radius: 50%;
        bottom: 0.1rem;
        right: 0.1rem;
        z-index: 100;
    }
`;

export const UserImg = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 50%;
`;

export const UserName = styled.div`
    font-size: 0.95rem;
    font-weight: 600;
    color: var(--secondary-text);
`