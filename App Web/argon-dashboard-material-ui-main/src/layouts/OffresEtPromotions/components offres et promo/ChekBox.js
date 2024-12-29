import React from 'react';
import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function CheckBox({ destinations, selectedDestinations, handleCheckboxChange }) {
  return (
    <div>
      {destinations.map((destination, index) => (
        <div key={index}>
          <Checkbox
            {...label}
            checked={selectedDestinations.includes(destination)}
            onChange={(event) => handleCheckboxChange(event, destination)}
          />
          <span>{destination}</span>
        </div>
      ))}
    </div>
  );
}
