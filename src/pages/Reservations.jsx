import React from 'react';

import { Link } from 'react-router-dom';
import CreateTimeSlotForm from '../components/CreateReservation';
import TimeSlotsList from '../components/DisplayTime';
// import { DeleteTimeSlot } from "../components/DisplayTime";
import EditTimeSlot from '../components/EditTime';

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
        <Route path="timeslots/delete" element={<DeleteTimeSlot/>} />
        <Route path="timeslot/edit" element={<EditTimeSlot />} />
      </Routes>
    </div>
  );
};

export default Reservations;
