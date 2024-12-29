import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import Checkbox from '@mui/material/Checkbox';
import DialogActions from '@mui/material/DialogActions';
import { Box } from '@mui/material';
import CardDestination from './CardDestination';
import { CardDestinationDetail } from './CardDestinationDetail';
import  { useState,useEffect } from 'react';


export const Offres = () => {

    const [selectedDestinations, setSelectedDestinations] = useState([]);
    const [checkedDestinations, setCheckedDestinations] = useState([]);
    const [selectedHebergements, setSelectedHebergements] = useState([]);
    const [activeStep, setActiveStep] = useState(0);
    const steps = ['Select ville', 'Select Destination', 'afficher Infos'];

    const handleNext = () => {
        if (activeStep < steps.length - 1) {
            setActiveStep((prevActiveStep) => prevActiveStep + 1); // Passer à l'étape suivante
        }
    };

    const Villes = ['Marrakech', 'Agadir', 'Tanger', 'Rabat', 'Casablanca'];
    const [selectedVille, setSelectedVille] = useState([]);
    const handleVilleChange = (event, newValue) => {
        setSelectedVille(newValue);
    };

    const [openDialog, setOpenDialog] = useState(false);
    const handleCardClick = (ville) => {
        setSelectedDestinations(destinationsData[ville]);
        setSelectedVille([ville]);
        setOpenDialog(true);
    };

    const handleDestinationChange = (event, newValue) => {
        setSelectedDestinations(newValue);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleCheckboxChange = (event, destination) => {
        if (event.target.checked) {
            setCheckedDestinations([...checkedDestinations, destination]);
        } else {
            setCheckedDestinations(checkedDestinations.filter(item => item !== destination));
        }
    };

    useEffect(() => {
        if (selectedDestinations.length > 0) {
            setSelectedHebergements(hebergementsData[selectedDestinations[0].name] || []);
        } else {
            setSelectedHebergements([]);
        }
    }, [selectedDestinations]);

    // Définition de la fonction handleConfirm
    const handleConfirm = () => {
        // Mettez ici votre logique pour confirmer quelque chose
        console.log('Confirmation effectuée !');
        // Définissez ici toute autre logique nécessaire, telle que la fermeture du dialog
        setOpenDialog(false);
    };

    return (

        <Box style={{ display: 'flex', borderRadius: '4rem', flexDirection: 'row', flexWrap: 'wrap', width: '100%' }}>
        <Card sx={{ width: '400px', minHeight: "80vh", mt: 2, position: 'relative', margin: '0 auto', borderRadius: '100px', boxShadow: "1px 3px 5px grey" }}>

                <CardContent>

                    <Typography variant="h5" component="div" gutterBottom sx={{ textAlign: 'center', marginTop: 2 }}>
                        Ajouter une Offre
                    </Typography>

                    <Stepper nonLinear activeStep={activeStep}>
                        {steps.map((label, index) => (
                            <Step key={index}>
                                <StepButton onClick={() => setActiveStep(index)}>
                                    {label}
                                </StepButton>
                            </Step>
                        ))}
                    </Stepper>

                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>

                        {activeStep === 0 && (
                            <Box sx={{ height: "15rem", display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'column', marginBottom: '100px' }}>

                                <Autocomplete
                                    multiple
                                    id="tags-outlined"
                                    options={Villes}
                                    sx={{ marginTop: "5rem" }}
                                    value={selectedVille}
                                    onChange={handleVilleChange}
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            variant="outlined"
                                            label="Select ville"
                                            placeholder="Favorites"
                                        />
                                    )}
                                />
                                <Box sx={{ mt: 3 }}>
                                    <Button variant="contained" onClick={handleNext} sx={{ borderWidth: '2px', borderColor: 'black', borderStyle: 'solid', width: '150px' }}>
                                        Next
                                    </Button>
                                </Box>
                            </Box>
                        )}

                        {activeStep === 1 && (
                            <Box sx={{ width: "100%", display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginBottom: '-17px' , marginLeft:'30vh' , marginLeft:'30vh', marginTop:'5vh'}}>

                                <Box sx={{ fontSize: "2.5rem" , marginRight:'40vh', marginBottom: '17px' }} >  Agadir  </Box>

                                <Box sx={{ width: "100%", display: "flex", flexWrap: "wrap", flexDirection: "row", marginLeft:'9vh'}} >

                                    <CardDestination />
                                    <CardDestination />
                                    <CardDestination />




                                </Box>

                                <Box sx={{ fontSize: "2.5rem" , marginRight:'40vh', marginBottom: '17px', marginTop: '17px'}} >  Marrakech  </Box>

                                <Box sx={{ width: "100%", display: "flex", flexWrap: "wrap", flexDirection: "row", marginLeft:'9vh' }} >

                                    <CardDestination />
                                    <CardDestination />
                                    <CardDestination />
                                    



                                </Box>

                                <Box sx={{ mt: 3 }}>

                                    <Button
                                        onClick={handleBack}
                                        variant="outlined"
                                        sx={{
                                            borderWidth: '2px',
                                            borderColor: 'black',
                                            borderStyle: 'solid',
                                            marginRight: '10px',
                                            marginBottom:'100px',
                                            marginTop:'100px',
                                            color: 'Black'
                                         }}  
                                    >
                                        Previous
                                    </Button>

                                    <Button
                                        variant="contained"
                                        onClick={handleNext}
                                        sx={{
                                            borderWidth: '2px',
                                            borderColor: 'black',
                                            borderStyle: 'solid',
                                            marginRight: '200px',
                                            marginBottom:'100px',
                                            marginTop:'100px',
                                            color: 'Black'

                                        }}
                                    >
                                        Next
                                    </Button>

                                </Box>

                            </Box>
                        )}

                        {activeStep === 2 && (
                            <Box sx={{ width: "100%", minHeight: "70vh", display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <Typography variant="h5" gutterBottom>
                                    Destinations sélectionnées :
                                </Typography>

                                <Box sx={{ marginTop: "1rem", width: "100%", minHeight: "70vh", display: 'flex', flexDirection: 'row', alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap" }} >

                                    <CardDestinationDetail />

                                </Box>

                            </Box>
                        )}

                    </Box>

                </CardContent>

            </Card>

            {/* Boîte de dialogue */}
            <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>

                <DialogTitle>Contenu de la boîte de dialogue</DialogTitle>
                <DialogContent>
                    {selectedDestinations.map((destination, index) => (
                        <div key={index}>
                            <Checkbox
                                checked={checkedDestinations.includes(destination.name)}
                                onChange={(event) => handleCheckboxChange(event, destination.name)}
                                inputProps={{ 'aria-label': 'Select destination' }}
                            />
                            {destination.name}
                            <img src={destination.imageUrl} alt={destination.name} style={{ width: '150px', borderRadius: '8px' }} /> {/* Afficher l'image de la destination avec une taille réduite et une bordure arrondie */}
                        </div>
                    ))}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleConfirm}>Confirmer</Button>
                    <Button onClick={() => setOpenDialog(false)}>Fermer</Button>
                </DialogActions>

            </Dialog>

        </Box>
    );

}
