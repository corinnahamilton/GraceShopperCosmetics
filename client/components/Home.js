import React from "react";
import { connect } from "react-redux";

/**
 * COMPONENT
 */
export const Home = (props) => {
    const { username } = props;

    return (
        <div>
            <h3>Welcome, {username}</h3>
            <img
                src="https://images.unsplash.com/photo-1560129986-baba295cf72c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1058&q=80"
                width="1024"
            />
        </div>
    );
};

/**
 * CONTAINER
 */
const mapState = (state) => {
    return {
        username: state.auth.username,
    };
};

export default connect(mapState)(Home);
