/* jshint esversion:6 */
import React,{useState,useEffect} from 'react';

function Nav() {
    const [show,handleShow] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll",()=>{
            if(window.scrollY > 100){
                handleShow(true);
            } else handleShow(false);
        });
        return()=>{
            window.removeEventListener("scroll");
        };
    }, []);
    return (
        <div className={`nav ${show && "nav_black"}`}>
            <img
            className="nav_logo"
            src="https://i.ibb.co/WnWcjtr/logo.png"
            alt="Logo"/>
            <img
            className="nav_avatar"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Face-smile.svg/500px-Face-smile.svg.png"
            alt="user avatar"
            />
        </div>
    )
}

export default Nav
