import React from 'react';
import { useLinkClickHandler, useNavigate} from 'react-router-dom';
import { useEffect, useState } from 'react';

const Final = () => {
    const navigate = useNavigate();
    const [form,setForm]=useState('');

const handleStartover = (e) => {
    e.preventDefault();
        navigate("/CarList")
  
    };
    const handleSubmit = (e) => {
        e.preventDefault();
    
        fetch('http://localhost:8081/RentalForm/delete')
          .then((response) => response.json())
          .then((data) => {
            setForm(data);
            
          })
          .catch((error) => {
            console.error('Error:', error);
          });
      navigate("/RentalForm/id");
        };
    
      useEffect(() => {
        fetch('http://localhost:8081/RentalForm')
          .then((response) => response.json())
          .then((data) => setForm(data))
          .catch((error) => {
            console.error('Error:', error);
          });
      }, []);

  return (
    <div className="book">
        <br /><br /><br /><br />
            <h2>SUCCESSFULLY RENTED</h2><br /><br /><br />
            <h2>THANKS FOR YOUR ORDER</h2><br /><br /><br />
    
            <button  type='submit' onClick={handleStartover}> Start Over</button><br /><br /><br /><br />
            <button  type='submit' onClick={handleSubmit}> Clear form </button><br /><br />
    </div>
  );
};

export default Final;
