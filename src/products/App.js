import React from 'react'
import products from './productsData'
import ProductDisplay from './ProductDisplay'

class App extends React.Component{

  render(){ 
    const display = 
      products.map(data => 
        <ProductDisplay key = {data.id} 
        name={data.name} 
        desc={data.description} price={data.price}/>)

    return(
      <div>{display}</div>
    )
  }
}
export default App
