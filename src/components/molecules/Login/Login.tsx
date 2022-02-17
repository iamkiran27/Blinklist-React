import React from "react";
import { Avatar } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import deepOrange from "@mui/material/colors/deepOrange";

interface LoginI {
  logout: Function;
}

function Login(props: LoginI) {
  return (
    <div>
      <span onClick={() => props.logout()} className="group__items">
        <Avatar sx={{ bgcolor: deepOrange[500] }}>K</Avatar>
        <ExpandMoreIcon></ExpandMoreIcon>
      </span>
    </div>
  );
}

export default Login;
