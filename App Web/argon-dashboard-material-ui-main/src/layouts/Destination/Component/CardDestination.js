import React, { useState } from 'react'

import '../assets/CardDestination.css'
import { Box, Button, Checkbox, FormControlLabel } from '@mui/material'
import { CheckBox } from '@mui/icons-material'



const CardDestination = () => {

    const [isChecked, setIsChecked] = useState(false);
    const handleChange = (event) => {
        setIsChecked(event.target.checked);
    };

    return (


        <Box className="card" >
            <Box className={`cover item-a  ${isChecked && 'cheked'} `} sx={{ backgroundImage: "url(https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?auto=format&fit=crop&w=600&q=80)" }} >
                <h1>Tropical<br />Leaf</h1>
                {/* <Box className="price">$35</Box> */}
                <Box className="card-back" >
                    <FormControlLabel
                        control={<Checkbox sx={{ width: "50%", height: '50%', position: 'absolute', top: '25%', left: '25%' }} checked={isChecked} onChange={handleChange} />}
                        sx={{ width: "100%", height: '100%', position: 'relative' }}
                    />
                </Box>
            </Box>
        </Box>


    )
}

export default CardDestination


