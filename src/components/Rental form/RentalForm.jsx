import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';



const RentalForm = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [takedate, setTakedate] = useState('');
  const [backdate, setBackdate] = useState('');
  const [email, setEmail] = useState('');

  const [taketime, setTaketime] = useState('');
  const [backtime, setBacktime] = useState('');
    const[driverlicense,setDriverlicense] = useState('');


  const navigate = useNavigate();
  const location = useLocation();

const a = location.state;


  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };
  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleTakeDateChange = (event) => {
    setTakedate(event.target.value);
  };

  const handleBackDateChange = (event) => {
    setBackdate(event.target.value);
  };
  const handleTakeTimeChange = (event) => {
    setTaketime(event.target.value);
  };
  const handleBackTimeChange = (event) => {
    setBacktime(event.target.value);
  };
  const handleDriverLicenseChange = (event) => {
    setDriverlicense(event.target.value);
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a payload object with the data to be inserted
    const payload = {
      name: name,
      address: address,
      phone: phone,
      email: email,
      takedate: takedate,
      backdate: backdate,
      taketime :taketime,
      backtime :backtime,
      driverlicense :driverlicense
    };

    fetch('http://localhost:8081/RentalForms/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then(response => {
      
        console.log('Data inserted successfully');
      })
      .catch(error => {
        console.error('Error inserting data:', error);
      });
   
  };
  return (
    <div className="booking-form">
        <img src="https://thumbs.dreamstime.com/b/porsche-logo-p-huven-p%C3%A5-den-gula-bilhuven-slapp-fokus-september-moskva-ryssland-148192716.jpg" alt="" />
    
      <form onSubmit={handleSubmit}>
      <h2>Rental Form</h2><br /><br /><br />

        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={handleNameChange} required />
        <br /><br />
        <label htmlFor="address">Address:</label>
        <input type="text" id="address" value={address} onChange={handleAddressChange} required />
        <br /><br />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={handleEmailChange} required />
        <br /><br />
        <label htmlFor="phone">Phone:</label>
        <input type="tel" id="phone" value={phone} onChange={handlePhoneChange} required />
        <br /><br />

        <label htmlFor="takedate">Take Date:</label>
        <input type="date" id="takedate" value={takedate} onChange={handleTakeDateChange} required />
        <br /><br />
        <label htmlFor="backdate">back Date:</label>
        <input type="date" id="backdate" value={backdate} onChange={handleBackDateChange} required />
        <br /><br />
        <label htmlFor="taketime">Take Time:</label>
        <input type="time" id="taketime" value={taketime} onChange={handleTakeTimeChange} required />
        <br /><br />
        <label htmlFor="backtime">Back Time:</label>
        <input type="time" id="backtime" value={backtime} onChange={handleBackTimeChange} required />
        <br /><br />
        <label htmlFor="driverlicense">Driver License:</label>
        <input type="text" id="driverlicense" value={driverlicense} onChange={handleDriverLicenseChange} required />
        <br /><br />
        
        <button type="submit">Book Now</button>
        <br />
      </form>
    </div>
  );
};

export default RentalForm;
