import { styled } from "styled-components";
import { COLORS } from "../../styles/colors";
import { IPropsDivider } from "./interfaces/IPropsDivider";

export const DividerContainer = styled('div')<IPropsDivider>`
    width: ${({$width}) => $width || '50%'};
    height: ${({$height}) => $height || '2px'};
    border-radius: 5px;
    background-color: ${({$bgColor}) => $bgColor || '#3F3D56'};

    ${({$widthResponsiveness}) => $widthResponsiveness && `
        @media (max-width: 600px) {  
            width: ${$widthResponsiveness};   
        }    
    `}
`