import { styled } from "styled-components";
import { COLORS } from "../../styles/colors";

export const MainLayoutContainer = styled('div')`
    background-color: ${COLORS.primary};
    min-height: 100vh;
    padding-bottom: 100px;
    padding-left: 15%;
    padding-right: 15%;
    
    @media (max-width: 600px) {
        padding-left: 5%;
        padding-right: 5%;
    }
`

export const LoadingContainer = styled('div')`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 70vh;
` 