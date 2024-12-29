import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Card sx={{ maxWidth: '40vh', height: '40vh', border: '2px solid black'}}>
            <CardContent>
              <Typography>{children}</Typography>
            </CardContent>
            <CardMedia
              component="img"
              height="140"
              width="140"
              image=""
              alt="Placeholder"
              sx={{ marginTop: '-27px' }} // Ajoutez cette ligne pour déplacer l'image vers le haut
            />
          </Card>

          <Card sx={{ maxWidth: '40vh', height: '40vh', border: '2px solid black'}}>
            <CardContent>
              <Typography>{children}</Typography>
            </CardContent>
            <CardMedia
              component="img"
              height="140"
              width="140"
              image=""
              alt="Placeholder"
              sx={{ marginTop: '-27px' }} // Ajoutez cette ligne pour déplacer l'image vers le haut
            />
          </Card>

          <Card sx={{ maxWidth: '40vh', height: '40vh', border: '2px solid black'}}>
            <CardContent>
              <Typography>{children}</Typography>
            </CardContent>
            <CardMedia
              component="img"
              height="140"
              width="140"
              image=""
              alt="Placeholder"
              sx={{ marginTop: '-27px' }} // Ajoutez cette ligne pour déplacer l'image vers le haut
            />
          </Card>

          <Card sx={{ maxWidth: '40vh', height: '40vh', border: '2px solid black'}}>
            <CardContent>
              <Typography>{children}</Typography>
            </CardContent>
            <CardMedia
              component="img"
              height="140"
              width="140"
              image=""
              alt="Placeholder"
              sx={{ marginTop: '-27px' }} // Ajoutez cette ligne pour déplacer l'image vers le haut
            />
          </Card>
          <Card sx={{ maxWidth: '40vh', height: '40vh', border: '2px solid black'}}>
            <CardContent>
              <Typography>{children}</Typography>
            </CardContent>
            <CardMedia
              component="img"
              height="140"
              width="140"
              image=""
              alt="Placeholder"
              sx={{ marginTop: '-27px' }} // Ajoutez cette ligne pour déplacer l'image vers le haut
            />
          </Card>

          <Card sx={{ maxWidth: '40vh', height: '40vh', border: '2px solid black'}}>
            <CardContent>
              <Typography>{children}</Typography>
            </CardContent>
            <CardMedia
              component="img"
              height="140"
              width="140"
              image=""
              alt="Placeholder"
              sx={{ marginTop: '-27px' }} // Ajoutez cette ligne pour déplacer l'image vers le haut
            />
          </Card>

          <Card sx={{ maxWidth: '40vh', height: '40vh', border: '2px solid black'}}>
            <CardContent>
              <Typography>{children}</Typography>
            </CardContent>
            <CardMedia
              component="img"
              height="140"
              width="140"
              image=""
              alt="Placeholder"
              sx={{ marginTop: '-27px' }} // Ajoutez cette ligne pour déplacer l'image vers le haut
            />
          </Card>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100vh' }}>
        
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Hebergement" {...a11yProps(0)} />
          <Tab label="Restauration" {...a11yProps(1)} />
          <Tab label="Evenement" {...a11yProps(2)} />
          <Tab label="Attraction" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        {/* Contenu de l'onglet Hébergement */}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        {/* Contenu de l'onglet Restauration */}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        {/* Contenu de l'onglet Evenement */}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        {/* Contenu de l'onglet Attraction */}
      </CustomTabPanel>
    </Box>
  );
}
