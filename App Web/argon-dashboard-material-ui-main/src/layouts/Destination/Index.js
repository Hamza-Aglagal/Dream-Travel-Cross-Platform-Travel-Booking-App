import { useDispatch } from "react-redux";
import axios from "axios";
import React, { useEffect, useState } from "react";
import {
    Card, Box, Button, Input, Stack, Autocomplete,
    TextField, Dialog, DialogActions, DialogContent,
    DialogTitle, CardContent, CardMedia, Typography, IconButton
} from "@mui/material";
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Destination() {
    const dispatch = useDispatch();
    const ariaLabel = { 'aria-label': 'description' };
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [idVille, setIdVille] = useState("");
    const [rue, setRue] = useState("");
    const [serie, setSerie] = useState("");
    const [postal, setPostal] = useState("");
    const [villeAdresse, setVilleAdresse] = useState("");
    const [images, setImages] = useState([]);
    const [open, setOpen] = useState(false);
    const [fullWidth, setFullWidth] = useState(true);
    const [maxWidth, setMaxWidth] = useState('sm');
    const [VillesData, setVillesData] = useState([]);
    const [destinations, setDestinations] = useState([]);

    // Notification  
    const notifySuccess = () => toast.success("Destination created successfully!");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/dashboard/villes');
                setVillesData(response.data.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        const fetchDestinations = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/dashboard/destinations');
                setDestinations(response.data.data);
            } catch (error) {
                console.error('Error fetching destinations:', error);
            }
        };
        fetchDestinations();
    }, []);

    console.log('destinations :', destinations)

    const handleFileChange = (e) => {
        const files = e.target.files;
        const newImages = [];
        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            const reader = new FileReader();
            reader.onload = (e) => {
                newImages.push({ id: i, img: e.target.result });
                if (newImages.length === files.length) {
                    setImages(newImages);
                }
            };
            reader.readAsDataURL(file);
        }
    };

    const handleDelete = (id) => {
        setImages((prevImages) => prevImages.filter((image) => image.id !== id));
    };

    const handleSubmit = async () => {
        // try {
        //     const adresseData = {
        //         rue,
        //         serie,
        //         ville: idVille,
        //         codePostal: postal,
        //     };
            
        //     const adresseResponse = await axios.post('http://127.0.0.1:8000/dashboard/adresse/create', adresseData);
        //     const localisation = adresseResponse.data.id;

        //     const destinationData = {
        //         nom: name,
        //         description,
        //         localisation,
        //         id_ville: idVille,
        //         images: images.map((image) => image.img),
        //     };

        //     const response = await axios.post("http://127.0.0.1:8000/dashboard/destination/create", destinationData);

        //     if (response.data.success) {
        //         notifySuccess();
        //         setName("");
        //         setDescription("");
        //         setIdVille("");
        //         setRue("");
        //         setSerie("");
        //         setPostal("");
        //         setImages([]);
        //         setDestinations(prevDestinations => [...prevDestinations, response.data.data]);
        //     } else {
        //         alert(response.data.error || "Error creating destination");
        //     }
        // } catch (error) {
        //     console.error("Error creating destination:", error);
        // }

        notifySuccess()
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <DashboardLayout>
            <DashboardNavbar />
            <ArgonBox py={3}>
                <ArgonBox mb={3}>
                    <Card sx={{ padding: '1rem' }}>
                        <ArgonBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
                            <ArgonTypography variant="h6">Ajouter Destination</ArgonTypography>
                        </ArgonBox>
                        <Box style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', alignItems: 'flex-start', marginTop: '1rem', width: '100%' }}>
                            <Box sx={{ width: '100%' }}>
                                <Box sx={{ width: '100%', minHeight: '25vh', paddingLeft: '2rem', display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', flexWrap: 'wrap' }}>
                                    <Stack direction="column" justifyContent="space-between" alignItems="flex-start" spacing={4} marginBottom={3}>
                                        <Box spacing={1} sx={{ width: 350 }}>
                                            <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="name" inputProps={ariaLabel} />
                                        </Box>
                                        <Button onClick={handleClickOpen} variant="outlined" sx={{ color: '#00FFFF' }} startIcon={<FmdGoodIcon sx={{ marginRight: '3px' }} />}>
                                            adresse
                                        </Button>
                                        <Dialog fullWidth={fullWidth} maxWidth={maxWidth} open={open} onClose={handleClose}>
                                            <DialogTitle>Ajouter adresse</DialogTitle>
                                            <DialogContent>
                                                <Box noValidate component="form" sx={{ display: 'flex', flexDirection: 'column', m: 'auto', width: 'fit-content' }}>
                                                    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                                                        <Stack direction="column" justifyContent="space-between" alignItems="flex-start" spacing={4}>
                                                            <Box spacing={1} sx={{ width: 250 }}>
                                                                <Input value={rue} onChange={(e) => setRue(e.target.value)} placeholder="rue" inputProps={ariaLabel} />
                                                            </Box>
                                                            <Box spacing={1} sx={{ width: 250 }}>
                                                                <Input value={serie} onChange={(e) => setSerie(e.target.value)} placeholder="serie" inputProps={ariaLabel} />
                                                            </Box>
                                                        </Stack>
                                                        <Stack direction="column" justifyContent="space-between" alignItems="flex-start" spacing={4} marginLeft={3}>
                                                            <Box spacing={1} sx={{ width: 250, marginBottom: 15 }}>
                                                                <Autocomplete
                                                                    options={VillesData}
                                                                    getOptionLabel={(option) => option.name || ''}
                                                                    id="clear-on-escape"
                                                                    clearOnEscape
                                                                    renderInput={(params) => (
                                                                        <TextField {...params} label="Villes" variant="standard" />
                                                                    )}
                                                                    onChange={(event, newValue) => setIdVille(newValue ? newValue.id : null)}
                                                                />
                                                            </Box>
                                                            <Box spacing={1} sx={{ width: 250 }}>
                                                                <Input value={postal} onChange={(e) => setPostal(e.target.value)} placeholder="code postal" inputProps={ariaLabel} />
                                                            </Box>
                                                        </Stack>
                                                    </Box>
                                                    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '1.5rem' }}>
                                                        <Button onClick={handleClose} variant="contained" endIcon={<BookmarkAddedIcon />} >Ajouter</Button>
                                                    </Box>
                                                </Box>
                                            </DialogContent>
                                            <DialogActions>
                                                <Button onClick={handleClose}>Close</Button>
                                            </DialogActions>
                                        </Dialog>
                                    </Stack>
                                    <Stack direction="column" justifyContent="space-between" alignItems="flex-start" spacing={4}>
                                        <Box spacing={1} sx={{ width: 350 }}>
                                            <Input sx={{ marginBottom: 5 }} value={description} onChange={(e) => setDescription(e.target.value)} placeholder="description" inputProps={ariaLabel} />
                                            <Autocomplete
                                                options={VillesData}
                                                getOptionLabel={(option) => option.name || ''}
                                                id="clear-on-escape"
                                                clearOnEscape
                                                renderInput={(params) => (
                                                    <TextField {...params} label="Villes" variant="standard" />
                                                )}
                                                onChange={(event, newValue) => setIdVille(newValue ? newValue.id : null)}
                                            />
                                        </Box>
                                    </Stack>
                                </Box>
                                <Box sx={{ marginTop: '2rem', width: '70%', height: '6rem', marginLeft: '11rem', border: 'grey solid 1px', position: 'relative', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                    <input onChange={handleFileChange} id="myfiles" multiple type="file" style={{ cursor: 'pointer', width: '5rem', height: '3rem', opacity: '0', position: 'absolute', top: '30%', paddingBottom: '1rem' }} />
                                    <AddPhotoAlternateIcon sx={{ width: '6rem', height: '6rem', cursor: 'pointer' }} />
                                    {images.length !== 0 && (
                                        <div className="image-wrapper" style={{ display: 'flex', flexWrap: 'wrap', maxHeight: '100%', overflowY: 'auto' }}>
                                            {images.map((image, index) => (
                                                <img
                                                    key={index}
                                                    src={image.img}
                                                    alt={`Image ${index}`}
                                                    style={{ width: '100px', height: '100px', margin: '5px' }}
                                                    onClick={() => handleDelete(image.id)}
                                                />
                                            ))}
                                        </div>
                                    )}
                                </Box>
                                <Box sx={{ display: 'grid', placeItems: 'center', marginTop: '2rem' }}>
                                    <Button onClick={notifySuccess}>Ajouter</Button>
                                    <ToastContainer />
                                </Box>
                            </Box>
                        </Box>
                    </Card>
                </ArgonBox>
                <Card>
                    <ArgonBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
                        <ArgonTypography variant="h6">All Destinations</ArgonTypography>
                    </ArgonBox>
                    <ArgonBox sx={{ width: '100%', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
                        {destinations.length !== 0 && destinations.map((destination) => (
                            destination && (
                                <Card key={destination.id} sx={{ width: 345, margin: 2, boxShadow: '0 3px 5px rgba(0,0,0,0.2)' }}>
                                    <CardMedia
                                        component="img"
                                        height="200"
                                        width="100%"
                                        image={destination?.images?.length > 0 ? destination.images[0] : "https://via.placeholder.com/150"}
                                        alt={destination.nom}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {destination?.nom}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            )
                        ))}
                    </ArgonBox>
                </Card>
            </ArgonBox>
            <Footer />
        </DashboardLayout>
    );
}

export default Destination;
