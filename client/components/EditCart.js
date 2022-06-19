import React from "react";
import { connect } from "react-redux";
import { getCartProductThunk } from "../store/cartProduct";


class Cart extends React.Component {
  constructor() {
    super();
   
  }
  componentDidMount() {
    
    this.props.getCartProduct(this.props.userId, this.props.productId);
   
  }
 

  render() {
   
    return (
      <div>
        <span>Qty: {this.props.cartProduct.quantity}</span>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  cartProduct: state.cartProductReducer,
});

const mapDispatchToProps = (dispatch) => ({
  getCartProduct: (userId, productId) =>
    dispatch(getCartProductThunk(userId, productId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
