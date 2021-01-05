import React, { Component } from 'react';
import  data from "./Data/data";

const ProductContext = React.createContext();



class ProductProvider extends Component {

  state = {
    products: data.products,
    detailsProducts: data.DetailsProducts
  }
handleDetail = ()=>{
  console.log("hello from handing a detaisl");
}

addToCart =()=>{
  console.log("hello from add to cart");
}

  render() {
    return (
      <ProductContext.Provider value={{...this.state,
      handleDetail: this.handleDetail, 
      addToCart: this.addToCart}}>
        {this.props.children}
      </ProductContext.Provider>
    )
  }
}

const ProductConsumer  = ProductContext.Consumer;

export { ProductProvider, ProductConsumer};
