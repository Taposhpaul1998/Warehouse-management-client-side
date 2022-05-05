import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './pages/Header/Header';
import Login from './pages/Login/Login/Login';

function App() {
  return (
 <>
 <Header></Header>
 <Routes>
   <Route path="/signin" element={<Login></Login>}></Route>
 </Routes>
 </>
  );
}

export default App;
