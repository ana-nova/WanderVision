import EntryForm from "../components/EntryForm.js";
import EntryList from "@/components/EntryList.js";
import { uid } from "uid";
import useLocalStorageState from "use-local-storage-state";

export default function HomePage() {
  // my global state
  const [entries, setEntries] = useLocalStorageState("my entries", {
    defaultValue: [],
  });

  function createEntry(entryObject) {
    const newEntry = {
      id: uid(),
      ...entryObject,
    };
    setEntries((prevEntries) => [newEntry, ...prevEntries]);
  }

  function editEntry(id, editedEntry) {
    setEntries((prevEntries) =>
      prevEntries.map((entry) => (entry.id === id ? editedEntry : entry))
    );
  }

  return (
    <div>
      <h1>Plan Your Next Trip</h1>
      <EntryForm createEntry={createEntry} />
      {entries.map((entry) => {
        return (
          <EntryList key={entry.id} entries={entries} onEditEntry={editEntry} />
        );
      })}
    </div>
  );
}
