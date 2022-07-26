import { ThemeProvider } from '@mui/material/styles';
import GlobalTheme from './ui/Theme';
import { Route, Routes, Navigate } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';

// Pages
import {
  HomePage, AboutUsPage, BlogPage, 
  ContactUsPage, ShopPage, ProductPage,
  CartPage, LoginPage, ProfilePage,
  FAQPage, ShippingPage, PaymentPage,
  OrderSummary, OrderDetailPage
} from './pages'
import { useSelector } from 'react-redux';

// for testing shit.... ||||||||||||||||||||||||||||||||
// import Testing from './Testing';

function App() {
  const {userInfo} = useSelector(state => state.user)
  return (
    <div className="App">
      <ThemeProvider theme={GlobalTheme}>
        <Navbar/>
        <LoginPage/>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/shop' element={<ShopPage/>} />
          <Route path='/shop/product/:productId' element={<ProductPage/>}/>
          <Route path='/blog' element={<BlogPage/>} />
          <Route path='/contactus' element={<ContactUsPage/>} />
          <Route path='/aboutus' element={<AboutUsPage/>} />
          <Route path='/cart' element={<CartPage/>} />
          <Route path='/faq' element={<FAQPage/>} />
          <Route path='/profile' element={userInfo ? <ProfilePage/> : <Navigate to='/'/>} />
          <Route path='/shipping' element={<ShippingPage/>} />
          <Route path='/payment' element={<PaymentPage/>} />
          <Route path='/order_summary' element={<OrderSummary/>} />
          <Route path='/order-detail/:orderId' element={<OrderDetailPage/>} />
        </Routes>
        <Footer/>
      </ThemeProvider>
      {/* <Testing/> */}
    </div>
  );
}

export default App;
