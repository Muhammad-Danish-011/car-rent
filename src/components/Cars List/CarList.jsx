import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CarList = () => {
  const [cars, setCars] = useState([]);
  const navigate = useNavigate();

  const handleRentMeNow = () => {
  
    navigate ("/RentalForm");
  
  };
  useEffect(() => {
   
    fetch('http://localhost:8080/cars/all')
      .then((response) => response.json())
      .then((data) => setCars(data));
  }, []);

  return (
    <div >
      <h1>LIST OF AVAILABLE CARS </h1>
      {cars.map((car) => (
        <div key={car.id}>
          <img src={car.thumbnail} alt={car.name} />
          <h2>
            <a href={`/product/${car.id}`}>{car.name}</a>
          </h2>
          <p><h5>Short Description:</h5> {car.shortDescription}</p>
          <p><h5>Daily Rental Price : </h5>Rs {car.rentalPrice}/-</p>
          <button onClick={handleRentMeNow}>Rent Me Now</button>
        </div>
      ))}
    </div>
  );
};

export default CarList;
