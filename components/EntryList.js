import Entry from "./Entry";
import EntryForm from "./EntryForm";

export default function EntryList({
  entries,
  onAddEntry,
  onEditEntry,
  onDeleteEntry,
  onToggleFavorite,
}) {
  return (
    <div>
      <h1>Plan Your Next Trip</h1>
      <EntryForm
        onSubmitEntry={(newEntry) => {
          onAddEntry(newEntry);
        }}
        submitLabel="Add Trip"
      />
      {entries.map((entry) => (
        <Entry
          key={entry.id}
          entry={entry}
          onEditEntry={onEditEntry}
          onDeleteEntry={onDeleteEntry}
          onToggleFavorite={onToggleFavorite} // Pass toggle favorite to each Entry
        />
      ))}
    </div>
  );
}
