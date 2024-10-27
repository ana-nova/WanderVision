import { useState } from "react";
import Entry from "./Entry";
import EntryForm from "./EntryForm";

export default function EntryList({
  entries,
  onAddEntry,
  onEditEntry,
  onDeleteEntry,
}) {
  const [isAdding, setIsAdding] = useState(false);

  return (
    <div>
      <h1>Plan Your Next Trip</h1>
      {isAdding ? (
        <>
          <EntryForm
            onSubmitEntry={(newEntry) => {
              onAddEntry(newEntry);
              setIsAdding(false);
            }}
            submitLabel="Add Trip"
          />
          <button onClick={() => setIsAdding(false)}>Cancel</button>
        </>
      ) : (
        <button onClick={() => setIsAdding(true)}>Add New Trip</button>
      )}

      {entries.map((entry) => (
        <Entry
          key={entry.id}
          entry={entry}
          onEditEntry={onEditEntry}
          onDeleteEntry={onDeleteEntry}
        />
      ))}
    </div>
  );
}
