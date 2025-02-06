import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const EditTimeSlot = () => {
  const { id } = useParams();  // Get the id from the URL
  const navigate = useNavigate();
  const [timeSlot, setTimeSlot] = useState({ date: '', slot: '', people: '', email: '' });

  useEffect(() => {
    const fetchTimeSlot = async () => {
      try {
        const res = await axios.get(`http://localhost:4000/reservations/timeslot`);
        setTimeSlot(res.data.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchTimeSlot();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:4000/reservations/timeslots/edit`, timeSlot);
      navigate('/timeslots');  // Navigate to the list page after successful update
    } catch (err) {
      console.error('Failed to update time slot', err);
    }
  };

  return (
    <div>
      <h2>Change Reseravation</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="date"
          value={timeSlot.date}
          onChange={(e) => setTimeSlot({ ...timeSlot, date: e.target.value })}
        />
        <input
          type="text"
          value={timeSlot.slot}
          onChange={(e) => setTimeSlot({ ...timeSlot, slot: e.target.value })}
          placeholder="Slot"
        />
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

