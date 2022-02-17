import React from "react";
import { Button } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { useStyles } from "../../organisms/BookDetailPage";

const KindleButton = () => {
  const classes = useStyles();
  return (
    <Button
      sx={{
        textTransform: "none",
        color: "gray",
        fontSize: "16px",
        paddingLeft: "20px",
        paddingRight: "20px",
      }}
      variant="text"
    >
      Send to Kindle
      <ArrowRightAltIcon className={classes.arrow}></ArrowRightAltIcon>
    </Button>
  );
};

export default KindleButton;