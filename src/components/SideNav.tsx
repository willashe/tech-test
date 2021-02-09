import React from 'react';
import { Link } from 'react-router-dom';

const SideNav = () => (
  <div className="sidenav">
    <nav>
      <ul>
        <li>
          <Link to="/">Page 1</Link>
        </li>
        <li>
          <Link to="/page2">Page 2</Link>
        </li>
      </ul>
    </nav>
  </div>
);

export default SideNav;
