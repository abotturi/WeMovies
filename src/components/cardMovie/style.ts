import { styled } from "styled-components";
import { COLORS } from "../../styles/colors";

export const CardMainContainer = styled('header')`
    width: 100%;
    padding: 10px 11px 10px 11px;
    background-color: ${COLORS.second};
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const ImgMovie = styled('img')`
    width: 147px;
    height: 188px;
`

export const NameMovie = styled('p')`
    font-size: 12px;
    font-weight: 700;
    margin-top: 7px;
    margin-bottom: 5px;
`

export const PriceMovie = styled('p')`
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 7px;
`

export const BtnAddItem = styled('button')<{$itemselect: 0 | 1}>`
    background-color: ${({$itemselect}) => $itemselect ? '#039B00' : COLORS.third};
    color: ${COLORS.second};
    font-size: 12px;
    font-weight: 700;
    height: 40px;
    width: 287px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    gap: 12px;

    @media (max-width: 340px) {  
        height: 48px;        
        width: 100%;
    }
`

export const IconContainer = styled('div')`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 4px;
`

export const Icon = styled('img')`
    width: 13px;
    height: 13px;
`