import { styled } from "styled-components";

export const HomeContainer = styled('div')`
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(4, 1fr);

    @media (max-width: 1850px) {  
        grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 1380px) {  
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 900px) {  
        grid-template-columns: repeat(1, 1fr);
    }
`

export const ItemContainer = styled('div')`
    width: 100%;
`