import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

const NavLink = ({
  to,
  icon,
  label,
}: {
  to: string;
  icon: IconDefinition;
  label: string;
}) => (
  <Link to={to}>
    <FontAwesomeIcon icon={icon} style={{ width: 20 }} />
    <span className="label">{label}</span>
  </Link>
);

// proptypes

export default NavLink;
