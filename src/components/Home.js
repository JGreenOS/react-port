/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import "../App.css";
import Coneflower from "../images/Coneflower3.JPG"

function Home() {
    return (
        <>
         <div className="container">
         <div className="jumbotron">
         <h3> Demonstration site for my projects</h3>
     
        <img src= {Coneflower} alt="Picture of a purple coneflower" class="responsive" />
        </div>
        </div>
    </>
    
    );
}


export default Home;