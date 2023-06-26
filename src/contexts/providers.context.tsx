import { IPropsChildren } from "../interfaces/IPropsChildren";
import { CartContextProvider } from "./cart/cart.context";

const ProvidersContext = ({children}: IPropsChildren) => {
    return (
        <CartContextProvider>
            {children}
        </CartContextProvider>
    )
}

export default ProvidersContext