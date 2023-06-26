import { styled } from "styled-components";

export const LoadingImg = styled('img')`
    @keyframes rotate {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

    width: 62px;
    height: 62px;
    animation: rotate 2s linear infinite;
`