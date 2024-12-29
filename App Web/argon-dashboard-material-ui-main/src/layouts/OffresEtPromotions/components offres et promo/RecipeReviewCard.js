import React from 'react';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Checkbox } from '@mui/material';
import TabNav from './TabNav'; // Assurez-vous que le chemin est correct


export default function RecipeReviewCard({ activeStep, handleCheckboxChange, checkedDestinations, selectedDestinations, ville, handleCardClick }) {
  return (


    <Card sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', border: '2px solid black', borderRadius: '20px' }}>
      <CardContent style={{ flexGrow: 1 }}>

        <Typography gutterBottom variant="h5" component="div" align="center">
          {ville}
        </Typography>

        {/* Déplacez la condition ici pour afficher TabNav uniquement lorsque activeStep est égal à 2 ou lorsque activeStep est égal à l'étape où vous souhaitez afficher les cartes des destinations */}
       
        {(activeStep === 2 || activeStep === 3) && (
          <TabNav value={0} handleChange={() => {}} />
        )}


        {selectedDestinations && selectedDestinations.map((destination, index) => (
          <div key={index}>
            <Checkbox
              checked={checkedDestinations.includes(destination?.name)}
              onChange={(event) => handleCheckboxChange(event, destination?.name)}
              inputProps={{ 'aria-label': 'Select destination' }}
            />
            {destination?.name}
            <img src={destination?.imageUrl} alt={destination?.name} style={{ width: '150px', borderRadius: '8px' }} />
          </div>
        ))}

        
      </CardContent>
    </Card>
  );
}

RecipeReviewCard.propTypes = {
  activeStep: PropTypes.number.isRequired,
  handleCheckboxChange: PropTypes.func.isRequired,
  checkedDestinations: PropTypes.array.isRequired,
  selectedDestinations: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
  })),
  ville: PropTypes.string.isRequired,
  handleCardClick: PropTypes.func.isRequired,
};
 