import React from "react";
import { Outlet, NavLink } from "react-router-dom";

const Header = () => {
    return <>
        <header>
            <NavLink id="name" to="/">Xinyi Hu</NavLink>
            <div className="navigation">
                <NavLink to="/" className="nav">Home</NavLink>
                <NavLink to="/projects" className="nav">Projects</NavLink>
                <NavLink to="/experience" className="nav">Experience</NavLink>
                <NavLink to="/contact" className="nav">Contact</NavLink>
                {/* <a id="connect" href="mailto:hu.elemia17@gmail.com" target="_blank">
                    Contact
                </a> */}
            </div>
        </header>

        <Outlet />
    </>
}

export default Header;