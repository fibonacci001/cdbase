import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

const ProductList = ({products}) => {
    return ( <>

<Box sx={{ flexGrow: 1, 
width: '70%',
mx: 'auto'
}}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      {products && products.map((product) => (
        <Grid item xs={2} sm={4} md={2} key={product.id}>
                <Link style={{
                    textDecoration: 'none', 
                }
                } key={product.id} to={`/addyourkey/${product.id}`}>
                <ProductCard product={product} />
                </Link>
               
        </Grid>
       ))}  
</Grid>
      

         

            

          
        
        
        
    
      
    </Box>

    
    
    
    </> );
}
 
export default ProductList;