// src/contexts/CartContext.tsx
import React, { createContext, useContext, useReducer } from 'react';
import type {ReactNode} from "react";
import type { Product } from '../types';

export interface CartItem extends Product {
    quantity: number;
}

interface CartState {
    items: CartItem[];
    isOpen: boolean;
}

type CartAction =
    | { type: 'ADD_ITEM'; payload: Product }
    | { type: 'REMOVE_ITEM'; payload: number }
    | { type: 'UPDATE_QUANTITY'; payload: { id: number; quantity: number } }
    | { type: 'CLEAR_CART' }
    | { type: 'TOGGLE_CART' }
    | { type: 'SET_CART_OPEN'; payload: boolean };

const cartReducer = (state: CartState, action: CartAction): CartState => {
    switch (action.type) {
        case 'ADD_ITEM':
            { const existingItem = state.items.find(item => item.id === action.payload.id);
            if (existingItem) {
                return {
                    ...state,
                    items: state.items.map(item =>
                        item.id === action.payload.id
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    )
                };
            }
            return {
                ...state,
                items: [...state.items, { ...action.payload, quantity: 1 }]
            }; }

        case 'REMOVE_ITEM':
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload)
            };

        case 'UPDATE_QUANTITY':
            if (action.payload.quantity <= 0) {
                return {
                    ...state,
                    items: state.items.filter(item => item.id !== action.payload.id)
                };
            }
            return {
                ...state,
                items: state.items.map(item =>
                    item.id === action.payload.id
                        ? { ...item, quantity: action.payload.quantity }
                        : item
                )
            };

        case 'CLEAR_CART':
            return {
                ...state,
                items: []
            };

        case 'TOGGLE_CART':
            return {
                ...state,
                isOpen: !state.isOpen
            };

        case 'SET_CART_OPEN':
            return {
                ...state,
                isOpen: action.payload
            };

        default:
            return state;
    }
};

interface CartContextType {
    state: CartState;
    addItem: (product: Product) => void;
    removeItem: (id: number) => void;
    updateQuantity: (id: number, quantity: number) => void;
    clearCart: () => void;
    toggleCart: () => void;
    setCartOpen: (open: boolean) => void;
    totalItems: number;
    totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, {
        items: [],
        isOpen: false
    });

    const addItem = (product: Product) => {
        dispatch({ type: 'ADD_ITEM', payload: product });
    };

    const removeItem = (id: number) => {
        dispatch({ type: 'REMOVE_ITEM', payload: id });
    };

    const updateQuantity = (id: number, quantity: number) => {
        dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
    };

    const clearCart = () => {
        dispatch({ type: 'CLEAR_CART' });
    };

    const toggleCart = () => {
        dispatch({ type: 'TOGGLE_CART' });
    };

    const setCartOpen = (open: boolean) => {
        dispatch({ type: 'SET_CART_OPEN', payload: open });
    };

    const totalItems = state.items.reduce((total, item) => total + item.quantity, 0);

    const totalPrice = state.items.reduce((total, item) => {
        const price = parseFloat(item.price.replace('$', ''));
        return total + (price * item.quantity);
    }, 0);

    return (
        <CartContext.Provider value={{
            state,
            addItem,
            removeItem,
            updateQuantity,
            clearCart,
            toggleCart,
            setCartOpen,
            totalItems,
            totalPrice
        }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = (): CartContextType => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};