import { useDispatch, useSelector } from 'react-redux';
import bag from '/assets/bag.svg'
import arrowUp from '/assets/arrow-up.svg';
import arrowDown from '/assets/arrow-down.svg';
import './Cart.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  increaseQuantity,
  decreaseQuantity,
  removeProduct
} from '../reducers/cartReducer';

function Cart() {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const toggleBag = () => {
    setIsOpen(!isOpen);
  }

  const closeBag = () => {
    setIsOpen(false);
  }

  const cart = useSelector((state) => {
    return state.cart;
  });

  const totalSum = cart.cartItem.reduce((total, item) =>{
    return total + item.price * item.quantity;
  }, 0);
  

  return (
    <div>
       <p className='cart__amount'>{cart.cartItem.length}</p> 
    <button className='bag-button' onClick={toggleBag}>
    <img src={bag} alt="" />
    </button>
    <nav onClick={closeBag} className={`cart ${isOpen ? 'open' : ''}`}>
        <div className='bag-item'> 
        <h1>Din beställning</h1>
        <ul className='bag-list'>
          {cart.cartItem?.map((cartItem, id) =>(
            <li key={id}>{ cartItem.title} 
            <br />{ cartItem.price * cartItem.quantity} kr
            <aside className='item-quantity'>

          <img src={arrowUp} 
          alt='increase'
          onClick={() => {
            dispatch(increaseQuantity(cartItem.id));
          }} />{' '}

          <p className='quantity'>{cartItem.quantity}</p>
        
          <img src={arrowDown} 
          alt='decrease' 
          onClick={() => {
            if (cartItem.quantity === 1){
              dispatch(removeProduct(cartItem.id));
            } else{
              dispatch(decreaseQuantity(cartItem.id));
            }
          }}/>{' '}
          
        </aside>
            </li> 
            ) 
          )}
        </ul>
        <h4>Totalt: {totalSum} kr</h4>
        <p>inkl moms + drönarleverans</p>
        <Link to="/OrderStatus" className='pay-button'>Take my money!</Link>
        </div>
    </nav>
    </div>
  );
}
export default Cart;

