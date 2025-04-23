import { Box } from '@mui/material'
import React from 'react'
import SearchBar from '../../components/ListingComponents/SearchBar'
import Properties from '../../components/ListingComponents/Properties'

const Listings = () => {
  return (
    <Box sx={{
      minHeight:"100vh",
      overflow:"hidden"
    }}>
      <SearchBar />
      <Properties />      
    </Box>
  )
}

export default Listings
