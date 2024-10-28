import { uid } from "uid";

export function addEntry(entryData, setEntries) {
  const newEntry = { id: uid(), ...entryData, favorite: false };
  setEntries((prevEntries) => [newEntry, ...prevEntries]);
}

export function editEntry(id, updatedEntry, setEntries) {
  setEntries((prevEntries) =>
    prevEntries.map((entry) =>
      entry.id === id ? { ...entry, ...updatedEntry } : entry
    )
  );
}

export function deleteEntry(id, setEntries) {
  setEntries((prevEntries) => prevEntries.filter((entry) => entry.id !== id));
}

export function toggleFavorite(id, setEntries) {
  setEntries((prevEntries) =>
    prevEntries.map((entry) =>
      entry.id === id ? { ...entry, favorite: !entry.favorite } : entry
    )
  );
}
