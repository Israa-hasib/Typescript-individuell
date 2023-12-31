import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const Cart: React.FC = () => {
  const { state, dispatch } = useContext(CartContext);

  const handleAddToCart = (product: Product) => {
    dispatch({ type: 'ADD_PRODUCT', payload: { product } });
  };

  const handleRemoveFromCart = (productId: number) => {
    dispatch({ type: 'REMOVE_PRODUCT', payload: productId });
  };

  const handleIncrementQuantity = (productId: number) => {
    dispatch({ type: 'INCREMENT_QUANTITY', payload: productId });
  };

  const handleDecrementQuantity = (productId: number) => {
    dispatch({ type: 'DECREMENT_QUANTITY', payload: productId });
  };

  return (
    <div>
      <h2>Cart</h2>
      <ul>
        <div className='cart'>
        {state.cartItems.map(item => (
          <li key={item.product.id}>
            {item.product.title} - {item.product.price} kr - Quantity: {item.quantity}
            <button onClick={() => handleIncrementQuantity(item.product.id)}>+</button>
            <button onClick={() => handleDecrementQuantity(item.product.id)}>-</button>
            <button onClick={() => handleRemoveFromCart(item.product.id)}>Remove Item</button>
          </li> 
        ))}
         </div>
      </ul>
    </div>
  );
};

export default Cart;