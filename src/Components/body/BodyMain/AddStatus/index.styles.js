import styled from "styled-components";
import { Flex } from 'utils/FlexStyles';
import { MeetCreate } from "../GroupMeet/index.styles";

export const StatusInfo = styled(Flex)`
    gap: 1rem;
`;

export const CreateStatus = styled(MeetCreate)`
    
`;

export const StatusMedia = styled(Flex)`
    padding-top: 0.5rem;
    margin-top: 0.8rem;
    border-top: 1px solid var(--gray);
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 0.4rem;
`;

export const Media = styled(Flex)`
    align-items: center;
    font-size: 0.95rem;
    gap: 0.5rem;
    color: var(--secondary-text);
    padding: 0.5rem 0.4rem;
    border-radius: 0.5rem;
    cursor: pointer;
    flex:1;
    svg {
        font-size: 1.5rem;
    }
    :hover {
        background-color: var(--gray);
    }
`;