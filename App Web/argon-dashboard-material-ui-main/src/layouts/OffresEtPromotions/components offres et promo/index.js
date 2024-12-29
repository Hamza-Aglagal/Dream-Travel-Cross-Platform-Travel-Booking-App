import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Card, CardContent, Dialog, DialogActions, DialogContent, DialogTitle, Checkbox } from '@mui/material';
import TextField from '@mui/material/TextField';
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Autocomplete from '@mui/material/Autocomplete';
import RecipeReviewCard from './RecipeReviewCard'; // Assurez-vous que le chemin est correct
import { Tabs, Tab } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import RedeemIcon from '@mui/icons-material/Redeem';
import { Offres } from './Components/Offres';
import { Promotion } from './Components/Promotion';





const destinationsData = {
    'Marrakech': [
        { name: 'Jamaa ', imageUrl: 'https://www.mjtnews.com/wp-content/uploads/2019/09/Djemaa_el_Fna.jpg' },
        { name: 'Menara', imageUrl: 'https://th.bing.com/th/id/OIP._pUPd32XYCS-9FhszZlcqwHaE8?rs=1&pid=ImgDetMain' }
    ],
    'Agadir': [
        { name: 'Marina  Agadir', imageUrl: 'https://th.bing.com/th/id/R.f00c0e38219be20a21209d69766f6ac3?rik=myTjIRq4lQy1yw&pid=ImgRaw&r=0' },
        { name: 'Agadir Oufella', imageUrl: 'https://th.bing.com/th/id/OIP.tcqzlc55HHs4ruk6b1GmjQHaEK?rs=1&pid=ImgDetMain' }
    ],
    'Tanger': [
        { name: ' Marina Tanger', imageUrl: 'https://th.bing.com/th/id/R.0ac3dac56bf302b5de7c3d6aa2109478?rik=PkNuH9XoQpOanQ&riu=http%3a%2f%2fwww.tangerport.com%2fwp-content%2fuploads%2f2016%2f05%2f1d29ad1a-953e-4ed7-da93-dcd6bd666f91.jpg&ehk=e4KywOLWHfoirTWr9q%2bvsu7WttaFB1CzhmApE8gJHoc%3d&risl=&pid=ImgRaw&r=0.jpg' },
        { name: 'Destination 7', imageUrl: 'https://th.bing.com/th/id/OIP.WyO42nT-sSm3utSvUTGhcQHaFj?rs=1&pid=ImgDetMain.jpg' },
    ],
    'Rabat': [
        { name: 'Marina Rabat', imageUrl: 'https://th.bing.com/th/id/OIP.dG3W3rmO5n26YB4nhRULBAHaEK?rs=1&pid=ImgDetMain.jpg' },
        { name: 'Destination 10', imageUrl: 'https://www.mjtnews.com/wp-content/uploads/2019/09/Djemaa_el_Fna.jpg' }
    ],
    'Casablanca': [
        { name: 'Destination 11', imageUrl: 'url11' },
        { name: 'Destination 12', imageUrl: 'url12' },
    ],
};

const hebergementsData = {
    'Marrakech': [
        { name: 'Hôtel A', imageUrl: 'url1' },
        { name: 'Hôtel B', imageUrl: 'url2' }
    ],
    'Agadir': [
        { name: 'Hôtel X', imageUrl: 'url3' },
        { name: 'Hôtel Y', imageUrl: 'url4' }
    ],
    // Ajoutez d'autres destinations avec leurs hébergements correspondants ici
};

const restaurantsData = {
    'Marrakech': [
        { name: 'Restaurant 1', imageUrl: 'url5' },
        { name: 'Restaurant 2', imageUrl: 'url6' }
    ],
    'Agadir': [
        { name: 'Restaurant 3', imageUrl: 'url7' },
        { name: 'Restaurant 4', imageUrl: 'url8' }
    ],
    // Ajoutez d'autres destinations avec leurs restaurants correspondants ici
};

const evenementsData = {
    'Marrakech': [
        { name: 'Evénement 1', imageUrl: 'url9' },
        { name: 'Evénement 2', imageUrl: 'url10' }
    ],
    'Agadir': [
        { name: 'Evénement 3', imageUrl: 'url11' },
        { name: 'Evénement 4', imageUrl: 'url12' }
    ],
    // Ajoutez d'autres destinations avec leurs événements correspondants ici
};

const attractionsData = {
    'Marrakech': [
        { name: 'Attraction 1', imageUrl: 'url13' },
        { name: 'Attraction 2', imageUrl: 'url14' }
    ],
    'Agadir': [
        { name: 'Attraction 3', imageUrl: 'url15' },
        { name: 'Attraction 4', imageUrl: 'url16' }
    ],
    // Ajoutez d'autres destinations avec leurs attractions correspondantes ici
};



function OffresEtPromotions() {
    const [tabValue, setTabValue] = useState(0);

    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
    };

    return (
        <DashboardLayout>


            <DashboardNavbar />

            <Box sx={{ flexGrow: 1 }}>
                {tabValue === 0 && <Offres />}
                {tabValue === 1 && <Promotion />}
            </Box>


            <Tabs
                value={tabValue}
                onChange={handleTabChange}
                aria-label="icon tabs example"
                sx={{
                    position: 'fixed',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    zIndex: 10000,
                    maxHeight: '70px', // Ajuster la taille de la barre d'onglets
                }}
            >
                <Tab icon={<AddShoppingCartIcon />} aria-label="Offres" />
                <Tab icon={<RedeemIcon />} aria-label="Promotions" />

            </Tabs>


        </DashboardLayout>
    );
}

export default OffresEtPromotions;
