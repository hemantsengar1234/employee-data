
import {BrowserRouter, Routes,Route } from 'react-router-dom';
import Employees from './components/Employees';

import Navbar from "./components/Navbar";
import Update from './components/Update';



function App() {
  return (
    <BrowserRouter>
       <Navbar/>
      <Routes>
      <Route path="/" element={<Employees/>}/>
      <Route path="/update" element={<Update/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
