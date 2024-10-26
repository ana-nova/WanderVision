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

  return (
    <div>
      <h1>Plan Your Next Trip</h1>
      <EntryForm createEntry={createEntry} />
      <EntryList entries={entries} />
    </div>
  );
}
