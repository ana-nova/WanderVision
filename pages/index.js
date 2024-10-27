import EntryList from "@/components/EntryList";
import { uid } from "uid";
import useLocalStorageState from "use-local-storage-state";

export default function HomePage() {
  const [entries, setEntries] = useLocalStorageState("my entries", {
    defaultValue: [],
  });

  function addEntry(entryData) {
    const newEntry = { id: uid(), ...entryData };
    setEntries((prevEntries) => [newEntry, ...prevEntries]);
  }

  function editEntry(id, updatedEntry) {
    setEntries((prevEntries) =>
      prevEntries.map((entry) =>
        entry.id === id ? { ...entry, ...updatedEntry } : entry
      )
    );
  }

  function deleteEntry(id) {
    setEntries((prevEntries) => prevEntries.filter((entry) => entry.id !== id));
  }

  return (
    <EntryList
      entries={entries}
      onAddEntry={addEntry}
      onEditEntry={editEntry}
      onDeleteEntry={deleteEntry}
    />
  );
}
