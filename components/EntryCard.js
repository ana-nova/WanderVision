import { useState } from "react";
import EntryForm from "./EntryForm";
import FavIcon from "@/public/assets/heart.svg";
import FavIconFilled from "@/public/assets/heartfill.svg";
import StyledButton from "./StyledButtons";
import styled from "styled-components";

export default function EntryCard({
  entry,
  onDeleteEntry,
  onEditEntry,
  onToggleFavorite,
}) {
  const [mode, setMode] = useState("default");

  return (
    <Card>
      <div className={`entry-card ${entry.favorite ? "favorite" : ""}`}>
        {mode === "edit" ? (
          <>
            <EntryForm
              onSubmitEntry={(updatedEntry) => {
                onEditEntry(entry.id, updatedEntry);
                setMode("default");
              }}
              isEditing={true}
              initialData={entry}
            />
            <StyledButton
              type="button"
              action="cancel"
              onClick={() => setMode("default")}
            >
              Cancel
            </StyledButton>
          </>
        ) : (
          <>
            <h3>{entry.destination}</h3>
            <p>Time Slot: {entry.timeSlot}</p>
            <p>Transportation: {entry.transportation}</p>
            <p>Fun Facts: {entry.funFacts}</p>
            <StyledButton
              type="button"
              action="fav"
              onClick={() => onToggleFavorite(entry.id)}
            >
              {entry.favorite ? <FavIconFilled /> : <FavIcon />}
            </StyledButton>
            <StyledButton
              type="button"
              action="edit"
              onClick={() => setMode("edit")}
            >
              Edit
            </StyledButton>
            <StyledButton
              type="button"
              action="delete"
              onClick={() => setMode("delete")}
            >
              Delete
            </StyledButton>
          </>
        )}
        {mode === "delete" && (
          <>
            <p>Are you sure you want to delete this entry?</p>
            <StyledButton
              type="button"
              action="cancel"
              onClick={() => setMode("default")}
            >
              Cancel
            </StyledButton>
            <StyledButton
              type="button"
              action="delete"
              onClick={() => onDeleteEntry(entry.id)}
            >
              Confirm Delete
            </StyledButton>
          </>
        )}
      </div>
    </Card>
  );
}

const Card = styled.div`
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  background-color: white;
`;
