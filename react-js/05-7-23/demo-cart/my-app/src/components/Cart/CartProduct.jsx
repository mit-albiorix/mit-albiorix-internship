import React from 'react'
import { useSearchParams } from 'react-router-dom'

function CartProduct() {
    const [searchparams] =useSearchParams();
  return (
    <>
        <h2 style={{textAlign:'center', marginTop:'10px'}}>Here! Your Product!</h2>
        <hr />
        {console.log("hbhjbhj",searchparams.get("id"))}
    </>
  )
}

export default CartProduct
