import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCoffee,
  faGuitar,
  faChevronCircleLeft,
  faChevronCircleRight,
} from '@fortawesome/free-solid-svg-icons';

const SideNav = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className={`sidenav${collapsed ? ' collapsed' : ''}`}>
      <nav>
        <ul>
          <li>
            <Link to="/">
              <FontAwesomeIcon icon={faCoffee} />
              <span className="label">Coffee</span>
            </Link>
          </li>

          <li>
            <Link to="/page2">
              <FontAwesomeIcon icon={faGuitar} />
              <span className="label">Guitars</span>
            </Link>
          </li>
        </ul>
      </nav>

      <button className="sidenav-collapse-btn" onClick={toggleCollapse}>
        <FontAwesomeIcon
          icon={collapsed ? faChevronCircleRight : faChevronCircleLeft}
        />
        {!collapsed && 'Collapse'}
      </button>
    </div>
  );
};

export default SideNav;
