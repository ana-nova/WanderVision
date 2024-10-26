import Entry from "./Entry";

export default function EntryList({ entries }) {
  console.log("from EntryList: ", entries);

  if (!entries) {
    return <div>No entries here!</div>;
  }

  return (
    <div>
      {entries.map((entry) => (
        <Entry key={entry.id} entry={entry} />
      ))}
    </div>
  );
}
