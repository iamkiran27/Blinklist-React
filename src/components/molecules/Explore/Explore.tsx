import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Typography } from "@mui/material";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

interface ExploreInterface {
  openExplore: Function;
  isNavExtended: boolean;
  setIsNavExtended: Function;
}

function Explore(props: ExploreInterface) {
  return (
    <div
      data-testid="explore"
      className="group__items"
      onClick={(e) => {
        props.openExplore(e);
        props.setIsNavExtended(!props.isNavExtended);
      }}
    >
      <Typography>Explore</Typography>
      {!props.isNavExtended ? (
        <ExpandMoreIcon></ExpandMoreIcon>
      ) : (
        <ExpandLessIcon></ExpandLessIcon>
      )}
    </div>
  );
}

export default Explore;
