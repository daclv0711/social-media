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

export const UserName = styled.div`
    font-size: var(--font-small);
    font-weight: 600;
    color: var(--secondary-text);
    text-transform: capitalize;
`