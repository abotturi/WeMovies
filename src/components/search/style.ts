import { styled } from "styled-components";

export const SearchMainContainer = styled('div')`
    margin-top: 10px;
    margin-bottom: 20px;
    position: relative;
`

export const SearchResultContainer = styled('div')`    
    margin-top: 10px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 600px) {
        flex-direction: column;
        align-items: flex-start;
    }
`

export const TextSearchResult = styled('p')`
    color: white;
    font-size: 16px;
    font-weight: 400;
`
export const NumberSearchResult = styled('p')`
    color: white;
    font-size: 16px;
    font-weight: 700;
`

export const SearchInput = styled('input')`
    width: 100%;
    height: 56px;
    padding: 16px;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 400;
    
    &::placeholder {
        color: #ccc;
    }

    @media (max-width: 600px) {  
        height: 48px;
    }
`

export const SearchIcon = styled('div')`
    width: 100%;
    height: 0;
    display: flex;
    justify-content: end;
    align-items: center;

    position: absolute;
    top: 28px;
    padding-right: 16px;

    @media (max-width: 600px) {  
        top: 24px;
    }
`;

export const BtnIcon = styled('button')`
    height: 24px;
    width: 24px;
`