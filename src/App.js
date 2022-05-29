
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pagess/About/About';
import Home from './pagess/Home/Home';
import Login from './pagess/Login/Login';
import ServiceDetail from './pagess/ServiceDetail/ServiceDetail';
import Resister from './Resister/Resister';
import Footer from './Shared/Footer/Footer';
import Header from './Shared/Header/Header';
import Checkout from './pagess/Checkout/Ckeckout';
import ReqiredAuth from './pagess/Login/RequiredAuth/ReqiredAuth';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
         <Route path="/"element={<Home></Home>}></Route>
         <Route path="/home"element={<Home></Home>}></Route>
         <Route path="/service/:serviceId"element={<ServiceDetail></ServiceDetail>}></Route>
         <Route path="/about"element={<About></About>}></Route>
         <Route path="/login"element={<Login></Login>}></Route>
         <Route path="/checkout" element={
           <ReqiredAuth>
             <Checkout></Checkout>
           </ReqiredAuth>
         }></Route>
         <Route path="/resister"element={<Resister></Resister>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
