import { styled } from "styled-components";
import { COLORS } from "../../styles/colors";

export const ConfirmationContainer = styled('div')`
    background-color: ${COLORS.second};
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    padding: 64px;
    gap: 32px;

    @media (max-width: 600px) {  
        padding: 64px 64px 32px 64px;
    }
`

export const Img = styled("img")`
    width: 294px;
    height: 307px;
`

export const Title = styled('p')`
    font-size: 20px;
    font-weight: 700;
    color: #2F2E41;

    @media (max-width: 600px) {  
        text-align: center;
    }
`