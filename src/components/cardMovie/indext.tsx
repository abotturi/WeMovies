import { useContext } from 'react'
import { IPropscardMovie } from "./interfaces/IPropscardMovie"
import { BtnAddItem, CardMainContainer, Icon, IconContainer, ImgMovie, NameMovie, PriceMovie } from "./style"
import { CartContext } from '../../contexts/cart/cart.context'

const CardMovie = ({movie}: IPropscardMovie) => {
    const { getMovieById, addMovie } = useContext(CartContext)
    const movieInCart = getMovieById(movie.id)

    const handleOnClick = () => {
        if(!movieInCart){
            addMovie(movie)
        }
    }   

    return (
        <CardMainContainer>
            <ImgMovie src={movie.image} alt="Image movie" />
            <NameMovie>{movie.title}</NameMovie>
            <PriceMovie>{movie.price.toLocaleString('pt-BR', {style: 'currency',  currency: 'BRL',})}</PriceMovie>
            <BtnAddItem $itemselect={movieInCart ? 1 : 0} onClick={handleOnClick}>
                <IconContainer>
                    <Icon src={require('../../assets/icons/cart.png')} />
                    {movieInCart ? movieInCart.count : 0}
                </IconContainer>
                {movieInCart ? 'ITEM ADICIONADO' : 'ADICIONAR AO CARRINHO'}
            </BtnAddItem>
        </CardMainContainer>
    )
}

export default CardMovie