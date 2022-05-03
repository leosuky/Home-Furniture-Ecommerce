import { ThemeProvider } from '@mui/material/styles';
import GlobalTheme from './ui/Theme';

import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={GlobalTheme}>
        <Navbar/>
        <h3>I Love Carrots</h3>
      </ThemeProvider>
    </div>
  );
}

export default App;
