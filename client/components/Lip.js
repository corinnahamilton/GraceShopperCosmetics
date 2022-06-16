import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Lip extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchProducts({
            where: {
                productType: "Lip",
            },
        });
    }

    render() {
        return (
            <div>
                <h1>Lip</h1>
                <Link to={`/products/${this.props.product.id}`}>
                    <img src={this.props.product.imageURL} width="164" />
                </Link>
                <p>{this.props.product.brandName}</p>
                <Link to={`/products/${this.props.product.id}`}>
                    <p>{this.props.product.productName}</p>
                </Link>
                <p>{this.props.product.productName}</p>
                <p>{this.props.product.price}</p>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({ products: state.products });

const mapDispatchToProps = (dispatch) => {
    return {
        fetchProducts: () => dispatch(fetchProducts()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Lip);
