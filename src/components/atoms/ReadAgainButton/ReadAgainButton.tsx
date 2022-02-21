import React from "react";
import { Button } from "@mui/material";

interface ReadAgainProps {
  handleReadAgain: Function;
  bookId: number;
}

function ReadAgainButton(props: ReadAgainProps) {
  return (
    <Button
      role="readAgainButton"
      onClick={(e) => {
        props.handleReadAgain(props.bookId);
      }}
      sx={{ textTransform: "none", color: "blue" }}
      variant="text"
    >
      Read again
    </Button>
  );
}

export default ReadAgainButton;
