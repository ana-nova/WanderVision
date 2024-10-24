import React from "react";

export default function NewEntry({ entry }) {
  return (
    <div>
      <h3>{entry.destination}</h3>
      <p>{entry.funFacts}</p>
      <p>{entry.timeSlot}</p>
      <p>{entry.transportation}</p>
    </div>
  );
}
