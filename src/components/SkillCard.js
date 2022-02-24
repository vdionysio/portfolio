import React from 'react';
import PropTypes from 'prop-types';

export default function SkillCard({ item }) {
  return (
    <li className="skill-card">
      {item.icon}
      <div>
        <p>{item.text}</p>
        <p style={{ width: '110px' }}>{item.lvl}</p>
      </div>
    </li>
  );
}

SkillCard.propTypes = {
  item: PropTypes.shape({
    icon: PropTypes.node,
    text: PropTypes.string,
    lvl: PropTypes.string
  }).isRequired
};
