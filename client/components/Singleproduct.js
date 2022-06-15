import React from 'react';
import { connect } from 'react-redux';
import productReducer from '../client/store/singleProduct';

class singleProduct extends React.Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchedOneProduct(id);
  }

  render() {
    const product = this.props.product;
    //add to cart button and functionality needed
    return (
      <div>
        <h2>{product.brandName}</h2>
        <h1>{product.productName}</h1>
        <h3>{product.productType}</h3>
        <h2>{product.description}</h2>
        <h2>{product.price}</h2>
        <h2>
          <img src={product.imageURL} />
        </h2>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  product: state.product,
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchedOneProduct: (id) => dispatch(productReducer(id)),
  };
};

export default connect(mapStateToProps, mapDisaptchToProps)(SingleProduct);
