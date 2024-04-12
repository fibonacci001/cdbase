import React from 'react';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/system';
import { Typography, Stack } from '@mui/material';
const ProductCard = ({ product }) => {
  const { name, logo } = product;

  return (
    <>
    <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    }}>
      <Box
        component={Paper}
        elevation={3}
        sx={{
          width: (theme) => theme.spacing(8), // Adjust the size as needed
          height: (theme) => theme.spacing(8),
          borderRadius: '50%',
           
          overflow: 'hidden', 
          '& img': {
            width: '100%', // Ensures the image scales with the container
            height: '100%',
            objectFit: 'contain', 
          },
        }}
      >
        <img src={logo} alt={name} />
      </Box>
      <Typography color='white' sx={{
        textDecoration: 'none'
      }}variant='subtitle1'>{name}</Typography>

      </Box>
    </>
  );
};

export default ProductCard;
