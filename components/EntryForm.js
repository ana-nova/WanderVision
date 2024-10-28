import React from "react";
import StyledButton from "./StyledButtons";
import styled from "styled-components";

export default function EntryForm({
  onSubmitEntry,
  isEditing = false,
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

    event.target.reset();
  }

  return (
    <Card>
      <FormContainer onSubmit={handleSubmit}>
        <label htmlFor="destination">
          Destination
          <br />
          <Input
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
          <Input
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
          <Input
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
          <Input
            type="text"
            id="funFacts"
            name="funFacts"
            defaultValue={initialData.funFacts}
            placeholder="Enter fun facts"
            required
          />
        </label>
        <br />
        <ButtonContainer>
          <StyledButton type="submit">
            {isEditing ? "Save Changes" : "Add Trip"}
          </StyledButton>
        </ButtonContainer>
      </FormContainer>
    </Card>
  );
}

const Card = styled.div`
  padding: 1.5rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  background-color: #f9f9f9;
  margin: 1rem 0;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 0.5rem;
`;

export const FormContainer = styled.form`
  display: grid;
  gap: 0.5rem;
`;

export const Input = styled.input`
  padding: 0.5rem;
  font-size: inherit;
  border: 1px solid black;
  border-radius: 0.5rem;
`;
