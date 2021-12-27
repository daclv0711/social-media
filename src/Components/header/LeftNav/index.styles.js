import styled from "styled-components";
import { Flex } from "utils/FlexStyles";

export const Wrapper = styled(Flex)`
    align-items: center;
`
export const Input = styled(Flex)`
    width: fit-content;
    gap: 10px;
    align-items: center;
    margin-left: 10px;
    border-radius: 24px;
    padding: 10px;
    height: 40px;
    background-color: var(--gray);
    font-size: 16px;
    input {
        border: none;
        outline: none;
        width: 80%;
        background-color: var(--gray);
        :focus {
            display: block;
        }
    }
    @media screen and (max-width: 1024px) {
        width: 40px;
        justify-content: center;
        input {
            display: none;
        }
    }
`