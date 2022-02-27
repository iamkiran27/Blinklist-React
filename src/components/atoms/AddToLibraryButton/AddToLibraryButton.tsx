import { Button } from "@mui/material";
import React from "react";

import { useStyles } from "../../organisms/EntrepreneurBooks/EntrepreneurBooks";

const AddToLibraryButton = (props: any) => {
  const style = useStyles();

  return (
    <Button
      role="addToLibrary"
      sx={{
        textTransform: "none",
        color: props.color,
        border: "none",
      }}
      className={style.button}
      variant={props.variant}
    >
      + Add to library
    </Button>
  );
};

export default AddToLibraryButton;
