import React from 'react';
import PropTypes from 'prop-types';

function WorkCard({ item }) {
  return (
    <div className="work-card">
      <a href={item.link} target="_blank" rel="noreferrer">
        <img className="work-image" src={item.image} alt={item.name} />
      </a>
    </div>
  );
}

WorkCard.propTypes = {
  item: PropTypes.shape({
    link: PropTypes.string,
    image: PropTypes.string,
    name: PropTypes.name
  })
};

export default WorkCard;
