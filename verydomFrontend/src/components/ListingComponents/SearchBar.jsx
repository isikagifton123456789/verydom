import React from 'react'
import {Box, Container,Typography,Button, MenuItem, Paper, TextField, Slider, IconButton, Icon} from "@mui/material"
import { useState } from 'react';
import { MdClose } from "react-icons/md";
const MAX =500000;
const MIN = 0;
const priceRange = [
  {
    value: MIN,
    label: '',
  },
  {
    value: MAX,
    label: '',
  },
];

const SearchBar = () => {
  const [propertyType, setPropertyType] = useState('Any Type');
  const [price, setPrice] = useState([MIN]);

  const handlePropertyTypeChange = (event) => {
    setPropertyType(event.target.value);
  }
  const handlePriceChange = ( _,newValue) => {
    
    setPrice(newValue);
  };
  return (
    <Paper elevation={12} sx={{mt:10, ml:4, mr:4, display:"flex",  flexDirection:"column",pl:2, pr:2,borderRadius:2}}>
        <Box elevation={12}
        sx={{display:'flex',flexDirection:'row',justifyContent:'space-between', alignItems:"center", gap:4, padding:2, borderRadius:2, flexWrap:"wrap"}}
        >
          <Box component={"form"} sx={{mt:2, display:"flex", flexDirection:"row", gap:3,alignContent:"center", justifyContent:"center", flexWrap:"wrap"}}>
            <TextField 
            type='text'
            label='City,Address,Zipcode'
            variant='outlined'
            
            />  
            <TextField 
             label='Property Type'
             variant='outlined'
             value={propertyType}
             onChange={handlePropertyTypeChange}
             select
             sx={{width:200}}
             >
            
                <MenuItem value="Any Type">Any Type</MenuItem>
                <MenuItem value="Apartment">Apartment</MenuItem>
                <MenuItem value="House">House</MenuItem>
                <MenuItem value="Condo">Condo</MenuItem>
          
              
              </TextField>        
          </Box> 
          <Box sx={{ width: 250 }}>
            <Box display={"flex" }sx={{gap:2, justifyContent:"space-between"}}>
            <Typography variant='subtitle1' fontSize={12} fontWeight={700}>
              Price Range
            </Typography>
            <Box sx={{display:"flex", gap:"2"}}>
            <Typography variant="body2" sx={{fontWeight:"700"}}>${price.toLocaleString()} - </Typography>
            <Typography
              variant="body2"
              onClick={() => setPrice(MAX)}
              sx={{ cursor: 'pointer', fontWeight:"700" }}
            >
          ${MAX}
        </Typography>
            </Box>
            </Box>
          <Slider
            priceRange={priceRange}
            step={10}
            value={price}
           
            min={MIN}
            max={MAX}
            onChange={handlePriceChange}
            sx={{
              mt: 1,
              
              '& .MuiSlider-track': {
                border: '2px solid #000', 
                backgroundColor: 'transparent', 
                height: 2,
              },
              '& .MuiSlider-rail': {
                backgroundColor: '#000', 
                height: 4,
                opacity: 1,
              },
              '& .MuiSlider-thumb': {
                height: 20,
                width: 20,
                backgroundColor: '#fff', 
                border: '2px solid #000', 
                '&:hover': {
                  boxShadow: '0 0 0 8px rgba(0, 0, 0, 0.1)',
                },
                '&.MuiSlider-active': {
                  boxShadow: '0 0 0 12px rgba(0, 0, 0, 0.1)',
                },
              },
            }}
          /> 
        </Box>
        <Box sx={{display:"flex", gap:3}}>
        <Button variant='contained' sx={{backgroundColor:"black"}}>Search</Button>
        <IconButton sx={{color:"black", fontSize:30}}>
            <MdClose />
        </IconButton>        
        </Box>                   
        </Box>

        <Box sx={{display:"flex", gap:2, justifySelf:"flex-end",mb:3}}>
            <IconButton sx={{fontSize:15}}>
                Any Rating
            </IconButton>
            <IconButton sx={{fontSize:15}}>
                Available now
            </IconButton>
            <IconButton sx={{fontSize:15}}>
                Any Rating
            </IconButton>
        </Box>          
    </Paper>
  )
}

export default SearchBar
