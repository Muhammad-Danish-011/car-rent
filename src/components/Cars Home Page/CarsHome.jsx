import React from 'react';
import { useNavigate } from 'react-router-dom';

const CarsHome = () => {
    const navigate = useNavigate();

   
   
    const handleCars = () => {
        navigate ("/CarList");
       
      };
  return (
    
    <div className="Home">
            <h2>Cars For Rent</h2><br />
            <img src="https://mba-esg.in/wp-content/uploads/2023/01/article-m-1.jpg"   /><br /><br />

            <button onClick={handleCars}>Go For Cars </button>
      <p></p>
      

    </div>
  );
};

export default CarsHome;
