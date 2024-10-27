import React, { useState } from "react";

export default function EntryForm({ createEntry, isEditing }) {
  const [destination, setDestination] = useState("");
  const [funFacts, setFunFacts] = useState("");
  const [timeSlot, setTimeSlot] = useState("");
  const [transportation, setTransportation] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    console.log("from EntryForm; ", data); //zum testen

    // for my submit event later
    createEntry(data);

    // Reset state values to clear the form
    setDestination("");
    setFunFacts("");
    setTimeSlot("");
    setTransportation("");
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
          name="destination"
          required
        />
      </div>

      <div>
        <label>Time Slot: </label>
        <input
          type="date"
          value={timeSlot}
          onChange={(event) => setTimeSlot(event.target.value)}
          placeholder="Enter time slot"
          name="timeSlot"
          required
        />
      </div>

      <div>
        <label>Transportation: </label>
        <input
          type="text"
          value={transportation}
          onChange={(event) => setTransportation(event.target.value)}
          placeholder="Enter transportation"
          name="transportation"
          required
        />
      </div>

      <div>
        <label>Fun Facts: </label>
        <input
          type="text"
          value={funFacts}
          onChange={(event) => setFunFacts(event.target.value)}
          placeholder="Enter fun facts"
          name="funFacts"
          required
        />
      </div>

      <button type="submit">{isEditing ? "Save Changes" : "Add Trip"}</button>
    </form>
  );
}
