import React, { useState } from "react";

const initialTripForm = {
  leavingFrom: "Saveetha",
  destination: "Chetiped",
  reason: "",
  leavingTime: "09:00",
  returnTime: "18:00",
};

export default function Trips({ trips, setTrips }) {
  const [form, setForm] = useState(initialTripForm);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.reason) {
      alert("Please enter the reason for visit");
      return;
    }
    setTrips([...trips, form]);
    setForm(initialTripForm);
  }

  return (
    <div>
      <h2>Your Trips</h2>
      {trips.length === 0 && <p>No trips posted yet.</p>}
      {trips.map((trip, i) => (
        <div key={i} className="trip-card">
          <p><strong>Leaving From:</strong> {trip.leavingFrom}</p>
          <p><strong>Destination:</strong> {trip.destination}</p>
          <p><strong>Reason:</strong> {trip.reason}</p>
          <p><strong>Leaving Time:</strong> {trip.leavingTime}</p>
          <p><strong>Return Time:</strong> {trip.returnTime}</p>
        </div>
      ))}

      <h3>Post a New Trip</h3>
      <form onSubmit={handleSubmit} className="trip-form">
        <label>Leaving From:</label>
        <input
          type="text"
          name="leavingFrom"
          value={form.leavingFrom}
          onChange={handleChange}
          required
        />
        <label>Destination:</label>
        <input
          type="text"
          name="destination"
          value={form.destination}
          onChange={handleChange}
          required
        />
        <label>Reason for Visit:</label>
        <input
          type="text"
          name="reason"
          value={form.reason}
          onChange={handleChange}
          required
        />
        <label>Leaving Time:</label>
        <input
          type="time"
          name="leavingTime"
          value={form.leavingTime}
          onChange={handleChange}
          required
        />
        <label>Return Time:</label>
        <input
          type="time"
          name="returnTime"
          value={form.returnTime}
          onChange={handleChange}
          required
        />
        <button type="submit">Add Trip</button>
      </form>
    </div>
  );
}
