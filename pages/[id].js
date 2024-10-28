import EntryForm from "@/components/EntryForm";
import StyledButton from "@/components/StyledButtons";
import { editEntry } from "@/utils/entryUtils";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function EditPage({ entries, setEntries }) {
  const router = useRouter();
  const { id } = router.query;

  const [placeEntry, setPlaceEntry] = useState({
    destination: "",
    timeSlot: "",
    transportation: "",
    funFacts: "",
  });

  useEffect(() => {
    setPlaceEntry(entries.find((entry) => entry.id === id));
  }, [entries, id]);

  return (
    <>
      <EntryForm
        onSubmitEntry={(updatedEntry) => {
          editEntry(id, updatedEntry, setEntries);
        }}
        initialData={placeEntry}
        isEditing={true}
      />
      <StyledButton
        type="button"
        action="cancel"
        onClick={() => setMode("default")}
      >
        Cancel
      </StyledButton>
    </>
  );
}
