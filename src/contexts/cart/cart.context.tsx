import { createContext, useState } from "react";
import { IPropsChildren } from "../../interfaces/IPropsChildren";
import { IMovie } from "../../interfaces/IMovie";
import { ICountMovie } from "../../interfaces/ICountMovie";

interface ICartContext {
    cart: ICountMovie[],
    addOne: (movieId: number) => void,
    removeOne: (movieId: number) => void,
    addMovie: (movie: IMovie) => void,
    removeMovie: (movieId: number) => void,
    getMovieById: (movieId: number) => ICountMovie | null,
    getTotal: () => number,
    clearItens: () => void
}

export const CartContext = createContext<ICartContext>({} as ICartContext)

export const CartContextProvider = ({ children }: IPropsChildren) => {
    const [cart, setCart] = useState<ICountMovie[]>([])

    const addOne = (movieId: number) => {
        setCart(current => current.map(item => item.movie.id === movieId ? {...item, count: item.count + 1} : item))
        
    }

    const removeOne = (movieId: number) => {
        setCart(current => current.map(item => item.movie.id === movieId && item.count > 1 ? {...item, count: item.count - 1} : item))        
    }

    const addMovie = (movie: IMovie) => {
        setCart(current => [...current, {count: 1, movie}])
    }

    const removeMovie = (movieId: number) => {
        setCart(current => current.filter(cart => cart.movie.id !== movieId))
    }

    const getMovieById = (movieId: number) => {
        const movieSelect = cart.filter(item => item.movie.id === movieId)

        if(movieSelect.length > 0){
            return movieSelect[0]
        }

        return null
    }

    const getTotal = () => {
        let total = 0

        for(let i = 0; i < cart.length; i++){
            total += cart[i].count * cart[i].movie.price
        }

        return total
    }

    const clearItens = () => {
        setCart([])
    }

    return (
        <CartContext.Provider value={{
            cart,
            addOne,
            removeOne,
            addMovie,
            removeMovie,
            getMovieById,
            getTotal,
            clearItens
        }}>
            {children}
        </CartContext.Provider>
    )
}