import React from "react";

import InputAdornment from "@mui/material/InputAdornment";

import TextField from "@mui/material/TextField";

import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

type FilterData = {
  filter: Function;
  val: string;
  setVal: Function;
};

const SearchBar = (props: FilterData) => {
  return (
    <TextField
      // fullWidth={true}
      data-testid="inputField"
      color="info"
      value={props.val === " " ? null : props.val}
      id="input-with-icon-textfield"
      placeholder="search by author"
      onChange={(e) => {
        props.filter(e.target.value);
        props.setVal(e.target.value);
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchOutlinedIcon fontSize="medium" />
          </InputAdornment>
        ),
      }}
      variant="standard"
    />
  );
};

export default SearchBar;
