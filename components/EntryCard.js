import FavIcon from "@/public/assets/heart.svg";
import FavIconFilled from "@/public/assets/heartfill.svg";
import StyledButton from "./StyledButtons";
import styled from "styled-components";
import Link from "next/link";

export default function EntryCard({ entry }) {
  return (
    <Card>
      <div className={`entry-card ${entry.favorite ? "favorite" : ""}`}>
        <h3>{entry.destination}</h3>
        <p>Time Slot: {entry.timeSlot}</p>
        <p>Transportation: {entry.transportation}</p>
        <p>Fun Facts: {entry.funFacts}</p>
        <StyledButton type="button" action="fav">
          {entry.favorite ? <FavIconFilled /> : <FavIcon />}
        </StyledButton>
        <Link href={`/edit/${entry.id}`}>
          <StyledButton type="button" action="edit">
            Edit
          </StyledButton>
        </Link>
        <StyledButton type="button" action="delete">
          Delete
        </StyledButton>

        {/* {mode === "delete" && (
          <>
            <p>Are you sure you want to delete this entry?</p>
            <StyledButton
              type="button"
              action="cancel"
              onClick={() => setMode("default")}
            >
              Cancel
            </StyledButton>
            <StyledButton type="button" action="delete">
              Confirm Delete
            </StyledButton>
          </>
        )} */}
      </div>
    </Card>
  );
}

const Card = styled.div`
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  background-color: white;
`;
