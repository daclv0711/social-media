import styled from "styled-components";
import { Flex } from 'utils/FlexStyles';
import { Select, Form } from 'antd';

export const StatusForm = styled(Form)`
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    .ant-form-item {
        margin-bottom: 0;
    }
    textarea {
        padding: 12px 0;
        font-size: 1.6rem;
        ::-webkit-scrollbar {
            width: 6px;
        }
        ::-webkit-scrollbar-track {
        }
        ::-webkit-scrollbar-thumb {
            border-radius: 24px;
            background: #BCC0C4;
        }
        ::-webkit-scrollbar-track:hover {
            background-color: #e4e4e4
        }
        ::-webkit-scrollbar-thumb:hover {
        }
    }
`;

export const StatusUser = styled(Flex)`
    gap: 0.5rem;
    align-items: center;
    .user-info {
        display: flex;
        flex-direction: column;
        .user-name {
            font-size: 1rem;
            font-weight: bold;
            text-transform: capitalize;
        }
    }
    .option-change {
        display: flex;
    }
`;

export const SelectObject = styled(Select)`
    .option-change {
        display: flex;
        font-size: 0.6rem;
        gap: 0.2rem;
        align-items: center;
        height: 100%;
    }
   
    .ant-select-selector {
        height: 22px !important;
        display: flex;
        gap: 4px;
    }
`;


export const OptionItem = styled(Flex)`
    align-items: center;
    font-size: 0.7rem;
    gap: 0.2rem;
    align-items: center;
    height: 100%;
`;