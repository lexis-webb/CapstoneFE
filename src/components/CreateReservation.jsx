import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { slot } from '../../data';  // Importing the time slot data

const CreateTimeSlotForm = () => {
  const [date, setDate] = useState('');
  const [selectedSlot, setSelectedSlot] = useState('');  // Renamed to `selectedSlot`
  const [people, setPeople] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation check
    if (!date || !selectedSlot || !people || !email) {
      setError('Please fill in all fields');
      return;
    }

    try {
        console.log({ date, selectedSlot, people, email });

      await axios.post('http://localhost:4000/reservations/create-slots', {
        date,
        slot: selectedSlot,  
        people,
        email,
      });
      
     
      setDate('');
      setSelectedSlot('');
      setPeople('');
      setEmail('');
      setError('');

      alert('Reservation created successfully!');
    //   redirect
      navigate('/view-timeslots');
    } catch (err) {
      setError('Failed to create Reservation');
    }
  };

  return (
    <div className='createReservation'>
      <h2>Create Your Reservation</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
       
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        
          <label htmlFor="slot">Time Slot:</label>
          <select
            id="slot"
            value={selectedSlot}
            onChange={(e) => setSelectedSlot(e.target.value)}
          >
            <option value="">Select a time slot</option>
            {slot.map((timeSlot, index) => (
              <option key={index} value={timeSlot}>
                {timeSlot}
              </option>
            ))}
          </select>
        
        
          <label htmlFor="people">People:</label>
          <input
            type="number"
            id="people"
            value={people}
            onChange={(e) => setPeople(e.target.value)}
            placeholder="Number of people"
          />
        

        
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email"
          />
       

        <button type="submit">Create Reservation</button>
      </form>
    </div>
  );
};

export default CreateTimeSlotForm;

