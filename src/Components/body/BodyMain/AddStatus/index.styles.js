import styled from "styled-components";

export const StatusInfo = styled.div`
    background-color: var(--gray);
    width: 100%;
    padding: 0.5rem 0.8rem;
    color: var(--secondary-text);
    font-size: 1rem;
    border-radius: 2rem;
    cursor: pointer;
    margin-left: 0.8rem;
`;

export const StatusMedia = styled.div`
    padding-top: 0.5rem;
    margin-top: 0.8rem;
    border-top: 1px solid var(--gray);
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 0.4rem;
`;

export const Media = styled.div`
    display: flex;
    font-size: 0.95rem;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    color: var(--secondary-text);
    padding: 0.5rem 0.4rem;
    border-radius: 0.5rem;
    cursor: pointer;
    svg {
        font-size: 1.5rem;
    }
    :hover {
        background-color: var(--gray);

    }
`;