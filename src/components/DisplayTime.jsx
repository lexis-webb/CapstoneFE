import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TimeSlotsList = () => {
  const [timeSlots, setTimeSlots] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchTimeSlots = async () => {
      try {
        const res = await axios.get('http://localhost:5173/api/timeslots');
        setTimeSlots(res.data.data);
      } catch (err) {
        setError('Failed to fetch time slots');
      }
    };

    fetchTimeSlots();
  }, []);

  const deleteTimeSlot = async (id) => {
    try {
      await axios.delete(`http://localhost:5173/api/timeslots/${id}`);
      setTimeSlots(timeSlots.filter((slot) => slot._id !== id));
    } catch (err) {
      setError('Failed to delete time slot');
    }
  };

  return (
    <div>
      <h2>All Time Slots</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {timeSlots.map((timeSlot) => (
          <li key={timeSlot._id}>
            <p>{timeSlot.slot} on {timeSlot.date} for {timeSlot.people} people</p>
            <p>Email: {timeSlot.email}</p>
            <button onClick={() => deleteTimeSlot(timeSlot._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TimeSlotsList;
