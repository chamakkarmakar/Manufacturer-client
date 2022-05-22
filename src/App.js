import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './Pages/Blog/Blog';
import Home from './Pages/HomePage/Home';
import Products from './Pages/HomePage/Products';
import Reviews from './Pages/HomePage/Reviews';
import Login from './Pages/Login_Register/Login';
import Register from './Pages/Login_Register/Register';
import RequireAuth from './Pages/Login_Register/RequireAuth';
import ProductDetail from './Pages/ManageProduct/ProductDetail';
import MyPortfolio from './Pages/MyPortfolio/MyPortfolio';
import Footer from './Pages/SharedItem/Footer';
import Header from './Pages/SharedItem/Header';
import NotFound from './Pages/SharedItem/NotFound';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/reviews' element={<Reviews />}></Route>
        <Route path='/products' element={<Products />}></Route>
        <Route path='/product/:productId' element={
          <RequireAuth>
            <ProductDetail />
          </RequireAuth>
        }></Route>
        <Route path='/portfolio' element={<MyPortfolio />}></Route>
        <Route path='/blog' element={<Blog />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      <Footer></Footer>
      
    </div>
  );
}

export default App;
