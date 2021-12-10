import { Form } from 'antd';
import styled from 'styled-components';

export const FormAddComment = styled(Form)`
    display: flex;
    margin-bottom: 0.8rem;
    align-items: start;
    .ant-form-item {
        margin-bottom: 0;
        width: 100%;
    }
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
