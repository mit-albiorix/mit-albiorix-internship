import React from 'react'

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


import './Cart.css'
import { Button, Container } from 'react-bootstrap'

function Cart() {
    const theme = useTheme();
  return (
   <>
       <h1 className='headingCart'>Your Products In Cart!</h1>
       <hr />
       <Container >
       <Card sx={{ display: 'flex' }}>
       <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={require("./../../static/images/headphone.png")}
        alt="headphone"
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
          Headphonelorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet officia officiis, eum doloribus quasi possimus reiciendis ea, quidem vitae nam optio vel ipsum fugit.
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
           Headphone
          </Typography>
        </CardContent>
        
        <div className="footer" style={{marginLeft:"6px"}}>
        <Button  variant="text" style={{maxWidth:"100px",color:"blue"}}>Qty</Button>
        <Button  variant="text" style={{maxWidth:"100px",color:"blue"}}>Delete</Button>
        </div>
       
      </Box>
   
    </Card>
       </Container>

   </>
  )
}

export default Cart
