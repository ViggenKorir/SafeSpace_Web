import React from "react";
import "./styles/NavBar.css";

const NavBar = ({ logoText, navItems }) => {
    return (
        <nav className="navbar">
            <div className="container-fluid">
                <h3 id="logo-text">{logoText}</h3>
                <div className="navbar-section" id="navbarNav">
                    <ul className="navbar-nav">
                        {navItems.map((item, index) => (
                            <button
                                key={index}
                                type="button"
                                className="nav-item"
                                id={item.id}
                                onClick={item.onClick} // Optional: Add onClick handler if needed
                            >
                                {item.label}
                            </button>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
