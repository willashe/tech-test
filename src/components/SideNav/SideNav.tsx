import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faUtensils,
  faCoffee,
  faDumbbell,
  faGuitar,
  faChevronCircleLeft,
  faChevronCircleRight,
} from '@fortawesome/free-solid-svg-icons';

import NavLink from './NavLink';

const SideNav = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <aside className={`sidenav${collapsed ? ' collapsed' : ''}`}>
      <nav>
        <ul>
          <li>
            <NavLink to="/" icon={faHome} label="Home" />
          </li>

          <li>
            <NavLink to="/food" icon={faUtensils} label="I Love Food" />
          </li>

          <li>
            <NavLink to="/coffee" icon={faCoffee} label="Coffee" />
          </li>

          <li>
            <NavLink to="/fitness" icon={faDumbbell} label="Fitness" />
          </li>

          <li>
            <NavLink to="/guitar" icon={faGuitar} label="Guitar" />
          </li>
        </ul>
      </nav>

      <button className="sidenav-collapse-btn" onClick={toggleCollapse}>
        <FontAwesomeIcon
          icon={collapsed ? faChevronCircleRight : faChevronCircleLeft}
        />
        {!collapsed && ' Collapse'}
      </button>
    </aside>
  );
};

export default SideNav;
