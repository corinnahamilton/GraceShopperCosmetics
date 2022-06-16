import React from "react";
import { connect } from "react-redux";
import { oneProduct } from "../store/singleProduct";

class SingleProduct extends React.Component {
    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.oneProduct(id);
    }

    render() {
        const product = this.props.product;
        //add to cart button and functionality needed
        return (
            <div>
                <h3>{product.productType}</h3>
                <h2>{product.brandName}</h2>
                <h1>{product.productName}</h1>
                <h4>{product.description}</h4>
                <h2>{product.price}</h2>
                <h2>
                    <img src={product.imageURL} width="200" />
                </h2>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    product: state.singleProductReducer,
});

const mapDispatchToProps = (dispatch) => {
    return {
        oneProduct: (id) => dispatch(oneProduct(id)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct);
