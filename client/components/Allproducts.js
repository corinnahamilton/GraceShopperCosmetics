import React from 'react';
import { fetchProducts } from '../store/products';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class AllProducts extends React.Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    return (
      <div>
        {this.props.products.map((product) => {
          return (
            <div key={product.id}>
              <Link to={`/products/${product.id}`}>
                <img src={product.imageURL} width='164' />
              </Link>
              <p>{product.brandName}</p>
              <Link to={`/products/${product.id}`}>
                <p>{product.productName}</p>
              </Link>
              <p>${product.price}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.products,
});

const mapDispatchToProps = (dispatch) => ({
  fetchProducts: () => dispatch(fetchProducts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AllProducts);
