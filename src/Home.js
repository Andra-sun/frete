import React from "react";
import Carousel from "./home/Carousel";
import S1 from "./home/S1";
import S2 from "./home/S2";
import S3 from "./home/S3";
import S5 from "./home/S5";

const Home = () => {
    return (
        <div>
            <S1 />
            <S2 />
            <S3 />
            <Carousel />
            <S5 />
        </div>
    );
};

export default Home;
