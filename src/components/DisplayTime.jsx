import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // To handle navigation

const TimeSlotsList = () => {
  const [timeSlots, setTimeSlots] = useState([]);
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Initialize navigate function

  // Fetch time slots from the backend
  useEffect(() => {
    const fetchTimeSlots = async () => {
      try {
        const res = await axios.get('http://localhost:4000/reservations/timeslot');
        setTimeSlots(res.data.data);
      } catch (err) {
        setError('Failed to fetch time slots');
      }
    };

    fetchTimeSlots();
  }, []);

  // Delete time slot by id
  const DeleteTimeSlot = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/reservations/timeslots/delete`);
      setTimeSlots(timeSlots.filter((slot) => slot._id !== id));
    } catch (err) {
      setError('Failed to delete time slot');
    }
  };

  // Handle Edit button click - Navigate to the edit page
  const handleEdit = (id) => {
    navigate(`/timeslots/edit`); // Navigate to the edit page with the time slot id
  };

  return (
    <div className='booked'>
      <h2>You're All Set</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {timeSlots.map((timeSlot) => (
          <li key={timeSlot._id}>
            <p>{timeSlot.slot} on {timeSlot.date} for {timeSlot.people} people</p>
            <p>Email: {timeSlot.email}</p>
            <button onClick={() => DeleteTimeSlot(timeSlot._id)}>Delete</button>
            <button className="edit" onClick={() => handleEdit(timeSlot._id)}>Edit</button>
            <button className="done">Done</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TimeSlotsList;

