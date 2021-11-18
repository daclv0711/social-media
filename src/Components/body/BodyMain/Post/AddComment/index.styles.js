import styled from 'styled-components';

export const Wrapper = styled.form`
    display: flex;
    margin-bottom: 0.8rem;
    align-items: start;
    textarea {
        background: var(--gray);
        border-radius: 1.2rem;
        margin-left: 0.6rem;
        :hover, :focus {
            background: var(--gray);
            border-radius: 1.2rem;
            margin-left: 0.6rem;
        }
    }
`;
