import styled from "styled-components";
import EntryCard from "./EntryCard";
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
        isEditing={false}
      />
      <ListContainer>
        {entries.map((entry) => (
          <li key={entry.id}>
            <EntryCard
              //  key={entry.id}
              entry={entry}
              onEditEntry={onEditEntry}
              onDeleteEntry={onDeleteEntry}
              onToggleFavorite={onToggleFavorite} // Pass toggle favorite to each Entry
            />
          </li>
        ))}
      </ListContainer>
    </div>
  );
}

const ListContainer = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Fixed 3 columns */
  gap: 20px;
  width: 100%;
`;
