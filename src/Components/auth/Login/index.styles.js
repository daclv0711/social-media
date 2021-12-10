import styled from "styled-components";
import { FlexDir } from "utils/FlexStyles";
import { Form } from "antd";
export const Wrapper = styled(FlexDir)`
    width: 400px;
    background: var(--white);
    box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%);
    border-radius: 8px;
    padding: 1rem;
    align-items: center;
    button {
        border-radius: 6px;
    }

    @media screen and (max-width: 400px) {
        width: 100%;
        background: unset;
        box-shadow: unset;
    }
`;

export const FormLogin = styled(Form)`
    width: 100%;
    display: flex;
    gap: 1rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
    p {
        color: #1877f2;
        cursor: pointer;
    }
    p:hover {
        text-decoration: underline;
    }
    hr {
        width: 100%;
    }
    button {
        font-weight: bold;
        border-radius: 8px;
    }
`;