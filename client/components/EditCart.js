import React from "react";
import { connect } from "react-redux";
import { getCartProductThunk } from "../store/cartProduct";
import { addToCartThunk } from "../store/cart";


class EditCart extends React.Component {
  constructor() {
    super();
    // this.handleAdd = this.handleAdd.bind(this);
  }
  componentDidMount() {
    
    this.props.getCartProduct(this.props.userId, this.props.cartId);
   
  }

  // handleAdd(userId,productId){
  //   // const productId = event.target.value;
  //   // const userId = 1;
  //   // const userId=this.props.userId
  //   // const productId=this.props.productId

  //   // this.props.addToCart(this.props.userId,this.props.cartId);

  // }
 

  render() {
   console.log('cartProduct',this.props.cartProduct)
    return (
      <div>
        <button> + </button>
        {this.props.cartProduct ?
        <div>
          {this.props.cartProduct.map((product)=>{
            if(parseInt(product.productId)=== parseInt(this.props.productId)){
              return  (
              <div key = {product.productId}> 
              <span>Qty:{product.quantity}</span>
              </div>
              )
            }
           })
          }
        </div>
        :(<p>-</p>)
        }
          <button onClick={()=>handleReduce()}> - </button>
       
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  cartProduct: state.cartProductReducer,
});

const mapDispatchToProps = (dispatch) => ({
  getCartProduct: (userId, cartId) =>
    dispatch(getCartProductThunk(userId, cartId)),
  addToCart: (userId, productId) =>
    dispatch(addToCartThunk(userId, productId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditCart);
