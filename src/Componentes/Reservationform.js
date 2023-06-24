import React, { useReducer } from "react";
import "./Reservationform.css";
import { useEffect , useState} from 'react';
import { useNavigate } from 'react-router-dom';


const initialState = {
  selectedDate: "",
  selectedTime: "",
  numberOfGuests: 1,
  selectedOccasion: "",
  seatingOption: "Standard",
};
function Reservationform({
  formState,
  availableTimes,
  onFormChange,
  onSubmit,
  setAvailableTimes,
}) {
  const navigate1 = useNavigate();
  const [times, setTimes] = useState([]);

  useEffect(() => {
    initializeTimes();
  }, []);
  function handleBookingConfirmation() {
    // Perform booking confirmation logic
    // ...

    // Navigate to the booking confirmation page
    navigate1('/ConfirmedBooking');
  }
  function initializeTimes() {
    const today = new Date();
    const formattedDate = formatDate(today);
    // eslint-disable-next-line no-undef
    fetchAPI(formattedDate)
      .then((times) => {
        setTimes(times);
      })
      .catch((error) => {
        console.log('Error fetching times:', error);
      });
  }

  function updateTimes(selectedDate) {
    const formattedDate = formatDate(selectedDate);
    // eslint-disable-next-line no-undef
    fetchAPI(formattedDate)
      .then((times) => {
        setTimes(times);
      })
      .catch((error) => {
        console.log('Error fetching times:', error);
      });
  }
  function fetchAPI(date) {
    
    // Example using fetch:
    return fetch(`https://api.example.com/times?date=${date}`)
      .then((response) => response.json())
      .then((data) => {
        // Process the data if needed
        return data.times;
      });
  }
  function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    
    return `${year}-${month}-${day}`;
  }
  

  const { selectedDate } = formState;

  const handleFormChange = (field, value) => {
    onFormChange(field, value);
    if (field === "UPDATE_DATE") {
      // Update available times based on the selected date
      const updatedTimes = getAvailableTimes(value);
      setAvailableTimes(updatedTimes);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  const getAvailableTimes = (date) => {
    // Replace this logic with your own implementation to fetch available times based on the selected date
    // Example: Assume available times are stored in a data structure or fetched from an API
    // Return the available times for the selected date
    // For demonstration purposes, the available times will be hardcoded here

    const availableTimesByDate = {
      "2023-06-20": ["17:00", "18:00", "19:00", "20:00"],
      "2023-06-21": ["18:00", "19:00", "20:00", "21:00"],
      "2023-06-22": ["19:00", "20:00", "21:00", "22:00"],
    };

    return availableTimesByDate[date] || [];
  };
  return (
    <section className="reserve_section">
      <div className="reserve_form">
        <form onSubmit={onSubmit}>
          <label htmlFor="res-date">Choose date</label>
          <input
            type="date"
            id="res-date"
            name="selectedDate"
            onChange={(e) => onFormChange("selectedDate", e.target.value)}
            required
          />
          <label htmlFor="res-time">Choose time</label>
          <select
            id="res-time"
            name="selectedTime"
            onChange={(e) => onFormChange("selectedTime", e.target.value)}
            required
          >
            <optgroup label="Choose time">
              {availableTimes.map((time) => (
                <option key={time} value={time}>{time}</option>
              ))}
            </optgroup>
          </select>
          <label htmlFor="guests">Number of guests</label>
          <input
            type="number"
            placeholder="1"
            min="1"
            max="10"
            id="guests"
            name="numberOfGuests"
            onChange={(e) => onFormChange("numberOfGuests", e.target.value)}
            required
          />
          <label htmlFor="occasion">Occasion</label>
          <select
            id="occasion"
            name="selectedOccasion"
            onChange={(e) => onFormChange("selectedOccasion", e.target.value)}
          >
            <optgroup label="Occasion">
              <option>Birthday</option>
              <option>Anniversary</option>
              <option>Engagement</option>
            </optgroup>
          </select>
          <h3 className="seating_opt">Seating Options</h3>
          <label>
            <input
              type="radio"
              id="standard"
              name="seating-option"
              value="Standard"
              onChange={(e) => onFormChange("seatingOption", e.target.value)}
            />
            Standard
          </label>
          <label>
            <input
              type="radio"
              id="outside"
              name="seating-option"
              value="Outside"
              onChange={(e) => onFormChange("seatingOption", e.target.value)}
            />
            Outside
          </label>
          {/* <Link to="/ConfirmedBooking"> */}
            <button className="btn" onClick={handleBookingConfirmation}>Book Now</button>
          {/* </Link> */}
        </form>
      </div>
    </section>
  );
}

export default Reservationform;
