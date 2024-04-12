import logo from './logo.svg';
import './App.css';
import {QueryClientProvider, QueryClient} from 'react-query';
import {Route, Routes} from 'react-router-dom'
import Coinlist from './component/Coinlist';
import Moreinfo from './component/Moreinfo';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import My404 from './component/My404';

const theme = createTheme({
  spacing: 8, // You can define your own spacing scale here
});

function App() {
  
  const queryclient = new QueryClient()
  return (
<QueryClientProvider client={queryclient}>
<ThemeProvider theme={theme}>
<Coinlist />
  <Routes>
{/* <Route path='/' element={<Coinlist />} /> */}
<Route path='/addyourkey/:id' element={<Moreinfo />} />
<Route path='/404_notfound' element={<My404 />} />
  </Routes >
    {/* <div className="App">
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div> */}
</ThemeProvider>
</QueryClientProvider>
  );
}

export default App;
