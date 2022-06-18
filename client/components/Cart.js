import React from "react";
import { connect } from "react-redux";
import { deleteFromCartThunk, getCartThunk } from "../store/cart";
import { getCartProductThunk } from "../store/cartProduct";
import EditCart from "./EditCart";

class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      total: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    const { userId } = this.props.match.params;
    const cartId = 1;
    this.props.getCart(userId);
    this.props.getCartProduct(userId, cartId);
  }

  handleClick(event) {
    const productId = event.target.value;
    const cartId = 1;
    this.props.deleteFromCart(cartId, productId);
  }

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      const cartProducts = this.props.products;
      if (cartProducts) {
        const prices = this.props.products.map((product) => {
          return product.price;
        });
        let total = prices.reduce((partialSum, a) => partialSum + a, 0);
        this.setState({ total: total });
      }
    }
  }

  render() {
    const cartProducts = this.props.products;
    return (
      <div>
        {cartProducts ? (
          <div>
            <h1>My Cart</h1>
            <div>
              {cartProducts.map((product) => {
                return (
                  <div key={product.id}>
                    <span>
                      <img src={product.imageURL} width="120" />
                    </span>
                    <span>
                      {product.brandName} {product.productName}{" "}
                    </span>
                    <span>${product.price}</span>
                    <button
                      type="button"
                      value={product.id}
                      onClick={this.handleClick}
                    >
                      X
                    </button>
                    <EditCart productId={product.id} userId={1} />
                  </div>
                );
              })}
            </div>
            <h3>Total Price: ${this.state.total}</h3>
          </div>
        ) : (
          <h1>Your Cart is Empty!</h1>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.cartReducer.products,
  user: state.user,
  cart: state.cartReducer.cart,
  cartProduct: state.cartProductReducer,
});

const mapDispatchToProps = (dispatch) => ({
  getCart: (userId) => dispatch(getCartThunk(userId)),
  deleteFromCart: (cartId, productId) =>
    dispatch(deleteFromCartThunk(cartId, productId)),
  getCartProduct: (userId, productId) =>
    dispatch(getCartProductThunk(userId, productId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
