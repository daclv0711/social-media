import styled from "styled-components";
import { Block, Next } from "../index.styles";

export const Wrapper = styled(Block)`
    position: relative;
    overflow: hidden;
    display: flex;
`

export const BlockMeet = styled.div`
    display: flex;
    gap: 0.8rem;
    position: relative;
    right: 0;
    transition: right 0.3s linear;
`;

export const MeetCreate = styled.div`
    width: fit-content;
    display: flex;
    align-items: center;
    padding: 0.4rem 0.8rem;
    gap: 0.4rem;
    border-radius: 20px;
    border: 2px solid #E7F3FF;
    color: #216FD2;
    font-weight: 600;
    font-size: 0.95rem;
    cursor: pointer;
    div {
        width: 142px;
    }
    :hover {
        background-color: var(--gray-70);
    }
`;

export const MeetNext = styled(Next)`
    right: 0.8rem;
    padding: 0.8rem;
`

export const MeetPrev = styled(Next)`
    left: 0.8rem;
    padding: 0.8rem;
    right: unset;
`
