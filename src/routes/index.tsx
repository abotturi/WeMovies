import { Routes, Route } from 'react-router-dom'
import Home from '../pages/home'
import CartPage from '../pages/cart'
import Confirmation from '../pages/confirmation'

const AllRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<CartPage />} />
            <Route path='/confirmation' element={<Confirmation />} />
        </Routes>
    )
}

export default AllRoutes