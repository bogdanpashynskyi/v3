import React from 'react';
import { Link} from 'react-router-dom';

const Nav = () => {
  return (
    <div>
      <ul className="nav-list">
        <li className="nav-links">
          <Link className="nav-react-links" to="/">Home</Link>
        </li>
        <li className="nav-links">
          <Link className="nav-react-links"to="/services/">Services</Link>
        </li>
        <li className="nav-links">
          <Link className="nav-react-links" to="/about/">About</Link>
        </li>
        <li className="nav-links">
          <Link className="nav-react-links" to="/blog/">Blog</Link>
        </li>
        <li className="nav-links">
          <Link className="nav-react-links" to="/contact/">Contact Us</Link>
        </li>
      </ul> 
    </div>
  )
}

export default Nav;