import { useSelector,useDispatch } from 'react-redux';
import classes from './CartItem.module.css';
import { decreaseProductCart, increaseProductCart } from '../../store/cartSlice';

const CartItem = (props) => {
  let { id,title, quantity, total, price } = props.item;
  const dispatch =useDispatch()

  
 const increaseItem = (id)=>{
   dispatch(increaseProductCart(id))
 }

 const decreaseItem = (id) =>{
  dispatch(decreaseProductCart(id))
 }

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${price*quantity?.toFixed(2)}
          <span className={classes.itemprice}>(${price?.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={()=>{decreaseItem(id)}}>-</button>
          <button onClick={()=>{increaseItem(id)}}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
