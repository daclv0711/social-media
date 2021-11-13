import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
`
export const Input = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    margin-left: 10px;
    border-radius: 24px;
    padding: 10px;
    height: 40px;
    background-color: var(--gray);
    font-size: 16px;
    label:active ~ input{
        cursor: pointer;
        display: block;
    }
    input {
        border: none;
        outline: none;
        width: 80%;
        background-color: var(--gray);
        :focus {
            display: block;
        }
    }
`