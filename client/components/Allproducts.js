import React from "react";
import { fetchProducts } from "../store/products";
import { connect } from "react-redux";

class AllProducts extends React.Component {
    componentDidMount() {
        this.props.fetchProducts();
    }

    render() {
        return (
            <div>
                <ul>
                    {this.props.products.map((product) => (
                        <li key={product.id}>
                            {`${product.brandName} ${product.productName} $${product.price}`}
                            <img src={product.imageURL} width="164" />
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products,
    };
};

const mapDispatchToProps = (dispatch) => ({
    fetchProducts: () => dispatch(fetchProducts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AllProducts);
