import React, { useState } from 'react';
import { Box, Paper, Avatar, Typography, TextField, FormControlLabel, Checkbox, Button, Grid } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import axios from 'axios';

const SignUp = () => {
  const navigate = useNavigate(); // For redirecting
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  // ✨ New: Normal signup with Email/Password
  const handleNormalSignup = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/users/register', {
        firstName,
        lastName,
        email,
        password,
      });
      console.log('User registered successfully:', response.data);
      navigate('/login'); // Redirect to login page
    } catch (error) {
      console.error('Registration error:', error);
      setError(error.response?.data?.error || 'Something went wrong');
    }
  };

  // ✨ Already existing: Google signup
  const handleGoogleSuccess = async (credentialResponse) => {
    const idToken = credentialResponse.credential;
    console.log('Google ID Token:', idToken);

    try {
      const res = await fetch('http://localhost:3000/api/users/register/google', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ idToken }),
      });

      const data = await res.json();
      if (res.ok) {
        console.log('User registered successfully with Google:', data.user);
        alert('User registered successfully with Google!');
        navigate('/login'); // Redirect after Google signup
      } else {
        console.error('Google registration failed:', data.error);
        alert('Registration failed: ' + data.error);
      }
    } catch (error) {
      console.error('Google registration error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  const handleGoogleFailure = () => {
    console.error('Google Sign-In failed');
    alert('Google Sign-In failed. Please try again.');
  };

  return (
    <GoogleOAuthProvider clientId="471576702577-pmub1rsqk18m7vihuqm9kjks6nve5lq8.apps.googleusercontent.com"> {/* Google Client ID */}
      <Box
        sx={{
          mt: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          background: 'linear-gradient(to bottom, #e3f2fd, #bbdefb)',
          padding: { xs: 2, sm: 2 },
          width: '100vw',
        }}
      >
        <Paper
          elevation={10}
          sx={{
            padding: 2,
            borderRadius: 2,
            background: 'linear-gradient(135deg, #ffffff 30%, #f5f7fa 90%)',
            width: '100%',
            maxWidth: 600,
            textAlign: 'center',
          }}
        >
          <Avatar
            sx={{
              width: 64,
              height: 64,
              margin: '0 auto',
              backgroundColor: 'primary.main',
              color: 'common.white',
              fontSize: '2rem',
            }}
          >
            S
          </Avatar>
          <Typography
            variant="h5"
            sx={{
              my: 2,
              fontWeight: 600,
              color: '#1e3a8a',
              letterSpacing: '0.5px',
            }}
          >
            Sign Up
          </Typography>

          {/* Form for Normal SignUp */}
          <Box component="form" onSubmit={handleNormalSignup} sx={{ display: 'flex', flexDirection: 'column' }}>
            <TextField
              label="Enter Your First Name"
              variant="outlined"
              required
              fullWidth
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              sx={{ mt: 2 }}
            />
            <TextField
              label="Enter Your Last Name"
              variant="outlined"
              required
              fullWidth
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              sx={{ mt: 2 }}
            />
            <TextField
              label="Enter Your Email Address"
              variant="outlined"
              required
              fullWidth
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{ mt: 2 }}
            />
            <TextField
              label="Enter Your Password"
              variant="outlined"
              required
              fullWidth
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              sx={{ mt: 2 }}
            />
            <FormControlLabel
              control={<Checkbox required />}
              label="I confirm I am 18 years old and above and agree to Verydorm's terms and conditions."
              sx={{ mt: 2 }}
            />
            <Button type="submit" fullWidth variant="contained" color="primary" sx={{ mt: 2 }}>
              Register
            </Button>
          </Box>

          {/* Error Display */}
          {error && (
            <Typography color="error" sx={{ mt: 2 }}>
              {error}
            </Typography>
          )}

          <Typography sx={{ mt: 2 }}>Or</Typography>

          {/* ✨ Google SignUp */}
          <GoogleLogin
            onSuccess={handleGoogleSuccess}
            onError={handleGoogleFailure}
          />

          <Grid container justifyContent="center" sx={{ mt: 2 }}>
            <Grid item>
              <Typography>
                Already have an account?{' '}
                <Typography component={Link} to="/login" sx={{ color: 'primary.main', display: 'inline' }}>
                  Sign In
                </Typography>
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </GoogleOAuthProvider>
  );
};

export default SignUp;
