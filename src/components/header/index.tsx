import { useNavigate } from "react-router-dom"
import Cart from "../cart"
import { HeaderMainContainer, TitleHeader } from "./style"

const Header = () => {
    const navigate = useNavigate()

    const handleOnClick = () => {
        navigate('/')
    }

    return (
        <HeaderMainContainer>
            <button onClick={handleOnClick}>
                <TitleHeader>
                    WeMovies
                </TitleHeader>
            </button>
            <Cart />
        </HeaderMainContainer>
    )
}

export default Header