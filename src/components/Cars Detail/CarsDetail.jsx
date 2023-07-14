import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const CarsDetail = ({ productId }) => {
    const [cars, setCars] = useState({});
    const {id} = useParams();
  const navigate = useNavigate();

  const handleRentMeNow = () => {
  
    navigate ("/RentalForm");
  
  };
  useEffect(() => {
   
    fetch(`http://localhost:8080/cars/${id}`)
      .then((response) => response.json())
      .then((data) => setCars(data));
  }, []);
  return (
    
    <div className='Detail'>
      <h1> AVAILABLE CARS </h1>
       

        <div key={cars.id}>
          <img src={cars.thumbnail} alt={cars.name} />
          
          <p><h2>Name:</h2> {cars.name}</p>

          <p><h5>Long Description:</h5> {cars.longdescription}</p>
          <p><h5>Daily Rental Price : </h5>Rs {cars.rentalprice}/-</p>
          <Link to={`/RentalForm/${cars.id}`}>
          <button onClick={handleRentMeNow}>Rent Me Now</button>
          </Link>
        </div>
      
    </div>
  );
};

export default CarsDetail;
