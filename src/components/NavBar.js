import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const links = [
    { id: 1, title: 'BOOKS', path: '/' },
    { id: 2, title: 'CATEGORIES', path: '/categories' },
  ];
  return (
    <nav data-testid="navbar" className="nav">
      <ul className="nav-links">
        <h1 className="logo">
          {' '}
          <NavLink to="/">BookStore CMS</NavLink>
          {' '}
        </h1>
        {links.map((link) => (
          <li key={link.id}>
            <NavLink to={link.path} activeClassName="active-link" exact>
              {link.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
