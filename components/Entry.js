import { useState } from "react";
import EntryForm from "./EntryForm";
import FavIcon from "@/public/assets/heart.svg";
import FavIconFilled from "@/public/assets/heartfill.svg";

export default function Entry({
  entry,
  onDeleteEntry,
  onEditEntry,
  onToggleFavorite,
}) {
  const [mode, setMode] = useState("default");

  return (
    <div className={`entry-card ${entry.favorite ? "favorite" : ""}`}>
      {mode === "edit" ? (
        <>
          <EntryForm
            onSubmitEntry={(updatedEntry) => {
              onEditEntry(entry.id, updatedEntry);
              setMode("default");
            }}
            submitLabel="Save Changes"
            initialData={entry}
          />
          <button type="button" onClick={() => setMode("default")}>
            Cancel
          </button>
        </>
      ) : (
        <>
          <h3>{entry.destination}</h3>
          <p>Time Slot: {entry.timeSlot}</p>
          <p>Transportation: {entry.transportation}</p>
          <p>Fun Facts: {entry.funFacts}</p>
          <button type="button" onClick={() => onToggleFavorite(entry.id)}>
            {entry.favorite ? <FavIconFilled /> : <FavIcon />}
          </button>
          <button type="button" onClick={() => setMode("edit")}>
            Edit
          </button>
          <button type="button" onClick={() => setMode("delete")}>
            Delete
          </button>
        </>
      )}
      {mode === "delete" && (
        <>
          <p>Are you sure you want to delete this entry?</p>
          <button type="button" onClick={() => setMode("default")}>
            Cancel
          </button>
          <button type="button" onClick={() => onDeleteEntry(entry.id)}>
            Confirm Delete
          </button>
        </>
      )}
    </div>
  );
}
