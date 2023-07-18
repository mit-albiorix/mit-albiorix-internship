import { toggle } from "../../store/uiSlice";
import classes from "./CartButton.module.css";
import {useDispatch} from 'react-redux'

const CartButton = (props) => {

  const dispatch =useDispatch()
  const toggleCart = ()=>{
    dispatch(toggle())
    
  }
  return (
    <button className={classes.button} onClick={toggleCart}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
