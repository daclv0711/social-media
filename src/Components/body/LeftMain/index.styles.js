import styled from "styled-components";

export const Wrapper = styled.div`
    padding-left: 8px;
    margin-top: 16px;
    height: calc(100vh - var(--height-header));
    overflow: hidden;
    position: fixed;
    width: 20.833%;
    :hover {
        overflow: auto;
        ::-webkit-scrollbar {
            width: 8px;
        }
        ::-webkit-scrollbar-track {
            margin-top: -16px;
            background-color: #e5e7ea;
            marfin-left: 16px;
        }
        ::-webkit-scrollbar-thumb {
            border-radius: 24px;
            background: #CED0D4;
        }
    }
`

export const Option = styled.div`
    display: flex;
    align-items: center;
    padding: 0 6px;
    gap: 8px;
    font-size: 0.9375rem;
    font-weight: 600;
    border-radius: var(--border-radius-item);
    cursor: pointer;
    img {
        width: 28px;
        height: 28px;
        border-radius: 50%;
    }
    div{
        padding: 10px 0;
    }
    :hover {
        background-color: var(--gray-70);
    }
`

export const Hr = styled.hr`
    margin: 8px 0;
    margin-left: 12px;
    color: #CED0D4;
`
export const H3 = styled.h3`
    font-size: 1.0625rem;
    color: var(--secondary-text);
    line-height: 1.1765;
    margin-left: 12px;
    padding-top: 8px;
`