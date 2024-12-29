import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export default function IconTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  }  
  
  return (
    <Box sx={{ 
      width: 'fit-content', // Pour centrer les onglets
      margin: '0 auto', // Pour centrer les onglets
      borderBottom: '1px solid black', // Ajouter une bordure en bas de l'ensemble des onglets
      }}>
      <Tabs 
        value={value} 
        onChange={handleChange} 
        aria-label="icon tabs example" 
      >
        <Tab 
          icon={<AddShoppingCartIcon />} 
          aria-label="Offres" 
        />
        
      </Tabs>
    </Box>
  );
}
