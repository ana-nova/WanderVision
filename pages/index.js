import EntryList from "@/components/EntryList";
import { addEntry, editEntry } from "@/utils/entryUtils";

export default function HomePage({ entries, setEntries }) {
  return (
    <EntryList
      entries={entries}
      onAddEntry={(newEntry) => addEntry(newEntry, setEntries)}
    />
  );
}
