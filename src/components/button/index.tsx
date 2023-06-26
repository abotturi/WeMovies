import { IPropsButton } from "./interfaces/IPropsButton"
import { BtnContainer } from "./style"

const Button = ({onClick, text, releaseResponsiveness}: IPropsButton) => {
    return (
        <BtnContainer onClick={onClick} $releaseResponsiveness={releaseResponsiveness}>
            {text}
        </BtnContainer>
    )
}

export default Button