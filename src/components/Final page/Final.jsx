import React from 'react';
// import { useLocation } from 'react-router-dom';
import { useNavigate} from 'react-router-dom';

const Final = () => {
    const navigate = useNavigate();

//   const location = useLocation();

//   const obj = location.state
const handleStartover = (e) => {
    e.preventDefault();
        navigate("/CarList")
  
    };
   

  return (
    <div className="book">
        <br /><br /><br /><br />
            <h2> BOOKED SUCCESSFULLY </h2><br /><br /><br />
            <h2>Thanks and Enjoy your booking</h2><br /><br /><br />
            {/* <p>Total Nights:{obj.totalNights}</p>
            <p>Total Price:${obj.totalPrice}</p> */}
            <button  type='submit' onClick={handleStartover}> Start Over</button><br /><br />

    </div>
  );
};

export default Final;
