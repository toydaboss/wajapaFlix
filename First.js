import React from "react";
import Tv from "../../images/tv.png";

function First() {
  return (
    <div className="section-one">
        <div>
            <h2>Enjoy on your TV.</h2>
            <p>Watch on Smart TVs, Playstation, Xbox,<br></br> Chromecast, Apple TV, Blu-ray players, and <br></br> more.</p>
        </div>
        <div>
            <img src={Tv} alt="" srcset=""/>
        </div>
    </div>
  );
}

export default First;
