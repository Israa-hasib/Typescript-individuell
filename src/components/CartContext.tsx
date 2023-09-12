import React, { createContext, useReducer, Dispatch, ReactNode } from 'react';


interface Product {
  id: number;
  name: string;
  price: number;
}

interface CartItem {
  product: Product;
  quantity: number;
}

interface CartState {
  cartItems: CartItem[];
}

interface Action {
  type: string;
  payload?: any;
}

const initialState: CartState = {
  cartItems: [{
    product: {
      id: 0,
      name: "Name",
      price: 300
    },
    quantity: 1
  }],
};

const cartReducer = (state: CartState, action: Action): CartState => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      const newItem = action.payload;
      const existingItem = state.cartItems.find(item => item.product.id === newItem.product.id);

      if (existingItem) {
        return {
          ...state,
          cartItems: state.cartItems.map(item =>
            item.product.id === existingItem.product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, { product: newItem.product, quantity: 1 }],
        };
      }

    case 'REMOVE_PRODUCT':
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.product.id !== action.payload),
      };

    case 'INCREMENT_QUANTITY':
      return {
        ...state,
        cartItems: state.cartItems.map(item =>
          item.product.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
        ),
      };

    case 'DECREMENT_QUANTITY':
      return {
        ...state,
        cartItems: state.cartItems.map(item =>
          item.product.id === action.payload ? { ...item, quantity: item.quantity - 1 } : item
        ),
      };

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

const CartContext = createContext<{ state: CartState; dispatch: Dispatch<Action> }>({
  state: initialState,
  dispatch: () => null,
});

interface CartProviderProps {
  children: ReactNode;
}

const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return <CartContext.Provider value={{ state, dispatch }}>{children}</CartContext.Provider>;
};

export { CartContext, CartProvider };
