import React from "react";
import ReactTable from "@kavience/react-table";
import ProductTable from "./ProductTable";
import { fetchProducts } from "../store/products";
import { fetchUsers } from "../store/createUser";
import { connect } from "react-redux";

class Admin extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <ProductTable />
                </div>
            </div>
        );
    }
}

export default Admin;
