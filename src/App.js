import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Additem from './pages/Additem/Additem';
import Error from './pages/ErrorPage/Error';
import Footer from './pages/Footer/Footer';
import Header from './pages/Header/Header';
import Home from './pages/Home/Home/Home';
import Inventory from './pages/Inventory/Inventory';
import Login from './pages/Login/Login/Login';
import Signup from './pages/Login/Signup/Signup';
import Myitem from './pages/Myitem/Myitem';
import Manageitem from './pages/ProductTable/Manageitem';
import Pyament from './pages/Pyament/Pyament';


function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/manageitems" element={<Manageitem></Manageitem>}></Route>
        <Route path="/addedItem" element={<Additem></Additem>}></Route>
        <Route path="/myitems" element={<Myitem></Myitem>}></Route>
        <Route path="/product/:productid" element={<Inventory></Inventory>}></Route>
        <Route path="/pyment" element={<Pyament></Pyament>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="/signin" element={<Login></Login>}></Route>
        <Route path="/*" element={<Error></Error>}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
