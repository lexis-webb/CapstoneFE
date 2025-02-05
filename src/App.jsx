import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Success from "./pages/Success";
import Reservations from "./pages/Reservations";
import CreateTimeSlotForm from "./components/CreateReservation";
import TimeSlotsList from "./components/DisplayTime";
// import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/success" element={<Success/>} />
        <Route path="*" element={<NotFound/>} />
        <Route path="/reservations" element={<Reservations/>} />
        <Route path="/reservations/create-timeslot" element={<CreateTimeSlotForm/>} />
        <Route path="view-timeslots" element={<TimeSlotsList />} />
      </Routes>
      <Toaster />
    </Router>
  )
}

export default App
