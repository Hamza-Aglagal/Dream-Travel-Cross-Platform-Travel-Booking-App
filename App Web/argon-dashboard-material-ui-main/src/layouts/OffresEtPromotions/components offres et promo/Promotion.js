import React from 'react';
import { Box, Card, CardContent, InputLabel, Typography, TextField } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useState } from 'react';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;
const Villes = ['Marrakech', 'Agadir', 'Tanger', 'Safi', 'Casablanca', 'Rabat'];
const Destinations = ['Ourika', 'Marina', 'Cote'];
const Attractions = ['Kotoubia', 'Agadir Oufella', 'Qssar Labdiaa'];

export const Promotion = () => {
  const [value, setValue] = useState(dayjs('2022-04-17'));

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Card sx={{ width: '95%', minHeight: "80vh", mt: 2, position: 'relative', margin: '0 auto', borderRadius: '100px', boxShadow: "4px 4px 10px grey" }}>
        <CardContent>
          <Typography variant="h5" component="div" gutterBottom sx={{ textAlign: 'center', marginTop: 2 }}>

            <Box>
              <img src="https://verzus.com/cdn/shop/files/Membership_Page_Icons-01.png?v=1688029888.jpg" alt="Votre image" style={{ width: '100px', height: '100px', marginTop: '20px' }} />
            </Box>
          </Typography>
          <Card sx={{ borderRadius: '20px', padding: '90px', backgroundColor: 'white' }}>
            <Typography variant="body1">
              <Box sx={{ display: 'flex', flexDirection: 'row', gap: '20px', justifyContent: "space-between" }}>
                <Autocomplete
                  multiple
                  options={Villes}
                  disableCloseOnSelect
                  getOptionLabel={(option) => option}
                  renderOption={(props, option, { selected }) => (
                    <li {...props}>
                      <Checkbox
                        icon={icon}
                        checkedIcon={checkedIcon}
                        style={{ marginRight: 8 }}
                        checked={selected}
                      />
                      {option}
                    </li>
                  )}
                  style={{ width: 300 }}
                  renderInput={(params) => (
                    <TextField {...params} label="Villes" placeholder="Favorites" />
                  )}
                />
                <Autocomplete
                  multiple
                  options={Destinations}
                  disableCloseOnSelect
                  getOptionLabel={(option) => option}
                  renderOption={(props, option, { selected }) => (
                    <li {...props}>
                      <Checkbox
                        icon={icon}
                        checkedIcon={checkedIcon}
                        style={{ marginRight: 8 }}
                        checked={selected}
                      />
                      {option}
                    </li>
                  )}
                  style={{ width: 300 }}
                  renderInput={(params) => (
                    <TextField {...params} label="Destinations" placeholder="Favorites" />
                  )}
                />
                <Autocomplete
                  multiple
                  options={Attractions}
                  disableCloseOnSelect
                  getOptionLabel={(option) => option}
                  renderOption={(props, option, { selected }) => (
                    <li {...props}>
                      <Checkbox
                        icon={icon}
                        checkedIcon={checkedIcon}
                        style={{ marginRight: 8 }}
                        checked={selected}
                      />
                      {option}
                    </li>
                  )}
                  style={{ width: 300 }}
                  renderInput={(params) => (
                    <TextField {...params} label="Attractions" placeholder="Favorites" />
                  )}
                />
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'row', gap: '20px', justifyContent: 'center', alignItems: 'center', marginTop: '100px' }}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker label="Date Debut " defaultValue={dayjs('2022-04-17')} />
                  <DatePicker
                    label="Date Fin"
                    value={value}
                    onChange={(newValue) => setValue(newValue)}
                  />
                </LocalizationProvider>
              </Box>
              <Box
                component="form"
                sx={{
                  '& > :not(style)': { m: 1 },
                  margin: 'auto',
                  width: '200px',
                  marginTop: '100px'
                }}
                noValidate
                autoComplete="off"
              >
                <InputLabel htmlFor="reduction-input">Reduction (%)</InputLabel>
                <Input
                  id="reduction-input"
                  inputProps={{ 'aria-label': 'Reduction' }}
                  sx={{ textAlign: 'center' }}
                />
              </Box>


              <Box sx={{ display: 'flex', flexDirection: 'row', gap: '20px', justifyContent: 'center', alignItems: 'center', marginTop: '100px' }}>

              <ButtonGroup
                disableElevation
                variant="contained"
                aria-label="Disabled button group"
              >
                <Button>Add Promo</Button>
              </ButtonGroup>

                 </Box>
            </Typography>
          </Card>
        </CardContent>
      </Card>
    </Box>
  );
};
