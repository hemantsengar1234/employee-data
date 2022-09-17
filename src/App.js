
import {BrowserRouter, Routes,Route } from 'react-router-dom';
import Employees from './components/Employees';

import Navbar from "./components/Navbar";
import AddEmployee from './components/AddEmployee';



function App() {
  return (
    <BrowserRouter>
       <Navbar/>
      <Routes>
      <Route path="/" element={<Employees/>}/>
      <Route path="/addemployees" element={<AddEmployee/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
