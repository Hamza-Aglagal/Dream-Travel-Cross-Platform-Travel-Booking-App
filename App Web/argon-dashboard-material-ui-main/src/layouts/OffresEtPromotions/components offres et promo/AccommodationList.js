import React from 'react';
import PropTypes from 'prop-types';

function AccommodationList({ accommodations }) {
  return (
    <div>
      <h3>Accommodations:</h3>
      <ul>
        {accommodations.map((accommodation, index) => (
          <li key={index}>{accommodation.name}</li>
        ))}
      </ul>
    </div>
  );
}

AccommodationList.propTypes = {
  accommodations: PropTypes.array.isRequired,
};

export default AccommodationList;
