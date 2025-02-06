import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { slot } from '../../data';  // Import the predefined slots

const EditTimeSlot = () => {
  const navigate = useNavigate();

  // Initial state for timeSlot data
  const [timeSlot, setTimeSlot] = useState({
    date: '',
    slot: '',
    people: '',
    email: ''
  });

  // Handle form submit to navigate to the Success page
  const handleSubmit = (e) => {
    e.preventDefault();

    // Here you can perform any other actions you need for your form.
    // Then navigate to the Success page after "submitting"
    navigate('/success');  // Redirect to the success page
  };

  return (
    <div className="container">
      <h2>Change Reservation</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="date"
          value={timeSlot.date}
          onChange={(e) => setTimeSlot({ ...timeSlot, date: e.target.value })}
        />
        
        <select
          value={timeSlot.slot}
          onChange={(e) => setTimeSlot({ ...timeSlot, slot: e.target.value })}
        >
          {slot.map((time, index) => (
            <option key={index} value={time}>
              {time}
            </option>
          ))}
        </select>

        <input
          type="number"
          value={timeSlot.people}
          onChange={(e) => setTimeSlot({ ...timeSlot, people: e.target.value })}
          placeholder="People"
        />

        <input
          type="email"
          value={timeSlot.email}
          onChange={(e) => setTimeSlot({ ...timeSlot, email: e.target.value })}
          placeholder="Email"
        />

        <button type="submit">Update TimeSlot</button>
      </form>
    </div>
  );
};

export default EditTimeSlot;




