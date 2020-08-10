import React from "react";
import Device from "../../images/device-pile.png";

function Third() {
  return (
    <div className="section-three">
        <div>
            <h2>Watch everywhere.</h2>
            <p>Stream unlimited movies and TV shows on <br></br> your phone, tablet, laptop, and TV without <br></br> paying more.</p>
        </div>
        <div>
            <img src={Device} alt="" srcset=""/>
        </div>
    </div>
  );
}

export default Third;
