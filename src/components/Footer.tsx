import React from 'react';
import { Box, Button, Typography, TextField, Divider } from '@mui/material';
import { Facebook, Twitter, Instagram } from '@mui/icons-material';
import logo from '../images/logo.png';

const Footer: React.FC = () => {
  return (
    <Box
      sx={{
        padding: { xs: '20px', sm: '40px 100px' },
        backgroundColor: '#fff',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <Box sx={{ marginBottom: { xs: '20px', sm: '0' } }}>
          <img src={logo} alt="Logo" />
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography
            sx={{
              color: '#888',
              fontSize: '1rem',
              marginBottom: { xs: '10px', sm: '0' },
            }}
          >
            Ready to get started?
          </Typography>
          <Button
            sx={{
              width: '145px',
              height: '48px',
              backgroundColor: '#007bff',
              borderRadius: '8px',
              color: 'white',
              fontWeight: 'bold',
              textTransform: 'none',
              '&:hover': { backgroundColor: '#0056b3' },
              marginLeft: { sm: '20px' },
            }}
          >
            Get started
          </Button>
        </Box>
      </Box>
      <Divider sx={{ marginTop: '40px', borderTop: '1px solid #ddd' }} />
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          justifyContent: 'space-between',
          marginTop: '40px',
          width: '100%',
        }}
      >
        <Box
          sx={{
            width: { xs: '100%', sm: '48%' },
            marginBottom: { xs: '20px', sm: '0' },
          }}
        >
          <Typography sx={{ fontSize: '1.2rem', marginBottom: '10px' }}>
            Subscribe to our newsletter
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <TextField
              fullWidth
              variant="standard"
              placeholder="Enter adress"
              sx={{
                '& .MuiInputBase-root': {
                  paddingLeft: '10px',
                  fontSize: '1rem',
                  height: '50px',
                },
                marginBottom: { xs: '10px', sm: '0' },
              }}
            />
            <Button
              sx={{
                width: '36px',
                height: '50px',
                backgroundColor: '#007bff',
                color: 'white',
                fontSize: '1.5rem',
                borderTopLeftRadius: '6px',
                borderTopRightRadius: '6px',
                borderBottomLeftRadius: '0px',
                borderBottomRightRadius: '0px',
              }}
            >
              {'>'}
            </Button>
          </Box>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'flex-end', width: '40%' }}>
          <Box sx={{ width: { xs: '100%', sm: '48%' } }}>
            {[
              'Services',
              'Email Marketing',
              'Campaigns',
              'Branding',
              'Offline',
            ].map((word, index) => (
              <Typography
                key={index}
                sx={{
                  color: index === 0 ? '#007bff' : '#333',
                  fontSize: index === 0 ? '1.1rem' : '1rem',
                  fontWeight: index === 0 ? 'bold' : 'normal',
                  marginBottom: '5px',
                }}
              >
                {word}
              </Typography>
            ))}
          </Box>

          <Box sx={{ width: { xs: '100%', sm: '48%' } }}>
            {['About', 'Our Story', 'Benefits', 'Team', 'Careers'].map(
              (word, index) => (
                <Typography
                  key={index}
                  sx={{
                    color: index === 0 ? '#007bff' : '#333',
                    fontSize: index === 0 ? '1.1rem' : '1rem',
                    fontWeight: index === 0 ? 'bold' : 'normal',
                    marginBottom: '5px',
                  }}
                >
                  {word}
                </Typography>
              )
            )}
          </Box>
          <Box sx={{ width: { xs: '100%', sm: '48%' } }}>
            {['Help', 'FAQs', 'Contact Us'].map((word, index) => (
              <Typography
                key={index}
                sx={{
                  color: index === 0 ? '#007bff' : '#333',
                  fontSize: index === 0 ? '1.1rem' : '1rem',
                  fontWeight: index === 0 ? 'bold' : 'normal',
                  marginBottom: '5px',
                }}
              >
                {word}
              </Typography>
            ))}
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: { xs: 'column', sm: 'row' },
          marginTop: '40px',
        }}
      >
        <Typography
          sx={{
            color: '#808D9E',
            fontSize: '1rem',
            marginBottom: { xs: '10px', sm: '0' },
          }}
        >
          2022 - Coca by Sans Design
        </Typography>
        <Box
          sx={{
            fontSize: '1.5rem',
            display: 'flex',
            justifyContent: 'space-between',
            width: { xs: '100%', sm: 'auto' },
          }}
        >
          <Facebook
            sx={{
              marginLeft: '15px',
              cursor: 'pointer',
              color: '#808D9E',
              '&:hover': { color: '#007bff' },
            }}
          />
          <Twitter
            sx={{
              marginLeft: '15px',
              cursor: 'pointer',
              color: '#808D9E',
              '&:hover': { color: '#007bff' },
            }}
          />
          <Instagram
            sx={{
              marginLeft: '15px',
              cursor: 'pointer',
              color: '#808D9E',
              '&:hover': { color: '#007bff' },
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
