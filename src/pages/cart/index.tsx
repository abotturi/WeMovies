import { useContext } from 'react'
import { CartContext } from "../../contexts/cart/cart.context"
import MainLayout from "../../layouts/mainLayout"
import { CardFooter, CartContainer, CartEmpty, CartHeader, Img, InfoContainer, TextContainer, TextHeader, TextPrice, TextTotal, TitleEmpty } from './style'
import Divider from '../../components/divider'
import Button from '../../components/button'
import { useNavigate } from 'react-router-dom'
import PriceCard from './priceCard/indext'

const CartPage = () => {
    const { cart, getTotal, clearItens } = useContext(CartContext)
    const navigate = useNavigate()

    const handleBack = () => {
        navigate('/')
    }

    const handleOnClick = () => {
        clearItens()
        navigate('/confirmation')
    }

    if(cart.length === 0){
        return (
            <MainLayout>
                <CartEmpty>
                    <TitleEmpty>
                        Parece que não há nada por aqui :(
                    </TitleEmpty>
                    <Img src={require('../../assets/imgs/cart_empty.png')} />
                    <Divider $widthResponsiveness='200%' />
                    <Button onClick={handleBack} text='VOLTAR' />
                </CartEmpty>
            </MainLayout>
        ) 
    }

    return (
        <MainLayout>
            <CartContainer>                
                <CartHeader>
                    <TextHeader>PRODUTO</TextHeader>
                    <TextHeader>QTD</TextHeader>
                    <TextHeader>SUBTOTAL</TextHeader>
                </CartHeader>

                <InfoContainer>
                    {
                        cart.map((item, idx) => <PriceCard key={idx} item={item}  />)
                    }
                </InfoContainer>

                <Divider $width={'100%'} $bgColor='#999' />

                <CardFooter>
                    <TextContainer>
                        <div />
                        <TextTotal>TOTAL</TextTotal>
                        <TextPrice>{getTotal().toLocaleString('pt-BR', {style: 'currency',  currency: 'BRL',})}</TextPrice>
                    </TextContainer>
                    <Button text='FINALIZAR PEDIDO' onClick={handleOnClick} releaseResponsiveness />
                </CardFooter>
            </CartContainer>
        </MainLayout>
    )
}

export default CartPage