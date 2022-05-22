import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/HomePage/Home';
import Footer from './Pages/SharedItem/Footer';
import Header from './Pages/SharedItem/Header';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
      </Routes>
      <Footer></Footer>
      
    </div>
  );
}

export default App;
