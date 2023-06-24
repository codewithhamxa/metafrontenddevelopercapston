import "./App.css";
import Home from "./Pages/Home";
import Reservation from "./Pages/Reservation";
import ConfirmedBooking   from "./Pages/ConfirmedBooking";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/Reservation" element={<Reservation />}></Route>
          <Route path="/ConfirmedBooking" element={<ConfirmedBooking />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
