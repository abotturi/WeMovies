import { styled } from "styled-components";

export const CountContainer = styled('div')`
    display: flex;
    align-items: center;
`

export const TextCountContainer = styled('div')`
    display: flex;
    align-items: center;
    height: 26px;
    width: 62px;
    margin-left: 10px;
    margin-right: 10px;
    padding: 16px;
    border: 1px solid #d9d9d9;
    border-radius: 4px;

    @media (max-width: 600px) { 
        width: 59px;
        padding: 0px 12px;
    }
`