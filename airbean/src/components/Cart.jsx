import { useSelector } from 'react-redux';
import bag from '/assets/bag.svg'
import './Cart.css'
import { useState } from 'react';

function Cart() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleBag = () => {
    setIsOpen(!isOpen);
  }

  const closeBag = () => {
    setIsOpen(false);
  }

  const cart = useSelector((state) => {
    return state.cart;
  });

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
            <br />{ cartItem.price}</li> 
            ) 
          )}
        </ul>
        <h4>Totalt</h4>
        <p>inkl moms + drönarleverans</p>
        <button className='pay-button'>Take my money!</button>
        </div>
       
    </nav>
    </div>
  );
}
export default Cart;

