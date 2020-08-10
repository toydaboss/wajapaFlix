import React from "react";

function Fourth() {
  return (
    <div class="section-four">
        <div><h2>Frequently Asked Questions</h2></div>
        <br></br>
        <div className="row">
            <a href="#" >
                What is Netflix? <i className="fas fa-plus btn-icon"> </i>
            </a>
        </div>
        <div className="row">
            <a href="#">
                How much does Netflix cost? <i className="fas fa-plus btn-icon"> </i>
            </a>
        </div>
        <div className="row">
            <a href="#">
                Where can I watch Netflix? <i className="fas fa-plus btn-icon"> </i>
            </a>
        </div>
        <div className="row">
            <a href="#">
                How do I cancel Netflix? <i className="fas fa-plus btn-icon"> </i>
            </a>
        </div>
        <div className="row">
            <a href="#">
                What can I watch on Netflix? <i className="fas fa-plus btn-icon"> </i>
            </a>
        </div>
        <div>
                <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
            <input type="email" name="email" id=""/><a href="#" className="btn btn-xl">
                Get Started<i class="fas fa-chevron-right btn-icon"> </i>
            </a>
        </div>
        <br></br>
        <br></br>
        <br></br>
        
        <br></br>
    </div>
  );
}

export default Fourth;
