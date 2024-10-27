import React from "react";

export default function EntryForm({
  onSubmitEntry,
  submitLabel = "Add Trip",
  initialData = {
    destination: "",
    timeSlot: "",
    transportation: "",
    funFacts: "",
  },
}) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    onSubmitEntry(data);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="destination">
        Destination
        <br />
        <input
          type="text"
          id="destination"
          name="destination"
          defaultValue={initialData.destination}
          placeholder="Enter destination"
          required
        />
      </label>
      <br />
      <label htmlFor="timeSlot">
        Time Slot
        <br />
        <input
          type="date"
          id="timeSlot"
          name="timeSlot"
          defaultValue={initialData.timeSlot}
          required
        />
      </label>
      <br />
      <label htmlFor="transportation">
        Transportation
        <br />
        <input
          type="text"
          id="transportation"
          name="transportation"
          defaultValue={initialData.transportation}
          placeholder="Enter transportation"
          required
        />
      </label>
      <br />
      <label htmlFor="funFacts">
        Fun Facts
        <br />
        <input
          type="text"
          id="funFacts"
          name="funFacts"
          defaultValue={initialData.funFacts}
          placeholder="Enter fun facts"
          required
        />
      </label>
      <br />
      <button type="submit">{submitLabel}</button>
    </form>
  );
}
