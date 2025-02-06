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

  const deleteTimeSlot = async (id) => {
    try {
      // Send DELETE request to backend
      await axios.delete(`http://localhost:4000/reservations/timeslots/delete`, { data: { id } });

      // Remove the deleted time slot from the state
      setTimeSlots(timeSlots.filter((slot) => slot._id !== id));
    } catch (err) {
      console.error('Failed to delete time slot', err);
      setError('Failed to delete time slot');
    }
  };

  // Handle Edit button click - Navigate to the edit page
  const handleEdit = (id) => {
    navigate(`/timeslots/edit`); // Navigate to the edit page with the time slot id
  };
  const handleDone = () => {
    navigate('/');  // Navigate to home page
  };

  return (
    <div className="booked">
      <h2>You're All Set</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {timeSlots.length === 0 ? (
          <li>No time slots available.</li>
        ) : (
          timeSlots.map((timeSlot) => (
            <li key={timeSlot._id}>
              <p>{timeSlot.slot} on {new Date(timeSlot.date).toLocaleString()} for {timeSlot.people} people</p>
              <p>Email: {timeSlot.email}</p>
              <div className='bookBtn'>
              <button onClick={() => deleteTimeSlot(timeSlot._id)}>Delete</button>
              <button className="edit" onClick={() => handleEdit(timeSlot._id)}>Edit</button>
              <button className="done" onClick={handleDone}>Done</button>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default TimeSlotsList;

