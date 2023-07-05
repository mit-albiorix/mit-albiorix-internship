import React, { useContext } from 'react'

//for card
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
// import d from './../../static/images/'

import './Cart.css'
import { Button, Container } from 'react-bootstrap'
import isAdminContext from '../../context/isAdmin';

function Cart() {
  // const [ctx,ctx1,ctx2] =useContext(isAdminContext);
  // const [ctx, setProductCount, setProductForCart] = useContext(isAdminContext);
  // console.log("ctx",ctx);
  // console.log("products finnnkdmdskmflksdm",ctx.productsForCart);

  
    const theme = useTheme();

    const productsstr = localStorage.getItem("productsOfCart");
    const products =JSON.parse(productsstr);
    console.log("products from lcoastorage",products);
  return (
   <>
   
       <h1 className='headingCart'>Your Products In Cart!</h1>
       <hr />
       <Container >
       {products.map((product,index)=>{
        return(
         <React.Fragment key={index}>
          <Card sx={{ display: 'flex' }} >
          <CardMedia
           component="img"
           sx={{ width: 151 }}
           image={product.image}
          
           alt="headphone"
         />
         <Box sx={{ display: 'flex', flexDirection: 'column' }}>
           <CardContent sx={{ flex: '1 0 auto' }}>
             <Typography component="div" variant="h5">
             {product.description}
             </Typography>
             <Typography variant="subtitle1" color="text.secondary" component="div">
              {product.title}
             </Typography>
           </CardContent>
           
           <div className="footer" style={{marginLeft:"6px"}}>
           <Button  variant="text" style={{maxWidth:"100px",color:"blue"}}>Qty</Button>
           <Button  variant="text" style={{maxWidth:"100px",color:"blue"}}>Delete</Button>
           </div>
          
         </Box>
      
       </Card>
       <br />
       </React.Fragment>
          
        );

       })}
     </Container>

   </>
  )
}

export default Cart
