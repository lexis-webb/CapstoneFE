import React, { useState } from 'react';
import axios from 'axios';

const CreateTimeSlotForm = () => {
  const [date, setDate] = useState('');
  const [slot, setSlot] = useState('');
  const [people, setPeople] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!date || !slot || !people || !email) {
      setError('Please fill in all fields');
      return;
    }

    try {
      await axios.post('http://localhost:5173/reservations/create-timeslot', {
        date,
        slot,
        people,
        email,
      });
      setDate('');
      setSlot('');
      setPeople('');
      setEmail('');
      setError('');
      alert('TimeSlot created successfully!');
    } catch (err) {
      setError('Failed to create TimeSlot');
    }
  };

  return (
    <div className='createReservation'>
      <h2>Create Your Reservation</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <input
          type="text"
          value={slot}
          onChange={(e) => setSlot(e.target.value)}
          placeholder="Slot (e.g., 10:00 AM - 11:00 AM)"
        />
        <input
          type="number"
          value={people}
          onChange={(e) => setPeople(e.target.value)}
          placeholder="People"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <button type="submit">Create Reservation</button>
      </form>
    </div>
  );
};

export default CreateTimeSlotForm;
