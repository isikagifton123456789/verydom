import React from 'react'
import {MenuItem, Paper,Box, TextField, Typography,Button, Grid, Card, CardContent} from "@mui/material"
import { useState } from 'react'
import { FaMap } from "react-icons/fa";
import { FaBed } from "react-icons/fa";
import { FaShower } from "react-icons/fa";
import Image from "../../assets/images/hero-img.jpg"


const Properties = () => {
    const [filter, setFilter] = useState("value 1")
    const property=[
        {
            
            title: "Cozy Suburban Cottage",
            location: "Portland, OR",
            bedrooms: 3,
            bathrooms: 2,
            sqft: 1500,
            price: "$3,200/mo",
            image:Image,
            forSale: "For Sale",
            verified: "Verified",
            type: "House",
            rating: "★ 4.5",
          },
          {
            
            title: "Luxury Waterfront Condo",
            location: "Miami, FL",
            bedrooms: 4,
            bathrooms: 3,
            sqft: 2200,
            price: "$5,000/mo",
            image:Image,
            forSale: "For Rent",
            verified: "Verified",
            type: "Condo",
            rating: "★ 4.9",
          },
          {
            
            title: "Charming Historic Townhouse",
            location: "Charleston, SC",
            bedrooms: 3,
            bathrooms: 2.5,
            sqft: 1800,
            price: "$3,800/mo",
            image:Image,
            forSale: "For Rent",
            verified: "Verified",
            type: "Townhouse",
            rating: "★ 4.7",
          },
          {
            
            title: "Sleek Urban Loft",
            location: "Seattle, WA",
            bedrooms: 1,
            bathrooms: 1,
            sqft: 800,
            price: "$2,000/mo",
            image:Image,
            forSale: "For Sale",
            verified: "",
            type: "Loft",
            rating: "★ 4.6",
          },
          {
            
            title: "Spacious Family Home",
            location: "Denver, CO",
            bedrooms: 5,
            bathrooms: 4,
            sqft: 3000,
            price: "$4,500/mo",
            image:Image,
            forSale: "For Sale",
            verified: "Verified",
            type: "House",
            rating: "★ 4.9",
          },
          {
            title: 'Cozy Suburban Cottage',
            location: 'Portland, OR',
            bedrooms: 3,
            bathrooms: 2,
            sqft: 1500,
            price: '$3,200/mo',
            image: Image, 
            forSale: 'For Sale',
            verified: 'Verified',
            type: 'House',
            rating: '★ 4.5',
          },
        
    ]
    const count = property.length
  return (
    <Paper sx={{padding:2}}>

            <Button startIcon={<FaMap />} sx={{mb:2, placeSelf:"end"}}>
                Hide Map
            </Button>
            <Box sx={{display:'flex', flexDirection:'row',mb:2, justifyContent:"space-between"}}>
                <Typography variant='h5' fontWeight={700}>
                    {count} Properties available
                </Typography>
                <TextField
                
                select
                sx={{width:200}}
                >
                    <MenuItem   value="value 1">Newest First</MenuItem>
                    <MenuItem value="value 2">Price: High to Low</MenuItem>
                    <MenuItem value="value 3">Price:Low to High</MenuItem>
                    <MenuItem  value="value 4" >Highly Rated</MenuItem>
                </TextField>
            </Box>
            <Box border={3}></Box>
          
    <Box sx={{mt:3, display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(2, 1fr)"}, gap:4}}>
    {
        property && property.map((item)=>(
            <Card
            key={item.title}
            sx={{
              maxWidth: 500,
              borderRadius: 3,
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.15)',
              },
              backgroundColor: '#fff',
            }}
          >
            <CardContent sx={{ padding: 0 }}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  mb: 2,
                  position: 'relative',
                  width: 500,
                  height: 400,
                  overflow: 'hidden',
                }}
              >
                <Box
                  component="img"
                  sx={{
                    width: 500,
                    height: 400,
                    objectFit: 'cover',
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.05)',
                    },
                  }}
                  src={item.image}
                  alt="Property"
                />
      
                
                <Typography
                  variant="body2"
                  sx={{
                    position: 'absolute',
                    top: 12,
                    left: 12,
                    backgroundColor: 'rgba(34, 197, 94, 0.9)', 
                    color: '#fff',
                    borderRadius: 2,
                    padding: '6px 12px',
                    fontWeight: 500,
                    fontSize: 12,
                    textTransform: 'uppercase',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                  }}
                >
                  {item.forSale}
                </Typography>
      
                <Typography
                  variant="body2"
                  sx={{
                    position: 'absolute',
                    top: 12,
                    right: 12,
                    backgroundColor: 'rgba(59, 130, 246, 0.9)', 
                    color: '#fff',
                    borderRadius: 2,
                    padding: '6px 12px',
                    fontWeight: 500,
                    fontSize: 12,
                    textTransform: 'uppercase',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                  }}
                >
                  {item.verified}
                </Typography>
      
                <Typography
                  variant="body2"
                  sx={{
                    position: 'absolute',
                    bottom: 12,
                    left: 12,
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    color: '#1a1a1a',
                    borderRadius: 2,
                    padding: '6px 12px',
                    fontWeight: 500,
                    fontSize: 12,
                    textTransform: 'uppercase',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                  }}
                >
                  {item.type}
                </Typography>
      
                <Typography
                  variant="body2"
                  sx={{
                    position: 'absolute',
                    bottom: 12,
                    right: 12,
                    backgroundColor: 'rgba(255, 193, 7, 0.9)', 
                    color: '#fff',
                    borderRadius: 2,
                    padding: '6px 12px',
                    fontWeight: 500,
                    fontSize: 12,
                    textTransform: 'uppercase',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                  }}
                >
                  {item.rating}
                </Typography>
              </Box>
      
              <Box sx={{ padding: '16px 24px' }}>
                <Typography
                  variant="h6"
                  fontWeight={700}
                  sx={{
                    color: '#1a1a1a',
                    mb: 1,
                    letterSpacing: '-0.02em',
                  }}
                >
                    {item.title}
                </Typography>
                <Typography
                  variant="body2"
                  fontWeight={400}
                  fontStyle="italic"
                  sx={{
                    color: '#666',
                    mb: 2,
                  }}
                >
                  {item.location}
                </Typography>
      
                <Grid container sx={{ display: 'flex', gap: 2, mb: 2 }}>
                  <Grid item sx={{display:"flex", gap:2}}>
                    <Typography variant="body2" sx={{ fontWeight: 500, color: '#333' }}>
                      {item.bedrooms } 
                    </Typography>
                    <Typography>
                        <FaBed />
                    </Typography>
                  </Grid>
                  <Grid item sx={{display:"flex", gap:2}}>
                    <Typography variant="body2" sx={{ fontWeight: 500, color: '#333' }}>
                      {item.bathrooms }
                    </Typography>
                    <Typography>
                        <FaShower />
                    </Typography>
                  </Grid>
                  <Grid item sx={{display:"flex", gap:1}}>
                    <Typography variant="body2" sx={{ fontWeight: 500, color: '#333' }}>
                      {item.sqft}
                    </Typography>
                    <Typography variant='body2' sx={{ fontWeight: 500, color: '#333'}}>
                        sqft
                    </Typography>
                  </Grid>
                </Grid>
      
                <Grid container sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Grid item>
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 600,
                        color: '#1a1a1a',
                        letterSpacing: '-0.02em',
                      }}
                    >
                      {item.price}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: '#3b82f6',
                        color: '#fff',
                        borderRadius: 2,
                        padding: '8px 20px',
                        textTransform: 'none',
                        fontWeight: 500,
                        '&:hover': {
                          backgroundColor: '#2563eb',
                          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                        },
                      }}
                    >
                      View More
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </CardContent>
          </Card>
        ))
    }  
    
    </Box>
    </Paper>
  )
}

export default Properties


