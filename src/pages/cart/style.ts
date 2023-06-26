import { styled } from "styled-components";
import { COLORS } from "../../styles/colors";

export const CartEmpty = styled('div')`
    background-color: ${COLORS.second};
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    padding: 64px;
    gap: 32px;
    overflow: hidden;

    @media (max-width: 600px) {  
        padding: 64px 64px 32px 64px;
    }
`

export const CartContainer = styled('div')`
    background-color: ${COLORS.second};
    padding: 24px;
    border-radius: 4px;
    width: 100%;

    @media (max-width: 600px) {  
        flex-direction: column;
        padding: 16px;
    }
`

export const CartHeader = styled("header")`
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 20px;
    margin-bottom: 10px;

    @media (max-width: 600px) {
        display: none;    
    }
`

export const TextHeader = styled('p')`
    font-size: 14px;
    font-weight: 700;
    color: #999;
`

export const InfoContainer = styled('div')`
    display: flex;
    flex-direction: column;
    gap: 17px;
    margin-bottom: 25px;

    @media (max-width: 600px) {  
        min-height: 60vh;
    }
`

export const CardFooter = styled('footer')`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 15px;

    @media (max-width: 600px) {  
        flex-direction: column;
    }
`

export const TextContainer = styled('div')`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 16px;

    @media (max-width: 600px) {  
        width: 100%;
        justify-content: space-between;
    }
`

export const TextTotal = styled("p")`
    font-size: 14px;
    font-weight: 700;
    color: #999;

    @media (max-width: 600px) {  
        position: relative;
        left: 50px;
    }
`

export const TextPrice = styled('p')`
    font-size: 24px;
    font-weight: 700;
    color: #2F2E41;
`

export const TitleEmpty = styled('p')`
    font-size: 20px;
    font-weight: 700;
    color: #2F2E41;

    @media (max-width: 600px) {
        text-align: center;
    }
`

export const Img = styled("img")`
    width: 178px;
    height: 264px;
`