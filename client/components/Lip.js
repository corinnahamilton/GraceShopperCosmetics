import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchProducts } from "../store/products";

class Lip extends React.Component {
    componentDidMount() {
        this.props.fetchProducts();
    }

    render() {
        const lipProducts = this.props.products.filter(
            (product) => product.productType === "lip"
        );

        return (
            <div>
                <h2>Lip</h2>
                <div>
                    {lipProducts.length ? (
                        lipProducts.map((product) => {
                            return (
                                <div key={product.id}>
                                    <Link to={`/products/${product.id}`}>
                                        <img
                                            src={product.imageURL}
                                            width="164"
                                        />
                                    </Link>

                                    <p>{product.brandName}</p>

                                    <Link to={`/products/${product.id}`}>
                                        <p>{product.productName}</p>
                                    </Link>

                                    <p>${product.price}</p>
                                </div>
                            );
                        })
                    ) : (
                        <h2>Lip products</h2>
                    )}
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => ({ products: state.products });

const mapDispatchToProps = (dispatch) => ({
    fetchProducts: () => dispatch(fetchProducts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Lip);
