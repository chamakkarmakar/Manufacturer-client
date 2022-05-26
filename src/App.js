import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './Pages/Blog/Blog';
import AddProduct from './Pages/Dashboard/AddProduct';
import AddReview from './Pages/Dashboard/AddReview';
import AllUsers from './Pages/Dashboard/AllUsers';
import Dashboard from './Pages/Dashboard/Dashboard';
import ManageOrders from './Pages/Dashboard/ManageOrders';
import ManageProduct from './Pages/Dashboard/ManageProduct';
import MyOrder from './Pages/Dashboard/MyOrder';
import MyProfile from './Pages/Dashboard/MyProfile';
import Payment from './Pages/Dashboard/Payment';
import Home from './Pages/HomePage/Home';
import Products from './Pages/HomePage/Products';
import Reviews from './Pages/HomePage/Reviews';
import Login from './Pages/Login_Register/Login';
import Register from './Pages/Login_Register/Register';
import RequireAdmin from './Pages/Login_Register/RequireAdmin';
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
        <Route path="/dashboard" element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        }>
          <Route index element={<MyProfile />}></Route>
          <Route path="addreview" element={<AddReview />}></Route>
          <Route path="myorder" element={<MyOrder />}></Route>
          <Route path="payment/:id" element={<Payment />}></Route>
          <Route path="users" element={<RequireAdmin><AllUsers /></RequireAdmin>}></Route>
          <Route path="addProduct" element={<RequireAdmin><AddProduct /></RequireAdmin>}></Route>
          <Route path="manageProduct" element={<RequireAdmin><ManageProduct /></RequireAdmin>}></Route>
          <Route path="manageOrders" element={<RequireAdmin><ManageOrders /></RequireAdmin>}></Route>
        </Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      <Footer></Footer>
      
    </div>
  );
}

export default App;
