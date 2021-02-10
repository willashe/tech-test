import React from 'react';
import PropTypes from 'prop-types';
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

NavLink.propTypes = {
  to: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired,
  label: PropTypes.string,
};

export default NavLink;
