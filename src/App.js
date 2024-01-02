import './App.css';
import Nav from './Components/Nav';
import CURDOperation from './Components/CURDOperation';
import AddUser from './Components/AddUser';
import AllUser from './Components/AllUser';
import EditUser from './Components/EditUser';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
    <BrowserRouter>
      <Nav></Nav>
      <Routes>
      < Route path="/" element={<CURDOperation/>}/>
      <Route path="/add"element={<AddUser/>}/>
      <Route path="/all"element={<AllUser/>}/>
      <Route path="/edit/:id"element={<EditUser/>}/>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
