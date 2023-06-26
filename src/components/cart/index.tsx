import { useContext } from 'react'
import { CartMainContainer, Icon, ItensCart, TitleCart } from "./style"
import { CartContext } from '../../contexts/cart/cart.context'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
    const { cart } = useContext(CartContext)
    const navigate = useNavigate()

    const handleOnClick = () => {
        navigate('/cart')
    }

    return (
        <CartMainContainer onClick={handleOnClick}>
            <div>
                <TitleCart>Meu Carrinho</TitleCart>
                <ItensCart>{cart.length} itens</ItensCart>
            </div>
            <div>
                <Icon src={require('../../assets/icons/bag.png')} />
            </div>
        </CartMainContainer>
    )
}

export default Cart