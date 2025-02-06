import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Success from "./pages/Success";
import Reservations from "./pages/Reservations";
import CreateTimeSlotForm from "./components/CreateReservation";
import TimeSlotsList from "./components/DisplayTime";
import { useEffect, useState } from "react";
import axios from "axios";
import EditTimeSlot from "./components/EditTime";



const App = () => {

  const ReservationsList = () => {
    const [reservations, setReservations] = useState([]);  // State to store reservation data
    const [error, setError] = useState(null);  // State to store error message if any
  
    // Fetch data from backend when component mounts
    useEffect(() => {
      axios
        .get('http://localhost:4000/reservations')  // The GET request
        .then((response) => {
          console.log(response.data);  // Log the response data (which is the list of reservations)
          setReservations(response.data);  // Update the state with the fetched data
        })
        .catch((error) => {
          console.error('There was an error fetching the reservations!', error);  // Log the error
          setError('Failed to fetch reservations');  // Set the error state
        });
    }, []);
  };

  return (
    <>

    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/success" element={<Success/>} />
        <Route path="*" element={<NotFound/>} />
        <Route path="/reservations" element={<Reservations/>} />
        <Route path="/reservations/create-slots" element={<CreateTimeSlotForm/>} />
        <Route path="view-timeslots" element={<TimeSlotsList />} />
        <Route path="/timeslots/edit" element={<EditTimeSlot />} />
      </Routes>
      <Toaster />
    </Router>
    </>
  )
}

export default App
