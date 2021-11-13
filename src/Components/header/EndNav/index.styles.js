import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    gap: 10px;
    justify-content: flex-end;
    align-items: center;
`

export const EndHeader = styled.div`
    font-size: var(--font-icons);
    width: 40px;
    height: 40px;
    background-color: var(--lightGray);
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    :hover{
        background-color: var(--gray-80);
    }
`

export const User = styled.div`
    border-radius: 25px;
    display: flex;
    align-items: center;
    gap:4px;
    padding: 0 4px;
    cursor: pointer;
    height: 36px;
    img {
        width: 28px;
        border-radius: 50%;
    }
    .user-name {
        font-weight: bold;
    }
    :hover{
        background-color: var(--gray);
    }
`