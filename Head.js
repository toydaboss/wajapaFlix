import React from "react";
import Logo from "../../images/loogo.png";

function Head() {
  return (
    <div className="header">
        <div className="header1">
            <div>
                <img src={Logo} alt="" srcset=""/>
            </div>
            <div>
                <a href="#" className="btn btn-rounded">
                    Sign In
                </a>
            </div>
        </div>
        <div className="header2">
            <div>
                <h1>Unlimited movies, TV <br></br> shows, and more.</h1>
                <p>Watch anywhere. Cancel anytime</p>
            </div>
            <div class="header2-1">
                <div>
                    <input type="email" name="email" id="" placeholder='Email address'/>
                </div>
                <div>
                    <a href="#" className="btn btn-xl">
                        Get Started<i className="fas fa-chevron-right btn-icon"> </i>
                    </a>
                </div>
            </div>
                
        </div>
    </div>
  );
}

export default Head;
