import React, { useState } from 'react';
import { Autocomplete, TextField, Typography, Grid } from '@mui/material';


const countriesList = [
  { label: 'India', states: ['Gujarat', 'Madhya Pradesh', 'Uttar Pradesh'] },
  { label: 'USA', states: ['New York', 'California', 'Texas'] },
  { label: 'South-Africa' , states: ['Gauteng','Limpopo','North West','Eastern Cape']}
];

const CountrySelector = () => {
  const [selectedCountry, setSelectedCountry] = useState(countriesList[0]);

  const handleCountryChange = (_,newCountry) => {
    setSelectedCountry(newCountry);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h5"><div className='selection'>Country Selection</div></Typography>
      </Grid>
      
      <Grid item xs={6}>
        <Autocomplete
          options={countriesList}
          getOptionLabel={(option) => option.label}
          value={selectedCountry}
          onChange={handleCountryChange}
          renderInput={(params) => <TextField {...params} label="Select a Country" />}
        />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h5">Selected Country: {selectedCountry.label}</Typography>
        <Typography variant="h6">States:</Typography>
        <ul>
          {selectedCountry.states.map((state, index) => (
            <div class="state-comp"><li key={index}>{state}</li></div>
          ))}
        </ul>
      </Grid>
     
    </Grid>
  );
};

export default CountrySelector;
