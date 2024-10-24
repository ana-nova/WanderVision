import React, { useState } from "react";

export default function Entries({ onAddEntry }) {
  const [destination, setDestination] = useState("");
  const [funFacts, setFunFacts] = useState("");
  const [timeSlot, setTimeSlot] = useState("");
  const [transportation, setTransportation] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    // for my submit event later
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Destination: </label>
        <input
          type="text"
          value={destination}
          onChange={(event) => setDestination(event.target.value)}
          placeholder="Enter destination"
        />
      </div>

      <div>
        <label>Fun Facts: </label>
        <input
          type="text"
          value={funFacts}
          onChange={(event) => setFunFacts(event.target.value)}
          placeholder="Enter fun facts"
        />
      </div>

      <div>
        <label>Time Slot: </label>
        <input
          type="date"
          value={timeSlot}
          onChange={(event) => setTimeSlot(event.target.value)}
          placeholder="Enter time slot"
        />
      </div>

      <div>
        <label>Transportation: </label>
        <input
          type="text"
          value={transportation}
          onChange={(e) => setTransportation(event.target.value)}
          placeholder="Enter transportation"
        />
      </div>

      <button type="submit">add trip</button>
    </form>
  );
}
