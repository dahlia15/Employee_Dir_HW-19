import React from "react";
import {Link, useLocation} from "react-router-dom";

function Nav() {
    const location = useLocation();
    return (
        <div>
        <ul className="nav nav-tabs" style={{justifyContent: "space-around", backgroundColor: "#e4585d", paddingTop: 10, paddingBottom: 10}}>
            <li className="nav-item">
                <Link to="/" className={location.pathname === "/" ? "nav-link-active" : "nav-active"} style={{color: "#f0f0f0", fontWeight: "bold"}}>Home </Link>
            </li>
            <li className="nav-item">
                <Link to="/list" className={location.pathname === "/list" ? "nav-link-active" : "nav-active"} style={{color: "#f0f0f0", fontWeight: "bold"}}>Employee List </Link>
            </li>
        </ul>
        </div>


    )
};

export default Nav;