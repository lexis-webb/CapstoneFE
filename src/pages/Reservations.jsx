import React from 'react';
import EditTime from '../components/EditTime';  
import { Link } from 'react-router-dom';
import CreateTimeSlotForm from '../components/CreateReservation';
import TimeSlotsList from '../components/DisplayTime';

const Reservations = () => {
  return (
    <div>
      <h2>Reservations</h2>

      {/* Navigation for different link */}
      <nav>
        <ul>
          <li>
            <Link to="/reservations/create-timeslot">Create Reservation</Link>
          </li>
          <li>
            <Link to="/reservations/view-timeslots">View Availabe Time</Link>
          </li>
        </ul>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="create-timeslot" element={<CreateTimeSlotForm/>} />
        <Route path="view-timeslots" element={<TimeSlotsList />} />
        <Route path="edit-timeslot/:id" element={<EditTime />} />
      </Routes>
    </div>
  );
};

export default Reservations;
