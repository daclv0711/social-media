import styled from 'styled-components';
import { Flex, FlexAll, FlexDir } from 'utils/FlexStyles';

export const Wrapper = styled(FlexDir)`
    margin:0 auto;
    margin-top: 1rem;
    position: relative;
    width: var(--width-body-main);
    align-items: center;
`;

export const Block = styled.div`
    background-color: var(--white);
    width: var(--width-block-main);
    margin: 0 auto;
    padding: 0.8rem 1rem;
    box-shadow: 0 1px 2px var(--shadow-2);
    border-radius: var(--border-radius-main);
    margin-bottom: var(--mg-bottom-main);
`;

export const UserImg = styled.img`
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    cursor: pointer;
`

export const Blur = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--shadow-1);
    cursor: pointer;
    :hover {
        background-color: var(--shadow-2);
    }
`;

export const Next = styled(FlexAll)`
    position: absolute;
    right: 0;
    background-color: var(--white);
    padding: 0.3rem;
    border-radius: 50%;
    padding: 0.6rem;
    top: calc(50%);;
    transform: translateY(-50%);
    font-size: var(--font-icons);
    cursor: pointer;
    box-shadow: 0 0 0 1px var(--shadow-1);
    :hover {
        background-color: var(--gray);
    }
`;

export const Prev = styled(Next)`
    right: unset;
    left: 0;
`;

export const BlockImgUser = styled(Flex)`
    display: flex;
    align-items: center;
    position: relative;
    .ant-image {
        width: 40px;
        height: 40px;
        .ant-image-img {
            height: 100%;
            border-radius: 50%;
        }
        .ant-image-mask {
            border-radius: 50%;
        }
    }
`;

export const BorderImg = styled(Blur)`
    border-radius: 50%;
`;

export const PostSuccess = styled(FlexAll)`
    font-size: 1.5rem;
    font-weight: 600;
    gap: 0.5rem;
`;