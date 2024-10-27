import { useState } from "react";
import Entry from "./Entry";
import EntryForm from "./EntryForm";

export default function EntryList({ entries, onEditEntry }) {
  const [editEntryId, setEditEntryId] = useState(false);

  if (!entries) {
    return <div>No entries here!</div>;
  }

  function handleEdit() {
    setEditEntryId(!editEntryId);
  }

  function handleEditedEntry(editedEntry) {
    onEditEntry(editEntryId.id, editedEntry);
    setEditEntryId(false);
  }

  return (
    <div>
      {entries.map((entry) => (
        <div key={entry.id}>
          {editEntryId ? (
            <EntryForm
              onEditEntry={handleEditedEntry}
              isEditing={editEntryId}
              initialEntry={entry} // Pass current entry data to edit form
            />
          ) : (
            <>
              <Entry entry={entry} />
              <button onClick={handleEdit}>Edit</button>
            </>
          )}
        </div>
      ))}
    </div>
  );
}
