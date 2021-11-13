import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
`

export const HeaderTitle = styled.div`
    padding: 4px var(--header-main);
    border-radius: 8px;
    position: relative;
    font-size: var(--font-icons);
    color: ${props => props.theme.target};
    ::after {
        content: '';
        bottom: var(--bottom-icons);
        height: 3px;
        background-color: ${props => props.theme.target};
        width: 100%;
        position: absolute;
        display: block;
        left: 0;
    }
    :hover {
        cursor: ${props => props.theme.target ? '' : 'pointer'};
        background-color: ${props => props.theme.target ? '' : 'var(--gray)'};
    }
`