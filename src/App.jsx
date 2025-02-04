import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Success from "./pages/Success";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/success" element={<NotFound/>} />
        <Route path="*" element={<Success/>} />
      </Routes>
      <Toaster />
    </Router>
  )
}

export default App
