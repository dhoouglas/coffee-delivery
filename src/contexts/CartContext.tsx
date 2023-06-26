import { ReactNode, createContext, useState } from "react";
import { Coffee } from "../pages/Home/components/CoffeeCard";
import { produce } from "immer";

export interface CartItem extends Coffee {
    quantity: number;
}

interface CartContextType {
    cartItems: CartItem[];
    cartQuantity: number;
    addCoffeeToCart: (coffee: CartItem) => void;
    changeCartItemQuantity: (CartItemId: number, type: 'increase' | 'decrease') => void;
    removeCartItem: (CartItemId: number) => void;
}

interface CartContextProviderProps {
    children: ReactNode, 
};

export const CartContext = createContext({} as CartContextType);

export function CartContextProvider({ children }: CartContextProviderProps) {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    function addCoffeeToCart(coffee: CartItem) {
        const coffeeAlreadyExistsInCart = cartItems.findIndex((cartItem) => cartItem.id === coffee.id);

        const newCart = produce(cartItems, (draft) => {
            if (coffeeAlreadyExistsInCart < 0) {
                draft.push(coffee);
            } else {
                draft[coffeeAlreadyExistsInCart].quantity += coffee.quantity;
            }
        });

        setCartItems(newCart);
    }

    function changeCartItemQuantity(cartItemId: number, type: 'increase' | 'decrease') {
        const newCart = produce(cartItems, (draft) => {
            const coffeeExistsInCart = cartItems.findIndex((cartItem) => cartItem.id === cartItemId);

            if (coffeeExistsInCart >= 0) {
                const item = draft[coffeeExistsInCart]
                draft[coffeeExistsInCart].quantity = type === 'increase' ? item.quantity + 1 : item.quantity - 1;
            }
        });

        setCartItems(newCart);
    }

    function removeCartItem(cartItemId: number) {
        const newCart = produce(cartItems, (draft) => {
            const coffeeExistsInCart = cartItems.findIndex((cartItem) => cartItem.id === cartItemId);

            if (coffeeExistsInCart >= 0) {
                draft.splice(coffeeExistsInCart, 1);
            }
        });

        setCartItems(newCart);
    }

    const cartQuantity = cartItems.length;

    return (
        <CartContext.Provider value={{ cartItems, cartQuantity, addCoffeeToCart, changeCartItemQuantity, removeCartItem }}>
            {children}
        </CartContext.Provider>
    )
}