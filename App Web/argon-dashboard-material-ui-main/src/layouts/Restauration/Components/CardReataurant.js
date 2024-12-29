import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FmdGoodIcon from '@mui/icons-material/FmdGood';

import img from '../../../assets/images/ImgRestaurant/res1.jpg'
import { Box } from '@mui/material';


const CardReataurant = () => {


    return (


        <Card sx={{ width: '27rem', height: '9rem', display: 'flex', flexDirection: 'row', position: 'relative', boxShadow: '1px 3px 5px grey ' }}>

            <Box sx={{ width: '50%', height: '100%' }}>

                <img
                    alt="green iguana"
                    style={{ width: '100%' }}
                    src={img}
                />

            </Box>


            <CardContent sx={{ width: '50%', height: '100%', display: "flex", flexDirection: 'column', justifyContent: 'space-between' }} >


                <Typography gutterBottom variant="h5" component="div" sx={{ display: "flex", flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Box> name  </Box>
                    <Box  > 30$ </Box>
                </Typography>

                <Typography variant="body2" color="text.secondary">
                    Specialité
                </Typography>

                <Typography variant="body2" color="text.secondary" sx={{ display: "flex", flexDirection: 'row', alignItems:'center' }} >
                    <FmdGoodIcon sx={{marginRight:'3px'}} />
                    Lizard
                </Typography>

            </CardContent>


            {/* <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions> */}
        </Card>



    )
}

export default CardReataurant


