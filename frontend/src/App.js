import { ThemeProvider } from '@mui/material/styles';
import GlobalTheme from './ui/Theme';
import { Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';

// Pages
import {
  HomePage, AboutUsPage, BlogPage, 
  ContactUsPage, ShopPage, ProductPage,
  CartPage,
} from './pages'

// for testing shit.... ||||||||||||||||||||||||||||||||
// import Testing from './Testing';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={GlobalTheme}>
        <Navbar/>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/shop' element={<ShopPage/>} />
          <Route path='/shop/product/:productId' element={<ProductPage/>}/>
          <Route path='/blog' element={<BlogPage/>} />
          <Route path='/contactus' element={<ContactUsPage/>} />
          <Route path='/aboutus' element={<AboutUsPage/>} />
          <Route path='/cart' element={<CartPage/>} />
        </Routes>
        <Footer/>
      </ThemeProvider>
      {/* <Testing/> */}
    </div>
  );
}

export default App;
