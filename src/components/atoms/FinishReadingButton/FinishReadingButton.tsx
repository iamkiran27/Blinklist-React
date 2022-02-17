import React from "react";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";

interface FinishButtonProps {
  disabled: boolean;
  bookId: number;
  setActive: Function;
  handleFinish: Function;
}

const FinishReadingButton = (props: FinishButtonProps) => {
  return (
    <Button
      disabled={props.disabled ? true : false}
      onClick={(e) => {
        console.log("bookdata id : ", props.bookId);
        props.handleFinish(props.bookId);
        props.setActive(!props.disabled);
      }}
      sx={{
        textTransform: "none",
        fontSize: "16px",
        paddingLeft: "20px",
        paddingRight: "20px",
      }}
      variant="contained"
    >
      <NavLink style={{ color: "black" }} to="/">
        Finish Reading
      </NavLink>
    </Button>
  );
};

export default FinishReadingButton;
