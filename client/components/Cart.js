

import React from "react";
import { connect } from "react-redux";
import { getCartThunk } from "../store/cart";

class Cart extends React.Component {
  constructor(){
    super()
    this.state = {
      total: 0
    }
  }
  componentDidMount() {
    const { userId } = this.props.match.params;
    this.props.getCart(userId);
    
  }
  componentDidUpdate(prevProps){
    if (this.props !== prevProps) {
      const cartProducts = this.props.products
    if(cartProducts){
      const prices = this.props.products.map(product=> {return product.price})
      let total = prices.reduce((partialSum,a)=>partialSum+a,0)
      this.setState({total:total})
    }
    }
  }
  
  render() {
    
    const cartProducts = this.props.products
  
    

    return (
      <div>
        {cartProducts? 
        (<div>
            <h1>My Cart</h1>
            <div>
              {cartProducts.map(product=>{
                return (
                <div key={product.id}>
                  <span> <img
                        src={product.imageURL}
                        width="120"
                    /></span>
                    <span>{product.brandName} {product.productName} </span>
                    <span>${product.price}</span>
                </div>)
        })}
         </div>
         <h3>Total Price: ${this.state.total}</h3>
      </div>):
        (<h1>Your Cart is Empty!</h1>)
      }
        
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.cartReducer.products,
  user: state.user,
  
});

const mapDispatchToProps = (dispatch) => ({
  getCart: (userId) => dispatch(getCartThunk(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
