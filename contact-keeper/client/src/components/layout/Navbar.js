import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const Navbar = ({title, icon}) => {
    return (
        <div className="navbar navbar-expand-lg navbar-dark bg-primary">
            <h1>
                <i className={icon} /> {title}
            </h1>
            <ul className="navbar-nav">
                <li className="nav-item active">
                    <Link to='/' className="nav-link" >Home</Link>
                </li>
                <li  className="nav-item">
                    <Link to='/about' className="nav-link" >About</Link>
                </li>
            </ul>

        </div>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string,
}

Navbar.defaulProps = {
    title: 'Contact keeper',
    icon: 'fas fa-id-card-alt',
}