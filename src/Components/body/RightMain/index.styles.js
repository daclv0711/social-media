import styled from "styled-components";
import { FlexAll, Flex } from "utils/FlexStyles";
import { H3 } from "../LeftMain/index.styles";

export const Wrapper = styled.div`
    padding-top: 8px;
    height: calc(100vh - var(--height-header));
    position: fixed;
    width: 20.833%;
    overflow: hidden;
    :hover {
        overflow: auto;
        ::-webkit-scrollbar {
            width: 8px;
        }
        ::-webkit-scrollbar-track {
            background-color: #e5e7ea;
        }
        ::-webkit-scrollbar-thumb {
            border-radius: 20px;
            background: #CED0D4;
        }
    }
    ::-webkit-scrollbar-track:hover {
    }
    ::-webkit-scrollbar-thumb:hover {
    }
`;

export const TopContact = styled(Flex)`
    padding: 20px 0 0 16px;
    flex-wrap: wrap;
    align-items: center;
`;

export const Title = styled(H3)`
    margin: 0;
    padding: 0;
    margin-right: 16px;
    color: var(--secondary-text)
`;

export const SelectContact = styled(FlexAll)`
    padding: 8px;
    width: 32px;
    height: 32px;
    cursor: pointer;
    :hover {
        border-radius: 50%;
        background-color: var(--gray-70);
    }
`;