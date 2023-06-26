import { styled } from "styled-components";

export const PriceCardContainer = styled('div')`    
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 20px;

    @media (max-width: 600px) {          
        display: flex;       
        height: 85px; 
    }
`

export const MovieInfoContainer = styled('div')`
    gap: 52px;
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;    

    @media (max-width: 600px) {  
        display: none
    }
`

export const ImgMovie = styled('img')`
    width: 89px;
    height: 114px;

    @media (max-width: 600px) {  
        width: 64px;
        height: 82px;
    }
`

export const TextInfoContainer = styled('div')`
    @media (max-width: 600px) {  
        display: none;
    }
`

export const TextInfo = styled('p')`
    font-size: 14px;
    font-weight: 700;
`

export const DivContainer = styled('div')`
    display: flex;
    align-items: center;

    @media (max-width: 600px) {  
        display: none;
    }
`

export const CountContainer = styled('div')`
    display: flex;
    align-items: center;
    height: 26px;
    width: 62px;
    margin-left: 10px;
    margin-right: 10px;
    padding: 16px;
    border: 1px solid #d9d9d9;
    border-radius: 4px;
`

export const InfosMovieContainer = styled('div')`
    display: none;

    @media (max-width: 600px) {  
        display: flex;
        flex-direction: column;
        width: 100%;
        padding-left: 10px;
        padding-right: 5px;
    }
`

export const ImgMobileContainer = styled('div')`
    display: none;

    @media (max-width: 600px) {  
        display: block;
    }
`

export const HeaderMobile = styled('header')`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: flex-start;
`

export const CountMobile = styled('div')`
    display: flex;
    flex: 1;
`

export const SubTotalContainer = styled('div')`
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: end;
`

export const TextSubTotal = styled('p')`
    font-size: 12px;
    font-weight: 700;
    color: #999;
`