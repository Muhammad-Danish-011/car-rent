import './App.css';
import React from 'react';
import { BrowserRouter,  Route, Routes } from 'react-router-dom';
import CarList from './components/Cars List/CarList';
import CarsDetail from './components/Cars Detail/CarsDetail';
import RentalForm from './components/Rental form/RentalForm';
import CarsHome from './components/Cars Home Page/CarsHome';
import Final from './components/Final page/Final';
function App() {
  return (
    <div className="App">

  <BrowserRouter>
      <Routes>
      <Route exact path="/" element ={<CarsHome/>}/>
          <Route exact path="/CarList" element ={<CarList/>}/>
          <Route exact path="/Product/:id" element ={<CarsDetail/>} />
          <Route exact path="/RentalForm/:id" element ={<RentalForm/>} />
          <Route exact path="/Final" element ={<Final/>} />

       </Routes>
  </BrowserRouter>

    </div>
  );
}

export default App;
