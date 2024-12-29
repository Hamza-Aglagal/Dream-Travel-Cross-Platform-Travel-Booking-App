// FullScreenDialog.js
import React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog({
  destinations,
  selectedDestinations,
  onClose,
  onConfirm,
  handleCheckboxChange,
  hebergements,
}) {
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
    onClose();
  };

  const handleConfirm = () => {
    setOpen(false);
    onConfirm();
  };

  return (
    <Dialog
      fullScreen
      open={open}
      onClose={handleClose}
      TransitionComponent={Transition}
    >
      <AppBar sx={{ position: 'relative' }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
          <Typography variant="h5" sx={{ ml: 2, flex: 1 }}>
            Destinations
          </Typography>
          <Button autoFocus color="inherit" onClick={handleConfirm}>
            Save
          </Button>
        </Toolbar>
      </AppBar>
      <List>
        <Divider />
        {destinations.map((destination, index) => (
          <div key={index}>
            <Checkbox
              checked={selectedDestinations.includes(destination.name)}
              onChange={(event) => handleCheckboxChange(event, destination.name)}
              inputProps={{ 'aria-label': 'Select destination' }}
            />
            {destination.name}
            <img
              src={destination.imageUrl}
              alt={destination.name}
              style={{ width: '150px', borderRadius: '8px' }}
            />
          </div>
        ))}
      </List>
      <Divider />
      <Typography variant="h6" sx={{ ml: 2, mt: 2 }}>
        Hébergements disponibles :
      </Typography>
      {hebergements.map((hebergement, index) => (
        <div key={index}>
          <Checkbox
            checked={false} // Gérer la logique de cocher si nécessaire
            onChange={(event) => handleCheckboxChange(event, hebergement.name)}
            inputProps={{ 'aria-label': 'Select hébergement' }}
          />
          {hebergement.name}
          <img
            src={hebergement.imageUrl}
            alt={hebergement.name}
            style={{ width: '150px', borderRadius: '8px' }}
          />
        </div>
      ))}
    </Dialog>
  );
}

FullScreenDialog.propTypes = {
  destinations: PropTypes.array.isRequired,
  selectedDestinations: PropTypes.array.isRequired,
  onClose: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
  handleCheckboxChange: PropTypes.func.isRequired,
  hebergements: PropTypes.array.isRequired,
};
