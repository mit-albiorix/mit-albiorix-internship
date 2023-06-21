import React from 'react'

function Excercise(props) {
  return (
    <div>
       
        <h1>{props.product.title}</h1>
        <p>{props.product.price}</p>
        <h3>{props.product.info}</h3>

    </div>
  )
}

export default Excercise
