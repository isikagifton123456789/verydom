import React from 'react'
import {MenuItem, Paper,Box, TextField, Typography,Button, Grid, Card, CardContent, Modal} from "@mui/material"
import { useState } from 'react'
import { FaMap } from "react-icons/fa";
import { FaBed } from "react-icons/fa";
import { FaShower } from "react-icons/fa";
import Image from "../../assets/images/hero-img.jpg"


const Properties = () => {
    const [filter, setFilter] = useState("value 1")
    const [open, setOpen] = useState(false);
    const [selectedProperty, setSelectedProperty] = useState(null);
    
    const handleOpen = (item) => {
        setSelectedProperty(item);
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }
    const property=[
        {
            
            title: "Cozy Suburban Cottage",
            location: "Portland, OR",
            bedrooms: 3,
            bathrooms: 2,
            area: 1500,
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
            area: 2200,
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
            area: 1800,
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
            area: 800,
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
            area: 3000,
            price: "$4,500/mo",
            image:Image,
            forSale: "For Sale",
            verified: "Verified",
            type: "House",
            rating: "★ 4.9",
          }
    
        
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
          
    <Box sx={{mt:3, display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(2, 1fr)"}, gap:2}}>
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
                      {item.area}
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
                      onClick={() => handleOpen(item)}
                      type="button"
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
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{zIndex:1300}}
      >

        <Card
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: { xs: '90%', sm: 600 },
            maxHeight: '80vh',
            overflowY: 'auto',
            bgcolor: '#fff',
            borderRadius: 3,
            boxShadow: '0 8px 30px rgba(0, 0, 0, 0.2)',
            p: 4,
            outline: 'none',
          }}
        >
          {selectedProperty ? (
            <>
              <Typography variant="h4" fontWeight={700} sx={{ mb: 2, color: '#1a1a1a' }} id="property-details-modal">
                {selectedProperty.title}
              </Typography>
              <Box
                component="img"
                sx={{
                  width: '100%',
                  maxWidth: 600,
                  height: 300,
                  objectFit: 'cover',
                  borderRadius: 2,
                  mb: 3,
                }}
                src={selectedProperty.image}
                alt={selectedProperty.title}
                onError={() => console.error('Popup image failed to load:', selectedProperty.image)}
              />
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Typography variant="h6" fontWeight={500} sx={{ mb: 1 }}>
                    Location
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#666' }}>
                    {selectedProperty.location}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="h6" fontWeight={500} sx={{ mb: 1 }}>
                    Price
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#666' }}>
                    {selectedProperty.price}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="h6" fontWeight={500} sx={{ mb: 1 }}>
                    Bedrooms
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#666' }}>
                    {selectedProperty.bedrooms} bd
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="h6" fontWeight={500} sx={{ mb: 1 }}>
                    Bathrooms
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#666' }}>
                    {selectedProperty.bathrooms} ba
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="h6" fontWeight={500} sx={{ mb: 1 }}>
                    Size
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#666' }}>
                    {selectedProperty.area} sqft
                  </Typography>
                </Grid>
                <Grid item xs={12} sm= {6}>
                  <Typography variant="h6" fontWeight={500} sx={{ mb: 1 }}>
                    Type
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#666' }}>
                    {selectedProperty.type}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="h6" fontWeight={500} sx={{ mb: 1 }}>
                    Status
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#666' }}>
                    {selectedProperty.forSale}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="h6" fontWeight={500} sx={{ mb: 1 }}>
                    Verified
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#666' }}>
                    {selectedProperty.verified || 'Not Verified'}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="h6" fontWeight={500} sx={{ mb: 1 }}>
                    Rating
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#666' }}>
                    {selectedProperty.rating}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h6" fontWeight={500} sx={{ mb: 1 }}>
                    Description
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#666' }}>
                    {selectedProperty.description}
                  </Typography>
                </Grid>
              </Grid>
             <Grid container sx={{display:'flex', flexDirection:"row", justifyContent:"space-between"}}>
                <Grid item xs={12} sm={6}>
                <Button
                variant="outlined"
                onClick={handleClose}
                sx={{
                  mt: 3,
                  borderColor: '#3b82f6',
                  color: '#3b82f6',
                  textTransform: 'none',
                  fontWeight: 500,
                  '&:hover': {
                    borderColor: '#2563eb',
                    color: '#2563eb',
                    backgroundColor: 'rgba(37, 99, 235, 0.04)',
                  },
                }}
                
              >
                Close
              </Button>

                </Grid>
            <Grid item xs={12} sm={6}sx={{display:'flex', flexDirection:"row", gap:2}}>
                 <Button
                       variant="outlined"                
                       sx={{
                         mt: 3,
                         
                         textTransform: 'none',
                         fontWeight: 500,                         
                       }}
                 >
                    Send Interest
                </Button>   
                <Button
                variant="contained"                
                sx={{
                  mt: 3,
                  backgroundColor: '#3b82f6',
                  textTransform: 'none',
                  fontWeight: 500,
                  '&:hover': {
                    backgroundColor: '#2563eb',
                  },
                }}
                
              >
                Pay to Contact
              </Button>

                </Grid>
              </Grid>
            </>
          ) : (
            <Typography variant="h6" color="error">
              No property selected
            </Typography>
          )}
        </Card>


      </Modal>
    </Paper>
    
  )
}

export default Properties


