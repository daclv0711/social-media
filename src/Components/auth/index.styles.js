import styled from "styled-components";
import { FlexDir } from "utils/FlexStyles";

export const WrapperAuth = styled(FlexDir)`
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

export const Error = styled.div`
    color: #ff4d4f;
    align-self: start;
`;
