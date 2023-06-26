import { styled } from "styled-components";
import { COLORS } from "../../styles/colors";

export const CartMainContainer = styled('button')`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
`

export const TitleCart = styled('p')`
    font-size: 19px;
    font-weight: 600;
    color: ${COLORS.second};
    
    @media (max-width: 600px) {
        display: none;    
    }
`

export const ItensCart = styled('p')`
    font-size: 12px;
    font-weight: 600;
    text-align: end;
    color: #999;
`

export const Icon = styled('img')`
    width: 32px;
    height: 32px
`