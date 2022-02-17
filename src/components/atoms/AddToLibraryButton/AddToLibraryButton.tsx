import { Button } from "@mui/material";
import React from "react";

import { useStyles } from "../../organisms/EntrepreneurBooks";

const AddToLibraryButton = () => {
  const style = useStyles();

  return (
    <Button
      sx={{
        textTransform: "none",

        color: "#0365F2",
        border: "none",
      }}
      className={style.button}
      variant="text"
    >
      + Add to library
    </Button>
  );
};

export default AddToLibraryButton;
