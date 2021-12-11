import styled from 'styled-components';
import { FlexAll } from 'utils/FlexStyles';

export const WrapperLoading = styled(FlexAll)`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    right: 0;
    bottom: 0;
    overflow: hidden;
    z-index: 99999;
    background-color: rgba(0, 0, 0, 0.1);
`;