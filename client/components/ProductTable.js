import React from "react";
import ReactTable from "@kavience/react-table";
import { fetchProducts } from "../store/products";
import { connect } from "react-redux";

const productColumn = [
    {
        title: "Brand Name",
        align: "center",
        width: 120,
        ellipsis: true,
        dataIndex: "brandName",
    },
    {
        title: "Product Name",
        dataIndex: "productName",
    },
    {
        title: "Product Type",
        dataIndex: "productType",
    },
    {
        title: "Price",
        dataIndex: "price",
    },
    {
        title: "Stock",
        dataIndex: "stock",
    },
];

class ProductTable extends React.Component {
    componentDidMount() {
        this.props.fetchProducts();
    }

    render() {
        return (
            <div>
                <h2>Product Table</h2>
                <ReactTable
                    size="mini"
                    bordered
                    rowKey="id"
                    columns={productColumn}
                    dataSource={this.props.products}
                />
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

export default connect(mapStateToProps, mapDispatchToProps)(ProductTable);
