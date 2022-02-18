import React from "react";

import InputAdornment from "@mui/material/InputAdornment";

import TextField from "@mui/material/TextField";

import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

type FilterData = {
  filter: Function;
};

const SearchBar = (props: FilterData) => {
  return (
    <TextField
      data-testid="inputField"
      color="info"
      id="input-with-icon-textfield"
      placeholder="search by author"
      onChange={(e) => {
        props.filter(e.target.value);
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
