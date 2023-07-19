import ProductItem from './ProductItem';
import classes from './Products.module.css';

const dummyProducts = [
  {
    id : 'p1',
    title : "iphone",
    price : 30000,
    description:'This is a first product - amazing!'

  },
 {
    id : 'p2',
    title : "samusung",
    price : 30000,
    description:'This is a first product - amazing!'

  }, {
    id : 'p3',
    title : "one plus",
    price : 30000,
    description:'This is a first product - amazing!'

  }, {
    id : 'p4',
    title : "black berry",
    price : 30000,
    description:'This is a first product - amazing!'

  },
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {dummyProducts.map((product)=>{
          return (
            <ProductItem
            key = {product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
          )
        })}
       
           
      </ul>
    </section>
  );
};

export default Products;
