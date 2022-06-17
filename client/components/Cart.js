
import React from "react";
import { connect } from "react-redux";
import { getCartThunk } from "../store/cart";

class Cart extends React.Component {
  componentDidMount() {
    const { userId } = this.props.match.params;
    this.props.getCart(userId);
  }
  render() {
   
    
    const cartProducts = this.props.products
    console.log('props', cartProducts)

    return (
      <div>
        {cartProducts? 
        (<div>
            <h1>My Cart</h1>
            <div>
              {cartProducts.map(product=>{
                return (<div key={product.id}>
                    <img
                        src={product.imageURL}
                        width="164"
                    />
                    <p>{product.brandName}</p>
                    <p>{product.productName}</p>
                    <p>${product.price}</p>
                </div>)
        })}
         </div>
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
