import { Form } from "antd";
import styled from "styled-components";
import { Flex, FlexDir } from "utils/FlexStyles";

export const WrapperChatMain = styled(FlexDir)`
    background-color: #fff;
    height: calc(100vh - var(--height-header));
    justify-content: space-between;
`;
//header
export const HeaderChat = styled(Flex)`
    height: 64px;
    border-bottom: 1px solid var(--shadow-1);
    padding: 12px;
    align-items: center;
    justify-content: space-between;
    .header-user {
        display: flex;
        align-items: center;
        gap: 12px;
        .user-name {
            font-size: 14px;
            text-transform: capitalize;
            font-weight: 600;
            cursor: pointer;
            :hover {
                text-decoration: underline;
            }
        }
    }
    .header-content {
        display: flex;
        align-items: center;
        gap: 16px;
        font-size: 20px;
        .header-content-icon {
            cursor: pointer;
            padding: 4px;
            height: 40px;
            width: 40px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            :hover {
                background-color: #0000000D;
            }
        }
    }
`;

//main
export const MainChat = styled.div`
    overflow-y: auto;
    padding: 16px;
    height: calc(100%);
`;

export const UserChat = styled(FlexDir)`
    align-items: center;

    .user-chat {
        font-size: 14px;
        text-transform: capitalize;
        font-weight: 600;
        cursor: pointer;
        :hover {
            text-decoration: underline;
        }
    }
`;

//footer
export const FooterChat = styled(Flex)`
    padding: 0 8px;
    display: flex;
    align-items: center;
    border-top: 1px solid var(--shadow-1);
`;

export const FormChat = styled(Form)`
    display: flex;
    align-items: end;
    justify-content: space-between;
    gap: 12px;
    font-size: 20px;
    width: 100%;
    padding: 12px 0;
    .ant-form-item {
        background-color: var(--gray-70);
        border-radius: 16px;
        width: 100%;
        margin-bottom: 0;
    }

    .anticon-file-image, .anticon-like {
        cursor: pointer;
        margin-bottom: 6px;
    }
`;

