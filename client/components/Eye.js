import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchProducts } from "../store/products";

class Eye extends React.Component {
    componentDidMount() {
        this.props.fetchProducts();
        // console.log(products);
        // let eyeproducts = products.filter(
        //     (product) => product.productType === "eye"
        // );
        // console.log(eyeproducts);
    }

    render() {
        const eyeProducts = this.props.products.filter(
            (product) => product.productType === "eye"
        );

        return (
            <div>
                <h2>Eye</h2>
                <div>
                    {eyeProducts.length ? (
                        eyeProducts.map((product) => {
                            return (
                                <div key={product.id}>
                                    <img src={product.imageURL} width="164" />

                                    <p>{product.brandName}</p>

                                    <p>{product.productName}</p>

                                    <p>{product.price}</p>
                                </div>
                            );
                        })
                    ) : (
                        <p>Eye products</p>
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

export default connect(mapStateToProps, mapDispatchToProps)(Eye);
