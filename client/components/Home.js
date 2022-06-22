import React from "react";
import { connect } from "react-redux";
import SimpleImageSlider from "react-simple-image-slider";

const images = [
    {
        url: "https://i.postimg.cc/jSCc8n2w/homeimg.png",
    },
    {
        url: "https://cdn.pixabay.com/photo/2021/01/06/07/52/lipsticks-5893476_1280.jpg",
    },
    {
        url: "https://images.pexels.com/photos/1161934/pexels-photo-1161934.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
        url: "https://images.pexels.com/photos/6479582/pexels-photo-6479582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
        url: "https://images.pexels.com/photos/4938198/pexels-photo-4938198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
        url: "https://images.pexels.com/photos/3689976/pexels-photo-3689976.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
];

const ImageSlider = () => {
    return (
        <div class="slides_container">
            <SimpleImageSlider
                width={1280}
                height={740}
                images={images}
                showBullets={true}
                showNavs={true}
            />
        </div>
    );
};

export const Home = (props) => {
    const { name, isLoggedIn } = props;

    return (
        <div>
            {isLoggedIn ? (
                <div>
                    <h1>Welcome {name}!</h1>
                    <ImageSlider />
                </div>
            ) : (
                <div>
                    <h1>Welcome!</h1>
                    <ImageSlider />
                </div>
            )}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        name: state.auth.name,
        isLoggedIn: !!state.auth.id,
    };
};

export default connect(mapStateToProps)(Home);
