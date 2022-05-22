import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/HomePage/Home';
import Products from './Pages/HomePage/Products';
import Reviews from './Pages/HomePage/Reviews';
import Login from './Pages/Login_Register/Login';
import Register from './Pages/Login_Register/Register';
import Footer from './Pages/SharedItem/Footer';
import Header from './Pages/SharedItem/Header';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/reviews' element={<Reviews />}></Route>
        <Route path='/products' element={<Products />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
      </Routes>
      <Footer></Footer>
      
    </div>
  );
}

export default App;
