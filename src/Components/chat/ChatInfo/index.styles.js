import styled from "styled-components";
import { FlexDir } from "utils/FlexStyles";

export const WrapperChatInfo = styled.div`
    background-color: #fff;
    height: 100%;
    border-left: 1px solid var(--shadow-1);
    overflow-y: auto;
    padding: 16px 0;

    .info-name {
        font-size: 16px;
        font-weight: 600;
    }
`;

export const InfoUser = styled(FlexDir)`
    align-items: center;
`

export const InfoOption = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px;
    cursor: pointer;
    border-radius: 8px;
    :hover {
        background-color: #0000000D;
    }
    
`;