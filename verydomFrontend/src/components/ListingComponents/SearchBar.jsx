import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  MenuItem,
  Paper,
  TextField,
  Slider,
  IconButton,
} from '@mui/material';
import { MdClose } from 'react-icons/md';

const MAX = 485000;
const MIN = 0;
const priceMarks = [
  {
    value: MIN,
    label: '$0',
  },
  {
    value: MAX,
    label: `$${MAX.toLocaleString()}`,
  },
];

const SearchBar = () => {
  const [propertyType, setPropertyType] = useState('Any Type');
  const [price, setPrice] = useState(MIN); // Start at minimum (0)

  const handlePropertyTypeChange = (event) => {
    setPropertyType(event.target.value);
  };

  const handlePriceChange = (_, newValue) => {
    setPrice(newValue); // Update price state
  };

  return (
    <Box
      sx={{
        width: '100vw',
        mt: 10,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        overflowX: 'hidden',
        overflowY: 'hidden',
      }}
    >
      <Box
        component={Paper}
        elevation={12}
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 4,
          padding: 2,
          borderRadius: 2,
          flexWrap: 'wrap',
          width: '90%',
          maxWidth: 1200,
          boxShadow: 3,
        }}
      >
        <Box
          component={'form'}
          sx={{
            mt: 2,
            display: 'flex',
            flexDirection: 'row',
            gap: 3,
            alignContent: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          <TextField
            type="text"
            label="City, address or ZIP"
            variant="outlined"
            sx={{ width: 200 }}
          />
          <TextField
            label="Property Type"
            variant="outlined"
            value={propertyType}
            onChange={handlePropertyTypeChange}
            select
            sx={{ width: 150 }}
          >
            <MenuItem value="Any Type">Any Type</MenuItem>
            <MenuItem value="Apartment">Apartment</MenuItem>
            <MenuItem value="House">House</MenuItem>
            <MenuItem value="Condo">Condo</MenuItem>
          </TextField>
        </Box>

        <Box sx={{ width: 300, display: 'flex', alignItems: 'center', gap: 2 }}>
          <Box sx={{ width: '100%' }}>
            <Box display="flex" sx={{ gap: 2, justifyContent: 'space-between' }}>
              <Typography variant="subtitle1" fontSize={12} fontWeight={700}>
                Price Range
              </Typography>
              <Typography variant="body2" fontWeight={700}>
                ${price.toLocaleString()}
              </Typography>
            </Box>
            <Slider
              value={price}
              onChange={handlePriceChange}
              step={1000}
              min={MIN}
              max={MAX}
              marks={priceMarks}
              sx={{
                mt: 1,
                '& .MuiSlider-track': {
                  border: 'none',
                  backgroundColor: '#000',
                  height: 2,
                },
                '& .MuiSlider-rail': {
                  backgroundColor: '#000',
                  height: 2,
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
                '& .MuiSlider-markLabel': {
                  fontSize: 12,
                  fontWeight: 700,
                },
              }}
            />
          </Box>
          <IconButton sx={{ color: 'black', fontSize: 30 }}>
            <MdClose />
          </IconButton>
        </Box>

        <Box sx={{ display: 'flex', gap: 3 }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#1A3C34',
              color: 'white',
              width: 200,
              height: 56,
              borderRadius: 1,
              textTransform: 'none',
              fontWeight: 700,
            }}
          >
            Search
          </Button>
        </Box>
      </Box>

      <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
        <Button
          variant="outlined"
          sx={{
            borderRadius: 20,
            textTransform: 'none',
            borderColor: '#000',
            color: '#000',
            fontSize: 14,
            padding: '5px 15px',
          }}
        >
          Any Rating
        </Button>
        <Button
          variant="outlined"
          sx={{
            borderRadius: 20,
            textTransform: 'none',
            borderColor: '#000',
            color: '#000',
            fontSize: 14,
            padding: '5px 15px',
          }}
        >
          Available now
        </Button>
        <Button
          variant="outlined"
          sx={{
            borderRadius: 20,
            textTransform: 'none',
            borderColor: '#000',
            color: '#000',
            fontSize: 14,
            padding: '5px 15px',
          }}
        >
          Coming soon
        </Button>
      </Box>
    </Box>
  );
};

export default SearchBar;