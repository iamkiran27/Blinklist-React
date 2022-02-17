import { Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React from "react";

interface LogoutI {
  loginWithRedirect: Function;
}

function Logout(props: LogoutI) {
  return (
    <div>
      <span onClick={() => props.loginWithRedirect()} className="group__items">
        <Typography>Account</Typography>

        <ExpandMoreIcon></ExpandMoreIcon>
      </span>
    </div>
  );
}

export default Logout;
