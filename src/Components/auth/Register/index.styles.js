import styled from "styled-components";
import { Flex } from "utils/FlexStyles";
import { Form } from "antd"
export const UserName = styled(Flex)`
    gap: 1rem;
    width: 100%;
    justify-content: space-between;
`;

export const FormRegister = styled(Form)`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 1rem;
    .ant-form-item {
        margin-bottom: 0;
        width: 100%;
    }
    input, span {
        border-radius: 6px;
        input {
            border-radius: 0;
        }
    }
`;

export const ButtonRegister = styled.button`
    font-size: 1.2rem;
    border-radius: 6px;
    font-weight: bold;
    color: white;
    background-color: #00a400;
    outline: none;
    border: none;
    padding: 0 2rem;
    cursor: pointer;
    font-size: 18px;
    :hover {
        background: linear-gradient(#79bc64, #578843);
    }
`;

export const Email = styled.div`
    width: 100%;
`;

export const Password = styled(Email)``;

export const Error = styled.div`
    color: #ff4d4f;
    align-self: start;
`;
