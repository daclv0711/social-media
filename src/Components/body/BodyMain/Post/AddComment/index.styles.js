import { Form } from 'antd';
import styled from 'styled-components';

export const FormAddComment = styled(Form)`
    display: flex;
    margin-bottom: 0.8rem;
    align-items: start;
    gap: 0.5rem;
    .ant-form-item {
        margin-bottom: 0;
        width: 100%;
    }
    textarea {
        background: var(--gray);
        border-radius: 1.2rem;
        :hover, :focus {
            background: var(--gray);
            border-radius: 1.2rem;
        }
    }
`;
