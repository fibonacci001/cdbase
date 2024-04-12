import React from 'react';
import { useProductService } from './Fetchcoin';
import { Typography, Stack, Box } from '@mui/material';
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';
import ProductList from './ProductList';
import Searchbar from './Searchbar';
import { WidthFull } from '@mui/icons-material';

const Coinlist = () => {
    const [searchTerm, setSearchTerm] = useState('');
  


const {products, isLoading, error} = useProductService();
const filteredProducts = products?.filter((product) =>
product.name.toLowerCase().includes(searchTerm.toLowerCase())
);



if (isLoading) {
    return <Stack>Loading...</Stack>;
  }

  if (error) {
    return <Stack>Error: {error.message}</Stack>;
  }
  const handleRefresh = () => {
    // Refresh the page or reset the search term
    setSearchTerm('');
  };

    return ( <>
    <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    }}>
    <Typography sx={{
      color: 'white',
      textAlign: 'center',
      fontWeight: 'bolder',

    }} variant='h2'>Connect Wallet</Typography>
    <Typography sx={{
      color: 'white',
      

    }} variant='body1'>Please connect your wallet to continue</Typography>

    </Box>
    <Box sx={{
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
        justifyContent: 'center',
        marginBottom: '1rem',
        marginTop: '1rem'

    }}>
    <Searchbar  searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
</Box>
    {filteredProducts.length === 0 && searchTerm !== '' ? (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4 }}>
          <Typography sx={{
      color: 'white',
      textAlign: 'center'
      

    }} variant='body1'>We're sorry, but we don't have this coin listed here at the moment.</Typography>
          <Button variant="contained" onClick={handleRefresh}  sx={{ mt: 2 }}>
            Refresh List
          </Button>
        </Box>
      ) : (
        <ProductList products={filteredProducts} />
      )}
    
    </> );
}
 
export default Coinlist;