import React from "react";
import {NavLink} from "react-router-dom";

export const Navbar=()=>{
    const activeStyle={
        fontWeight:"bold",
        color:"red",
        textDecoration:"underline"
    }

    return (
        <div>
            <ul className="nav nav-lg nav-tabs justify-content-center bg-white bg-gradient">
               <li className="nav-item">
                    <NavLink className="nav-link" to="/" style={({isActive})=>isActive ? activeStyle : undefined}>Codenull</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/home" style={({isActive})=>isActive ? activeStyle : undefined}>Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/NotFound" style={({isActive})=>isActive ? activeStyle : undefined}>Link</NavLink>
                </li>
                <li className="nav-item dropdown">
                    <NavLink className="nav-link dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-expanded="false" to="#">Dropwdown link</NavLink>
                    <ul className="dropdown-menu">
                        <li><NavLink className="dropdown-item bg-white text-dark" to="#">Action</NavLink></li>
                        <li><NavLink className="dropdown-item bg-white text-dark" to="#">Another Action</NavLink></li>
                        <li><NavLink className="dropdown-item bg-white text-dark" to="#">Something else here</NavLink></li>
                        <li><hr className="dropdown-divider"/></li>
                        <li><NavLink className="dropdown-item bg-white text-dark" to="#">Separated link</NavLink></li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}