import styled from "styled-components";

// Define a styled button component
const StyledButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: white;
  width: auto;

  /* Button Colors Based on Action Type */
  background-color: ${({ action }) =>
    action === "delete"
      ? "#e74c3c" // Red for delete
      : action === "save"
      ? "#27ae60" // Green for save
      : action === "cancel"
      ? "#7f8c8d" // Gray for cancel
      : action === "fav"
      ? "#ffffff"
      : action === "edit"
      ? "orange"
      : "#3498db"}; // Default blue for any other type

  /* Additional styling like hover effects */
  &:hover {
    opacity: 0.9;
  }
`;

export default StyledButton;
