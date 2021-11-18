import styled from 'styled-components';

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