import React from "react";
import { connect } from "react-redux";

class Cart extends React.Component {
    render() {}
}

const mapStateToProps = (state) => ({ products: state.products });

const mapDispatchToProps = (dispatch) => ({
    fetchProducts: () => dispatch(fetchProducts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
