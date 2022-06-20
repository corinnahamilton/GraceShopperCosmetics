import React from "react";
import { connect } from "react-redux";
import SimpleImageSlider from "react-simple-image-slider";

const images = [
    {
        url: "https://images.unsplash.com/photo-1560129986-baba295cf72c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1058&q=80",
    },
    {
        url: "https://images.unsplash.com/photo-1613255348289-1407e4f2f980?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2030&q=80",
    },
    {
        url: "https://images.unsplash.com/photo-1596704017324-04757f3e4273?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80",
    },
    {
        url: "https://images.unsplash.com/photo-1551723454-7565a1f5b161?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
    },
    {
        url: "https://images.unsplash.com/photo-1535683577427-740aaac4ec25?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
    },
];

const ImageSlider = () => {
    return (
        <div>
            <SimpleImageSlider
                width={780}
                height={960}
                images={images}
                showBullets={true}
                showNavs={true}
            />
        </div>
    );
};

export const Home = (props) => {
    const { username } = props;

    return (
        <div>
            <h3>Welcome, {username}</h3>
            <ImageSlider />
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
