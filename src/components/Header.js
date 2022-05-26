import React from 'react';
import '../styles/Header.css';
import { Link } from 'react-router-dom';

function Header(props) {
    const logout = async () => {
        await fetch("http://localhost:5001/api/account/logout", {
            method: 'POST',
            headers: { "Content-Type": 'application/json' },
            credentials: 'include',
        });

        props.setEmail('')
    }


    let menu;

    if (props.email === '') {
        menu = (
            <ul className="navbar-nav me-auto mb-2 mb-md-0">

                <li className="nav-item active">
                    <Link to="/stocks" className="nav-link" >Stocks</Link>
                </li>
                <li className="nav-item active">
                    <Link to="/portfolio" className="nav-link" >Portfolio</Link>
                </li>
                <li className="nav-item active">
                    <Link to="/login" className="nav-link" >Login</Link>
                </li>
                <li className="nav-item active">
                    <Link to="/register" className="nav-link">Register</Link>
                </li>
            </ul>
        )
    } else {
        menu = (
            <ul className="navbar-nav me-auto mb-2 mb-md-0">

            <li className="nav-item active">
                <Link to="/stocks" className="nav-link" >Stocks</Link>
            </li>
            <li className="nav-item active">
                <Link to="/portfolio" className="nav-link" >Portfolio</Link>
            </li>
            <li className="nav-item active">
                <Link to="/login" className="nav-link" onClick={logout}>Logout</Link>
            </li>
        </ul>
        )
    }
    return (
        <div className="Header">
            <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
                <div className="container-fluid">
                    <Link to="/home" className="navbar-brand">Home</Link>
                    <div>
                        {menu}
                    </div>
                </div>
            </nav>
        </div>

    )
}

export default Header