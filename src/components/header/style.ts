import { styled } from "styled-components";
import { COLORS } from "../../styles/colors";

export const HeaderMainContainer = styled('header')`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 75px;
`

export const TitleHeader = styled('p')`
    font-size: 25px;
    color: ${COLORS.second};
    font-weight: 700;
`