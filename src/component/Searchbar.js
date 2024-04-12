import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

const Searchbar = ({ searchTerm, setSearchTerm }) => {
    return ( <>
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width:{
        xs: '240px',
        sm: '250px',
        md: '400px'
      } }}
    >
      
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search coin here"
        inputProps={{ 'aria-label': 'search coin here' }}
        value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
      
    </Paper>
    
    </> );
}
 
export default Searchbar;