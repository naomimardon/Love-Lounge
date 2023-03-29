import React from "react";
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const Copyright = () => {
  return (
    <Typography variant="body2" color="text.secondary" textAlign="center">
      {'Copyright © Love Lounge '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const Footer = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '20vh',
      }}
    >
      <CssBaseline />

      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          backgroundColor: '#FD297B',
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="body1" textAlign="center">
            Made with ❤️
          </Typography>
          <Copyright />
        </Container>
      </Box>
    </Box>
  );
}

export default Footer;