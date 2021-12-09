import styled from 'styled-components';
import { FlexAll } from 'utils/FlexStyles';

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