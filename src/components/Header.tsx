import React, { useState } from 'react';
import { Box, Button, Typography, Avatar } from '@mui/material';
import logo from '../images/logo.png';
import SignInModal from './SignModal';
import '../index.css';

const Header: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [userEmail, setUserEmail] = useState<string | null>(() =>
    localStorage.getItem('userEmail')
  );

  const handleClickOpen = (): void => {
    setOpen(true);
  };

  const handleClose = (): void => {
    setOpen(false);
  };

  const handleSignIn = (email: string): void => {
    localStorage.setItem('userEmail', email);
    setUserEmail(email);
    handleClose();
  };

  const handleSignOut = (): void => {
    localStorage.removeItem('userEmail');
    setUserEmail(null);
  };

  const firstLetter = userEmail ? userEmail.charAt(0).toUpperCase() : '';

  return (
    <React.Fragment>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        padding="10px 20px"
        bgcolor="#fff"
      >
        <Box display="flex" alignItems="center">
          <img
            src={logo}
            alt="Coca Logo"
            style={{ width: 40, height: 40, marginRight: 10 }}
          />
          <Typography variant="h5" fontWeight="bold" color="#333">
            coca
          </Typography>
        </Box>
        <Avatar sx={{ bgcolor: '#007bff', marginRight: 2 }}>
          {firstLetter}
        </Avatar>
        <Box display="flex" alignItems="center">
          {!userEmail ? (
            <Button
              variant="contained"
              sx={{
                width: 120,
                height: 46,
                fontSize: '1rem',
                padding: '5px 15px',
                marginRight: 2,
                backgroundColor: '#f2f4fc',
                textTransform: 'none',
                color: '#333',
                borderRadius: '30px',
                '&:hover': {
                  backgroundColor: '#ccc',
                },
              }}
              onClick={handleClickOpen}
            >
              Sign In
            </Button>
          ) : (
            <Button
              variant="contained"
              sx={{
                width: 120,
                height: 46,
                fontSize: '1rem',
                padding: '5px 15px',
                marginRight: 2,
                backgroundColor: '#f2f4fc',
                textTransform: 'none',
                color: '#333',
                borderRadius: '30px',
                '&:hover': {
                  backgroundColor: '#ccc',
                },
              }}
              onClick={handleSignOut}
            >
              Sign Out
            </Button>
          )}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '6px',
              cursor: 'pointer',
            }}
          >
            <Box
              sx={{
                width: '30px',
                height: '3px',
                backgroundColor: '#333',
                borderRadius: '10px',
              }}
            />
            <Box
              sx={{
                width: '20px',
                alignSelf: 'end',
                height: '3px',
                backgroundColor: '#333',
                borderRadius: '10px',
              }}
            />
            <Box
              sx={{
                width: '30px',
                height: '3px',
                backgroundColor: '#333',
                borderRadius: '10px',
              }}
            />
          </Box>
        </Box>
      </Box>

      {open && (
        <SignInModal
          handleClose={handleClose}
          open={open}
          onSignIn={handleSignIn}
        />
      )}
    </React.Fragment>
  );
};

export default Header;
