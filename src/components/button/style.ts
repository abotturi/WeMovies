import { styled, css } from "styled-components";
import { COLORS } from "../../styles/colors";

export const BtnContainer = styled('button')<{$releaseResponsiveness?: boolean}>`
    background-color: ${COLORS.third};
    color: ${COLORS.second};
    font-size: 12px;
    font-weight: 700;
    height: 40px;
    width: 180px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    gap: 12px;

    ${({$releaseResponsiveness}) => $releaseResponsiveness && `
        @media (max-width: 600px) {  
            margin-top: 5px;
            width: 100%;   
        }    
    `}
`