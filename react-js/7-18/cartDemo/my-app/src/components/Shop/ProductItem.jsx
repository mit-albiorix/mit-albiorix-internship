import { useDispatch } from 'react-redux';
import { addProduct } from '../../store/cartSlice';
import Card from '../UI/Card';
import classes from './ProductItem.module.css';

const ProductItem = (props) => {
  const {id, title, price, description } = props;
  const item = {id,title,price,description} 
  const dispatch =useDispatch()

  const productHandler = ()=>{
    console.log("clicked");
    dispatch(addProduct(item))
  }

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={productHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
