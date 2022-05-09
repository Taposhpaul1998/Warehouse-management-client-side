import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Additem from './pages/Additem/Additem';
import Blog from './pages/Blog/Blog';
import Error from './pages/ErrorPage/Error';
import Footer from './pages/Footer/Footer';
import Header from './pages/Header/Header';
import Home from './pages/Home/Home/Home';
import Inventory from './pages/Inventory/Inventory';
import Login from './pages/Login/Login/Login';
import RequireAuth from './pages/Login/RequriAuth/RequriAuth';
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
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="/manageitems" element={
          <RequireAuth><Manageitem></Manageitem></RequireAuth>
        }></Route>
        <Route path="/addedItem" element={
          <RequireAuth><Additem></Additem></RequireAuth>
        }></Route>
        <Route path="/myitems" element={
          <RequireAuth><Myitem></Myitem></RequireAuth>
        }></Route>
        <Route path="/product/:productid" element={
          <RequireAuth><Inventory></Inventory></RequireAuth>
        }></Route>
        <Route path="/pyment" element={
          <RequireAuth><Pyament></Pyament></RequireAuth>
        }></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="/singin" element={<Login></Login>}></Route>
        <Route path="/*" element={<Error></Error>}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
