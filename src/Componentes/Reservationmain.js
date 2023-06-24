import React, { useState, useReducer } from "react";
import "./Reservationmain.css";
import Hero from "./Hero";
import Reservationform from "./Reservationform";

const initialState = {
  selectedDate: "",
  selectedTime: "",
  numberOfGuests: 1,
  selectedOccasion: "",
  seatingOption: "Standard",
};

function reducer(state, action) {
  switch (action.type) {
    case "UPDATE_DATE":
      return { ...state, selectedDate: action.payload };
    default:
      return state;
  }
}

function Reservationmain() {
  const [formState, dispatch] = useReducer(reducer, initialState);
  const [availableTimes, setAvailableTimes] = useState([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ]);

  const handleFormChange = (field, value) => {
    dispatch({ type: field, payload: value });
  };

  const handleSubmit = () => {
    // Handle form submission with the formState data
    console.log(formState);
  };

  return (
    <>
      <Hero />
      <Reservationform
        formState={formState}
        availableTimes={availableTimes}
        onFormChange={handleFormChange}
        onSubmit={handleSubmit}
        setAvailableTimes={setAvailableTimes}
      />
    </>
  );
}

export default Reservationmain;
