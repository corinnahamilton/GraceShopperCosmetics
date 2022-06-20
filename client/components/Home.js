import React from "react";
import { connect } from "react-redux";
import SimpleImageSlider from "react-simple-image-slider";

const images = [
    {
        url: "https://images.pexels.com/photos/1161934/pexels-photo-1161934.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
        url: "https://images.unsplash.com/photo-1613255348289-1407e4f2f980?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2030&q=80",
    },
    {
        url: "https://images.pexels.com/photos/6479582/pexels-photo-6479582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
        url: "https://images.pexels.com/photos/4938198/pexels-photo-4938198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
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
                height={740}
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
