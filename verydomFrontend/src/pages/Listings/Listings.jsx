import { Box } from '@mui/material'
import React from 'react'
import SearchBar from '../../components/ListingComponents/SearchBar'

const Listings = () => {
  return (
    <Box sx={{
      height:"100vh",
      width:"100vw",
    }}>
      <SearchBar />
    </Box>
  )
}

export default Listings
