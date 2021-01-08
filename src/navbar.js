import React from 'react';
import {Link} from 'react-router-dom'
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
           
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Budget List</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/account-list">Account List</Link>
                    </li>
                  

                </ul>
            </div>
        </nav>
    )
}

export default Navbar;