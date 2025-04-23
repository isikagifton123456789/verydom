import { Box, TextField, Typography,Paper,Button } from '@mui/material'
import React from 'react'

const ResetPassword = () => {
  return (
    <Box
    sx={{
      mt:10,        
      width: '100%',         
      minHeight: '100vh', 
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
     
      background: 'linear-gradient(to bottom, #e3f2fd, #bbdefb)',
      padding: { xs: 2, sm: 3, md: 4 }, 
      width: '100vw',
      boxSizing: 'border-box',
    }}
  >
    <Paper
      elevation={10}
      sx={{
        padding: { xs: 2, sm: 3 }, 
        borderRadius: 2,
        background: 'linear-gradient(135deg, #ffffff 30%, #f5f7fa 90%)',
        width: '100%',
        maxWidth: 400, 
        minWidth: { xs: 280, sm: 320 }, 
        textAlign: 'center',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)', 
      }}
    >
      
      <Typography
        variant="h5"
        sx={{
          my: 2,
          fontWeight: 600,
          color: '#1e3a8a',
          letterSpacing: '0.5px',
        }}
      >
        Reset Password
      </Typography>
      <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField
          label="Enter Your Email Address or UserName"
          variant="outlined"
          required
          fullWidth
          sx={{
            '& .MuiOutlinedInput-root': {
              borderRadius: 1,
              transition: 'all 0.3s ease',
              '&:hover': {
                boxShadow: '0 0 8px rgba(0, 0, 0, 0.1)',
              },
              '&.Mui-focused': {
                boxShadow: '0 0 8px rgba(25, 118, 210, 0.3)',
              },
            },
            '& .MuiInputLabel-root': {
              color: 'text.secondary',
              fontWeight: 500,
            },
          }}
        />
        <TextField
          label="Enter new  Password"
          variant="outlined"
          required
          fullWidth
          type="password"
          sx={{
            '& .MuiOutlinedInput-root': {
              borderRadius: 1,
              transition: 'all 0.3s ease',
              '&:hover': {
                boxShadow: '0 0 8px rgba(0, 0, 0, 0.1)',
              },
              '&.Mui-focused': {
                boxShadow: '0 0 8px rgba(25, 118, 210, 0.3)',
              },
            },
            '& .MuiInputLabel-root': {
              color: 'text.secondary',
              fontWeight: 500,
            },
          }}
        />
         <TextField
          label="Confirm Password"
          variant="outlined"
          required
          fullWidth
          type="password"
          sx={{
            '& .MuiOutlinedInput-root': {
              borderRadius: 1,
              transition: 'all 0.3s ease',
              '&:hover': {
                boxShadow: '0 0 8px rgba(0, 0, 0, 0.1)',
              },
              '&.Mui-focused': {
                boxShadow: '0 0 8px rgba(25, 118, 210, 0.3)',
              },
            },
            '& .MuiInputLabel-root': {
              color: 'text.secondary',
              fontWeight: 500,
            },
          }}
        />
       
        <Button type="submit" fullWidth variant="contained" sx={{ py: 1.5, fontSize: '1rem' }}>
          Login
        </Button>
      </Box>     
          
    </Paper>
  </Box>
  )
}

export default ResetPassword
