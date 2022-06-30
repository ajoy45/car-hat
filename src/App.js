
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pagess/About/About';
import Home from './pagess/Home/Home';
import Login from './pagess/Login/Login';
import ServiceDetail from './pagess/ServiceDetail/ServiceDetail';
import Resister from './Resister/Resister';
import Header from './Shared/Header/Header';
import Checkout from './pagess/Checkout/Ckeckout';
import ReqiredAuth from './pagess/Login/RequiredAuth/ReqiredAuth';
import Addservice from './pagess/AddService/Addservice';
import Manaseruser from './pagess/Manageuser/Manaseruser';
import { ToastContainer } from 'react-toastify';
import Order from './pagess/order';
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
         <Route path="/checkout/:serviceId" element={
           <ReqiredAuth>
             <Checkout></Checkout>
           </ReqiredAuth>
         }></Route>
         <Route path="/adduser" element={
           <ReqiredAuth>
            <Addservice></Addservice>
           </ReqiredAuth>
         }></Route>
         <Route path="/manage" element={
           <ReqiredAuth>
            <Manaseruser></Manaseruser>
           </ReqiredAuth>
         }></Route>
         <Route path="/order" element={
           <ReqiredAuth>
            <Order></Order>
           </ReqiredAuth>
         }></Route>
         <Route path="/resister"element={<Resister></Resister>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
      
    </div>
  );
}

export default App;
