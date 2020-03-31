import React from 'react'

const ProductDisplay = (props) => (
  <div>
    <h1>{props.name}</h1> 
    <h3>Price: {props.price}</h3>
    <p>{props.desc}</p>
  </div>

)
export default ProductDisplay
