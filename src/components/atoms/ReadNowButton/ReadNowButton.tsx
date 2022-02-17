import React from "react";
import { Button } from "@mui/material";

const ReadNowButton = () => {
  return (
    <Button
      sx={{
        textTransform: "none",
        fontSize: "16px",
        paddingLeft: "20px",
        paddingRight: "20px",
        borderColor: "black",
      }}
      variant="outlined"
    >
      Read now
    </Button>
  );
};

export default ReadNowButton;
