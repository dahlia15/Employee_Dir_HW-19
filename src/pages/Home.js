import React from "react";
import image from "../dinoco_logo.jpg"



function Home() {
    return (
        <div className="about">
            <img src={image} alt="dino-logo"/>
            <h2 className="text" style={{color: "#8eae76"}}> Welcome to the Dino Co Employee Directory where you can find Names, Occupations and more in a flash!</h2>
            <br></br>
        </div>
    )
};

export default Home;