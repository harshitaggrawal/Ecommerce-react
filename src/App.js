import './App.css';
import Navbar from './Components/Navbar/Navbar.jsx'
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Shop from './Pages/Shop.jsx';
import ShopCategories from './Pages/ShopCategories.jsx';
import Product from './Pages/Product.jsx';
import Cart from './Pages/Cart.jsx';
import LoginSignup from './Pages/LoginSignup.jsx';
import Footer from './Components/Footer/Footer.jsx';
import men_bannner from './Components/Assets/banner_mens.png';
import women_banner from './Components/Assets/banner_women.png';
import kids_banner from './Components/Assets/banner_kids.png';

function App() {
  return (
    <div>
     
     <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path='/' element={<Shop/>} />

      <Route path='/mens' element={<ShopCategories category="men" banner={men_bannner}/>} />
      <Route path='/womens' element={<ShopCategories  category="women" banner={women_banner}/>} />
      <Route path='/kids' element={<ShopCategories  category="kid" banner={kids_banner}/>} />
   
      <Route path='/product' element={<Product/>}>
        <Route path=':productId' element={<Product/>} />
      </Route>
      <Route path='/cart' element={<Cart/>} />
      <Route path='/login' element={<LoginSignup/>} />

     </Routes>

     <Footer />
     </BrowserRouter>
2.12
    </div>
  );
}

export default App;
