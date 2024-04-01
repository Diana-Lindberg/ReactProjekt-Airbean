import { useDispatch } from 'react-redux';
import { addToCart } from '../reducers/cartReducer';
import add from '/assets/add.svg'
import './Menus.css'

function Menus(props) {
  const dispatch = useDispatch();
  //console.log(props);

  function handleClick() {
    const item = {
      title: props.title,
      price: props.price,
    };

    dispatch(addToCart(item));
    
  }

  return (
    <article className='product'>
      <h2 className='product__title'>{props.title}</h2>
      <p className='product__price'>{props.price} kr</p>
        <button onClick={handleClick} className='add-button'>
          <img src={add} alt="" />
        </button>
    </article>
  );
}

export default Menus;