// @mui material components
import Card from "@mui/material/Card";

// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";

// Argon Dashboard 2 MUI examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import Table from "examples/Tables/Table";
import FmdGoodIcon from '@mui/icons-material/FmdGood';

// Data
import authorsTableData from "layouts/tables/data/authorsTableData";
import projectsTableData from "layouts/tables/data/projectsTableData";
import { Autocomplete, Box, Button, Input, Stack, TextField } from "@mui/material";
import CardAttraction from "./Components/CardAttraction";
import { useState } from "react";
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';

import imgTest from '../../assets/images/ImgRestaurant/res1.jpg';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

function Attraction() {
    const { columns, rows } = authorsTableData;
    const { columns: prCols, rows: prRows } = projectsTableData;

    const ariaLabel = { 'aria-label': 'description' };

    // read data inputs 
    const [name, setname] = useState(null);
    const [type, settype] = useState(null);
    const [address, setaddress] = useState(null);
    const [description, setdescription] = useState(null);
    const [images, setImages] = useState([]);
    const [open, setOpen] = useState(false);
    const [fullWidth, setFullWidth] = useState(true);
    const [maxWidth, setMaxWidth] = useState('sm');

    const handleFileChange = (e) => {
        const fileList = e.target.files;
        const imageFiles = Array.from(fileList);
        const imageList = imageFiles.map((file) => {
            const reader = new FileReader();
            return new Promise((resolve) => {
                reader.onload = (event) => {
                    resolve(event.target.result);
                };
                reader.readAsDataURL(file);
            });
        });

        Promise.all(imageList).then((results) => {
            setImages((prevImages) => [
                ...prevImages,
                { id: Date.now(), img: results },
            ]);
        });
    };

    const handleDelete = (id) => {
        setImages((prevImages) => prevImages.filter((image) => image.id !== id));
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const data = [
        { title: 'agadir' },
        { title: 'marrakech' },
        { title: 'meknas' }
    ];

    const defaultProps = {
        options: data,
        getOptionLabel: (option) => option.title,
    };

    return (
        <DashboardLayout>
            <DashboardNavbar />
            <ArgonBox py={3}>
                <ArgonBox mb={3}>
                    <Card sx={{ padding: '1rem' }} >
                        <ArgonBox display="flex" justifyContent="center" alignItems="center" p={3}>
                            <ArgonTypography variant="h6"> Ajouter Attraction </ArgonTypography>
                        </ArgonBox>
                        <Box style={{ display: 'flex', borderRadius: '4rem', flexDirection: 'row', flexWrap: 'wrap', width: '100%' }}>
                            <Box sx={{ width: '50%' }} >
                                <Box sx={{ width: ' 100%', minHeight: '25vh', paddingLeft: '6rem', display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly ', flexWrap: 'wrap' }}>
                                    <Stack>
                                        <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                                            <Box sx={{ width: 250, marginRight: '1rem', marginLeft: '5rem' }}>
                                                <Input onChange={(e) => setname(e.target.value)} placeholder="Nom" inputProps={ariaLabel} />
                                            </Box>
                                            <Box sx={{ width: 250, marginRight: '1rem', marginLeft: '3rem' }}>
                                                <Input onChange={(e) => settype(e.target.value)} placeholder="Type" inputProps={ariaLabel} />
                                            </Box>
                                            
                                        </Box>
                                    </Stack>
                                    <Stack direction="column" justifyContent="space-between" alignItems="flex-start" spacing={4}>
                                   
                                       
                                        <Box sx={{ width: '50rem' , display:'flex', flexDirection:'row' }}>

                                        <Box sx={{ width: 250, marginRight: '1rem', marginLeft: '5rem' }}>
                                                <Input onChange={(e) => setdescription(e.target.value)} placeholder="Description" inputProps={ariaLabel} />
                                            </Box>
                                            <Button onClick={handleClickOpen} variant="outlined" sx={{width: '250px', color: '#00FFFF', marginLeft:'3.1rem' }} startIcon={<FmdGoodIcon sx={{ marginRight: '3px' }} />}>
                                                adresse
                                            </Button>
                                            <Dialog fullWidth={fullWidth} maxWidth={maxWidth} open={open} onClose={handleClose}>
                                                <DialogTitle> Ajouter adresse </DialogTitle>
                                                <DialogContent>
                                                    <Box noValidate component="form" sx={{ display: 'flex', flexDirection: 'column', m: 'auto', width: 'fit-content' }}>
                                                        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                                                            <Stack direction="column" justifyContent="space-between" alignItems="flex-start" spacing={4}>
                                                                <Box spacing={1} sx={{ width: 250 }}>
                                                                    <Input value={name} onChange={(e) => setname(e.target.value)} placeholder="rue" inputProps={ariaLabel} />
                                                                </Box>
                                                                <Box spacing={1} sx={{ width: 250 }}>
                                                                    <Input value={type} onChange={(e) => settype(e.target.value)} placeholder="serie" inputProps={ariaLabel} />
                                                                </Box>
                                                            </Stack>
                                                            <Stack direction="column" justifyContent="space-between" alignItems="flex-start" spacing={4} marginLeft={3}>
                                                                <Box spacing={1} sx={{ width: 250 }}>
                                                                    <Autocomplete {...defaultProps} id="clear-on-escape" clearOnEscape renderInput={(params) => (
                                                                        <TextField {...params} label="clearOnEscape" variant="standard" />
                                                                    )} />
                                                                </Box>
                                                                <Box spacing={1} sx={{ width: 250 }}>
                                                                    <Input value={type} onChange={(e) => settype(e.target.value)} placeholder="code postal" inputProps={ariaLabel} />
                                                                </Box>
                                                            </Stack>
                                                        </Box>
                                                        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '1.5rem' }}>
                                                            <Button variant="contained" endIcon={<BookmarkAddedIcon />}>  Ajouter </Button>
                                                        </Box>
                                                    </Box>
                                                </DialogContent>
                                                <DialogActions>
                                                    <Button
                                                        onClick={handleClose}
                                                        >
                                                            Close
                                                        </Button>
                                                    </DialogActions>
                                                </Dialog>
                                            </Box>
                                        </Stack>
                                    </Box>
                                    <Box sx={{ marginTop: '1rem', width: '80%', height: '6rem', marginLeft: '16rem', border: ' grey solid 1px', position: 'relative', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                        <input onChange={handleFileChange} id="myfiles" multiple type="file" style={{ cursor: 'pointer', width: '5rem', height: '3rem', opacity: '0', position: 'absolute', top: '30%', border: 'red solid 1px', paddingBottom: '1rem' }} />
                                        <AddPhotoAlternateIcon sx={{ width: '6rem', height: '6rem', cursor: 'pointer' }} />
                                        {images.length !== 0 && (
                                            <div className="image-wrapper" style={{ display: 'flex', flexWrap: 'wrap', maxHeight: '100% ', overflowY: 'auto' }}>
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
                                    <Box display="flex" flexDirection="column" marginLeft={52} alignItems="center" p={5}>

                                    <Stack spacing={2} direction="row">
      
                                       <Button variant="contained">ajouter</Button>
      
                                   </Stack>
                                    </Box>
                                </Box>
                                
                            </Box>
                        </Card>
                    </ArgonBox>
                    <Card>
                        <ArgonBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
                            <ArgonTypography variant="h6">Projects table</ArgonTypography>
                        </ArgonBox>
                        <ArgonBox
                            sx={{
                                "& .MuiTableRow-root:not(:last-child)": {
                                    "& td": {
                                        borderBottom: ({ borders: { borderWidth, borderColor } }) =>
                                            `${borderWidth[1]} solid ${borderColor}`,
                                    },
                                },
                            }}
                        >
                            <Box sx={{ width: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <CardAttraction name={name} description={description} />
                                </Box>
                        </ArgonBox>
                    </Card>
                </ArgonBox>
                <Footer />
            </DashboardLayout>
        );
    }
    
    export default Attraction;
    