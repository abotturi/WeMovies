import { useContext } from 'react'
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai';
import { BiSolidTrashAlt } from 'react-icons/bi';
import { CountContainer, CountMobile, DivContainer, HeaderMobile, ImgMobileContainer, ImgMovie, InfosMovieContainer, MovieInfoContainer, PriceCardContainer, SubTotalContainer, TextInfo, TextInfoContainer, TextSubTotal } from "./style"
import { COLORS } from "../../../styles/colors";
import { ICountMovie } from "../../../interfaces/ICountMovie";
import { CartContext } from "../../../contexts/cart/cart.context";
import CountItens from '../../../components/countItens';

interface IPropsPriceCard {
    item: ICountMovie
}

const PriceCard = ({ item }: IPropsPriceCard) => {
    const { addOne, removeOne, removeMovie } = useContext(CartContext)

    return (
        <PriceCardContainer>
            <ImgMobileContainer>            
                <ImgMovie src={item.movie.image} />
            </ImgMobileContainer>
            
            <InfosMovieContainer>
                <HeaderMobile>
                    <TextInfo style={{flex: 2}}>{item.movie.title}</TextInfo>
                    <TextInfo style={{flex: 1}}>{item.movie.price.toLocaleString('pt-BR', {style: 'currency',  currency: 'BRL',})}</TextInfo>
                    <button onClick={() => removeMovie(item.movie.id)}>
                        <BiSolidTrashAlt size={18} color={COLORS.third} />
                    </button>
                </HeaderMobile>
                <CountMobile>
                    <CountItens movieData={item} />
                    <SubTotalContainer>
                        <TextSubTotal>SUBTOTAL</TextSubTotal>
                        <TextInfo>{item.movie.price.toLocaleString('pt-BR', {style: 'currency',  currency: 'BRL',})}</TextInfo>
                    </SubTotalContainer>
                </CountMobile>
            </InfosMovieContainer>

            <MovieInfoContainer>
                <ImgMovie src={item.movie.image} />
                <TextInfoContainer>
                    <TextInfo>{item.movie.title}</TextInfo>
                    <TextInfo>{item.movie.price.toLocaleString('pt-BR', {style: 'currency',  currency: 'BRL',})}</TextInfo>
                </TextInfoContainer>
            </MovieInfoContainer>
            <DivContainer>
                <CountItens movieData={item} />
            </DivContainer>
            <DivContainer>                
                <TextInfo>{(item.count * item.movie.price).toLocaleString('pt-BR', {style: 'currency',  currency: 'BRL',})}</TextInfo>
            </DivContainer>
            <DivContainer>
                <button onClick={() => removeMovie(item.movie.id)}>
                    <BiSolidTrashAlt size={18} color={COLORS.third} />
                </button>
            </DivContainer>
        </PriceCardContainer>
    )
}

export default PriceCard