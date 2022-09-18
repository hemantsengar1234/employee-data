
import {BrowserRouter, Routes,Route } from 'react-router-dom';
import Employees from './components/Employees';

import Navbar from "./components/Navbar";
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import Home from './components/Home';



function App() {
  return (
    <BrowserRouter>
       <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/employee" element={<Employees/>}/>
      <Route path="/login" element={<LogIn/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
