import React from "react";

export default function Entry({ entry }) {
  return (
    <div>
      <h3>Your Destination: {entry.destination}</h3>
      <p>Your Fun Fact: {entry.funFacts}</p>
      <p>Time: {entry.timeSlot}</p>
      <p>Transport: {entry.transportation}</p>
    </div>
  );
}