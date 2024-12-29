import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Card, CardContent, Typography, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button, Input } from '@mui/material';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import img from '../../../assets/images/ImgRestaurant/res1.jpg';
import './CardAttraction.css'; // Importer le fichier CSS pour les styles

const CardAttraction = ({ name, description }) => {
  const [openEditDialog, setOpenEditDialog] = useState(false); // État local pour contrôler l'ouverture de la boîte de dialogue d'édition
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const [text3, setText3] = useState('');
  const [text4, setText4] = useState('');
  const [openAddressDialog, setOpenAddressDialog] = useState(false); // État local pour contrôler l'ouverture de la boîte de dialogue d'adresse

  const handleOpenEditDialog = () => {
    setOpenEditDialog(true); // Fonction pour ouvrir la boîte de dialogue d'édition
  };

  const handleCloseEditDialog = () => {
    setOpenEditDialog(false); // Fonction pour fermer la boîte de dialogue d'édition
  };

  const handleOpenAddressDialog = () => {
    setOpenAddressDialog(true); // Fonction pour ouvrir la boîte de dialogue d'adresse
  };

  const handleCloseAddressDialog = () => {
    setOpenAddressDialog(false); // Fonction pour fermer la boîte de dialogue d'adresse
  };

  return (
    <Box>
      <Card sx={{ width: '13rem', height: '15rem', display: 'flex', position: 'relative', boxShadow: '1px 3px 5px grey', borderRadius: '8px', overflow: 'hidden' }}>
        <div className="image-container"> {/* Utiliser une classe CSS pour la boîte parente */}
          <img
            alt="green iguana"
            className="image" // Utiliser une classe CSS pour l'image
            src={img}
          />
          <div className="edit-buttons-container">
            <button className="edit-button" onClick={handleOpenEditDialog}>Edit </button> {/* Utilisez onClick pour déclencher l'ouverture de la boîte de dialogue d'édition */}
            <button className="edit-button" onClick={handleOpenEditDialog}>Edit </button> {/* Utilisez onClick pour déclencher l'ouverture de la boîte de dialogue d'édition */}

          </div>
        </div>

        <CardContent sx={{ width: '65%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '0.5rem' }}>
          <Typography variant="body1" sx={{ width: '65%', fontWeight: 'bold', marginBottom: '0.5rem' }}>
            {name ? name : 'name'}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ flex: '1', overflow: 'hidden', textOverflow: 'ellipsis', marginBottom: '0.5rem' }}>
            {description ? description : 'description'}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', alignItems: 'center' }}>
            <FmdGoodIcon sx={{ marginRight: '0.25rem', fontSize: '1rem' }} />
            Lizard
          </Typography>
        </CardContent>
      </Card>

      {/* Boîte de dialogue pour Edit */}
      <Dialog open={openEditDialog} onClose={handleCloseEditDialog}  maxWidth="md" fullWidth>
        <DialogTitle>Edit</DialogTitle>
        <DialogContent>
          <DialogContentText>
          </DialogContentText>
          <Box sx={{ width:'600px', display: 'flex', flexDirection: 'column', gap: '1rem' }}> {/* Utilisez gap pour ajouter de l'espace entre les inputs */}
            <Input placeholder="name" value={text1} onChange={(e) => setText1(e.target.value)} fullWidth />
            <Input placeholder="type" value={text2} onChange={(e) => setText2(e.target.value)} fullWidth />
              <Input placeholder="description" value={text3} onChange={(e) => setText3(e.target.value)} fullWidth />
              <Input placeholder="address" value={text4} onClick={handleOpenAddressDialog} fullWidth /> {/* Utilisez onClick pour ouvrir la boîte de dialogue d'adresse */}
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseEditDialog}>Cancel</Button>
          <Button onClick={handleCloseEditDialog} autoFocus>Save</Button>
        </DialogActions>
      </Dialog>

      {/* Boîte de dialogue pour l'adresse */}
      <Dialog open={openAddressDialog} onClose={handleCloseAddressDialog} maxWidth="md" fullWidth>
        <DialogTitle>Address</DialogTitle>
        <DialogContent>
          <DialogContentText>
          </DialogContentText>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}> {/* Utilisez gap pour ajouter de l'espace vertical entre les groupes d'inputs */}
            <Box sx={{ display: 'flex', flexDirection: 'row', gap: '1rem' }}> {/* Utilisez gap pour ajouter de l'espace horizontal entre les inputs */}
              <Input placeholder=" codepostal" value={text1} onChange={(e) => setText1(e.target.value)} fullWidth sx={{ borderRadius: '8px' }} />
              <Input placeholder="ville" value={text2} onChange={(e) => setText2(e.target.value)} fullWidth sx={{ borderRadius: '8px' }} />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', gap: '1rem' }}> {/* Utilisez gap pour ajouter de l'espace horizontal entre les inputs */}
              <Input placeholder="description" value={text3} onChange={(e) => setText3(e.target.value)} fullWidth sx={{ borderRadius: '8px' }} />
              <Input placeholder="address" value={text4} onClick={handleOpenAddressDialog} fullWidth sx={{ borderRadius: '8px' }} /> {/* Utilisez onClick pour ouvrir la boîte de dialogue d'adresse */}
            </Box>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseAddressDialog}>Cancel</Button>
          <Button onClick={handleCloseAddressDialog} autoFocus>Save</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

CardAttraction.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default CardAttraction;
