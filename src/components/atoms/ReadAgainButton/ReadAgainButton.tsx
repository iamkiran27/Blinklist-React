import React from "react";
import { Button } from "@mui/material";

interface ReadAgainProps {
  handleReadAgain: Function;
  boodId: number;
}

function ReadAgainButton(props: ReadAgainProps) {
  return (
    <Button
      role="readAgainButton"
      onClick={(e) => {
        props.handleReadAgain(props.boodId);
      }}
      sx={{ textTransform: "none", color: "blue" }}
      variant="text"
    >
      Read again
    </Button>
  );
}

export default ReadAgainButton;
