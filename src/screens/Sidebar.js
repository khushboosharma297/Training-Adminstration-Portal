import React, { useState } from "react";
import {NavLink,    } from "react-router-dom";
import logo from '../UI/logo-image.png';
function Sidebar(){
    const [nav, setNav] = useState([
        {label: "Home", slug: "/", icon: "icon-home"},
        {label: "Profile", slug: "profile", icon: "icon-user"},
        {label: "Categories", slug: "cates", icon: "icon-stack"},
        {label: "My Courses", slug: "my-courses", icon: "icon-briefcase"},
        {label: "Logout", slug: "logout", icon: "icon-switch"}
    ])
    const [currentPage, setCurrentPage] = useState("/");

    var navigation = [];
    for(let i = 0; i < nav.length; i++){
        navigation.push(
            <li  key={"nav-" + i + "-" + nav[i].slug}>
                <a href={nav[i].slug} className={"link noul flex c333"}>
                    <div className={"ico s20 " + nav[i].icon} />
                    <h2 className="lbl s20">{nav[i].label}</h2>
                </a>
            </li>
        );
    }

    return(
        <div className="Sidebar fixed">
         <a href="#" className="logo bl">
             <img src={logo} className="bl"/>
         </a>
        <ul className="nav">
            {navigation}
        </ul>
        </div>
    );
}
export default Sidebar;
