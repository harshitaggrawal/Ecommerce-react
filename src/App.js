
import './App.css';
import Navbar from './Components/Navbar/Navbar.jsx'
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Shop from './Pages/Shop.jsx';
import ShopCategories from './Pages/ShopCategories.jsx';
import Product from './Pages/Product.jsx';
import Cart from './Pages/Cart.jsx';
import LoginSignup from './Pages/LoginSignup.jsx';

function App() {
  return (
    <div>
     
     <BrowserRouter>
     <Navbar/>

     <Routes>
      <Route path='/' element={<Shop/>} />
      <Route path='/mens' element={<ShopCategories category="men"/>} />
      <Route path='/womens' element={<ShopCategories  category="women"/>} />
      <Route path='/kids' element={<ShopCategories  category="kid"/>} />
      <Route path='/product' element={<Product/>}>
        <Route path=':productId' element={<Product/>} />
      </Route>

      <Route path='/cart' element={<Cart/>} />
      <Route path='/login' element={<LoginSignup/>} />



     </Routes>
     </BrowserRouter>

     36.28
    </div>
  );
}

export default App;
