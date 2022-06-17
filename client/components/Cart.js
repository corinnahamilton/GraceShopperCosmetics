import React from "react";
import { connect } from "react-redux";
import { getCartThunk } from "../store/cart";

class Cart extends React.Component {
  componentDidMount() {
    const { userId } = this.props.match.params;
    this.props.getCart(userId);
  }
  render() {
    return (
      <div>
        <h1>Hello hey</h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.products,
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  // fetchProducts: () => dispatch(fetchProducts()),
  getCart: (userId) => dispatch(getCartThunk(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
