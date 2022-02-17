import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import "../../organisms/Navbar.css";

interface ExploreInterface {
  openExplore: Function;
}

function Explore(props: ExploreInterface) {
  return (
    <div
      className="group__items"
      onClick={(e) => {
        props.openExplore(e);
      }}
    >
      Explore
      <ExpandMoreIcon></ExpandMoreIcon>
    </div>
  );
}

export default Explore;
