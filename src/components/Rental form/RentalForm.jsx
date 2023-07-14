import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation, useParams } from 'react-router-dom';


const RentalForm = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const[datas,setdatas]=useState('')
  const [pick, setPick] = useState('');
  const [drop, setDrop] = useState('');
  const [email, setEmail] = useState('');
  const [ids, setId] = useState('');
  const{id}=useParams();

  
    const[driverlicense,setDriverlicense] = useState('');
    useEffect(()=>{
        fetch(`http://localhost:8080/cars/${id}`)
        .then((response)=>response.json())
        .then((data)=>setdatas(data))
    })

  const navigate = useNavigate();
  const location = useLocation();

const car = location.state;



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

  const handlePickChange = (event) => {
    setPick(event.target.value);
  };

  const handleDropChange = (event) => {
    setDrop(event.target.value);
  };
  
  const handleDriverLicenseChange = (event) => {
    setDriverlicense(event.target.value);
  };
  const handleIdChange = (event) => {
    setId(event.target.value);
  };
  const [checkbox, setCheckbox] = useState(false);
    const handleCheckbox = (e) => {
        setCheckbox(e.target.checked);
    };
    
  const totalCarPrice = () => {
    if (checkbox === false) {
        const Price = datas.rentalprice;
        const start = new Date(pick);
        const end = new Date(drop);
        const numOfDays = (end - start) / (1000 * 60 * 60 * 24);
        const PriceWithOutDamage = Price * numOfDays;
        return (PriceWithOutDamage);
    }
    else {
        const carPriceGet = datas.rentalprice;
        const start = new Date(pick);
        const end = new Date(drop);
        const numOfDays = (end - start) / (1000 * 60 * 60 * 24);
        const PriceWithOutDamage = carPriceGet * numOfDays;
        const PriceWithDamage = (numOfDays * 15000) + PriceWithOutDamage
        return (PriceWithDamage)
    }
}
  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
     id : id ,
      name: name,
      address: address,
      email: email,
      phone: phone,
     pick: pick,
     drop: drop,
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
   navigate("/Final");
    
};

  return (
    <div className="booking-form">
        <img src="https://thumbs.dreamstime.com/b/porsche-logo-p-huven-p%C3%A5-den-gula-bilhuven-slapp-fokus-september-moskva-ryssland-148192716.jpg" alt="" />
    
      <form onSubmit={handleSubmit}>
      <h2>Rental Form</h2><br /><br /><br />
      <label htmlFor="id">ID:</label>
        <input type="id" id="id" value={id} onChange={handleIdChange} required />
        <br /><br />
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

        <label htmlFor="Pick">Pick:</label>
        <input type="datetime-local" id="Pick" value={pick} onChange={handlePickChange} required />
        <br /><br />
        <label htmlFor="Drop">Drop:</label>
        <input type="datetime-local" id="Drop" value={drop} onChange={handleDropChange} required />
        <br /><br />
       
        <label htmlFor="driverlicense">Driver License:</label>
        <input type="text" id="driverlicense" value={driverlicense} onChange={handleDriverLicenseChange} required />
        <br /><br />
             <label for="Insurance">Damage Insurance</label>
             <input type="checkbox" id="Insurance" name="Insurance" value={totalCarPrice()} onClick={handleCheckbox} /><br /><br />
        <h3>Total Cost : {(datas.rentalprice)}</h3>
        <p>Total Car Price: <span>{totalCarPrice()}</span></p>
        <button type="submit" onClick={handleSubmit} required>Check Out</button>
        <br />
      </form>
    </div>
  );
};

export default RentalForm;
