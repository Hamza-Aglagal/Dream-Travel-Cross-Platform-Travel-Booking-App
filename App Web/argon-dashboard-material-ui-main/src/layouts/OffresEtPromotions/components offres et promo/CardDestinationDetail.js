import React, { useState } from 'react';
import { Box, Dialog, DialogTitle, Tabs, Tab, Grid, AppBar, Toolbar } from '@mui/material';
import CardDestination from './CardDestination';

export const CardDestinationDetail = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [value, setValue] = useState(0); // État pour gérer l'onglet actif

  const handleClick = () => {
    setOpenDialog(true);
  };

  const handleClose = () => {
    setOpenDialog(false);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box
        sx={{
          width: '30%',
          boxShadow: '1px 3px 5px grey',
          height: '35vh',
          marginBottom: '1rem',
          backgroundImage: 'url(https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?auto=format&fit=crop&w=600&q=80)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          cursor: 'pointer',
        }}
        onClick={handleClick}
      >
        <Box sx={{ color: '#d7bdca', fontSize: '3rem', height: '100%' }}>Name</Box>
      </Box>
      <Dialog open={openDialog} onClose={handleClose} fullWidth maxWidth="md" sx={{ '& .MuiDialog-paper': { width: '80%', height: '80%' } }}>
        <DialogTitle>Popup Content</DialogTitle>
        <AppBar position="relative">
          <Tabs value={value} onChange={handleChange}>
            <Tab label="Hebergement" />
            <Tab label="Restauration" />
            <Tab label="Attraction" />
            <Tab label="Evenement" />
            <Tab label="Transport" />
          </Tabs>
        </AppBar>
        <Toolbar />
        {/* Contenu spécifique à chaque onglet */}
        {value === 0 && (
          <Grid container spacing={2}>
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <Grid key={index} item xs={50} sm={20}>
                <CardDestination />
              </Grid>
            ))}
          </Grid>
        )}
        {value === 1 && <Box>Contenu du deuxième onglet</Box>}
        {value === 2 && <Box>Contenu du troisième onglet</Box>}
        {value === 3 && <Box>Contenu du quatrième onglet</Box>}
        {value === 4 && <Box>Contenu du cinquième onglet</Box>}
      </Dialog>
    </>
  );
};
