import { useContext } from 'react'
import { CartContext } from "../../contexts/cart/cart.context"
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai'
import { CountContainer, TextCountContainer } from './style'
import { COLORS } from '../../styles/colors'
import { IPropsCountItens } from './interfaces/IPropsCountItens'

const CountItens = ({ movieData }: IPropsCountItens) => {
    const { addOne, removeOne, removeMovie } = useContext(CartContext)

    return (
        <CountContainer>
            <button onClick={() => removeOne(movieData.movie.id)}>
                <AiOutlineMinusCircle size={18} color={COLORS.third} />
            </button>

            <TextCountContainer>
                {movieData.count}
            </TextCountContainer>

            <button onClick={() => addOne(movieData.movie.id)}>
                <AiOutlinePlusCircle size={18} color={COLORS.third} />
            </button>
        </CountContainer>
    )
}

export default CountItens