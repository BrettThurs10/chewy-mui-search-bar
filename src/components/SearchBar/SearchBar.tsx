import React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import { AutocompleteProps } from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { top10movies } from "../../assets/top10movies";
import { Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FormControl from "@mui/material/FormControl";

import { styled } from "@mui/system";
//@ts-ignore
export type SearchBarProps = AutocompleteProps & {
  test: string;
  searchIcon?: React.ReactNode;
  startIcon?: boolean;
};

const SearchBarStyled = styled(Box, {
  // Configure which props should be forwarded on DOM
  shouldForwardProp: (prop) => prop !== "dark" && prop !== "border",
})(({ theme }) => ({
  ".MuiAutocomplete-root": {
    ".MuiOutlinedInput-root": {
      paddingRight: "9px",
    },
  },
}));

export const SearchBar = (props: SearchBarProps) => {
  const { searchIcon = <SearchIcon />, startIcon = true } = props;
  return (
    <SearchBarStyled>
      <FormControl fullWidth>
        <Autocomplete
          id="free-solo-demo"
          freeSolo
          options={top10movies.map((option) => option.title)}
          renderInput={(params) => (
            <>
              <TextField
                {...params}
                label={props.label} // shows no label if no label prop is passed
                InputProps={{
                  ...params.InputProps, // InputProps attribute is overriding the InputProps parameter of params. You have to merge InputProps property of params
                  startAdornment: startIcon && searchIcon,
                  endAdornment: !startIcon && searchIcon,
                  fullWidth: true,
                  sx: { boxShadow: "0px 8px 20px rgba(0,0,0,0.06)" },
                }}
              />
            </>
          )}
        />
      </FormControl>
    </SearchBarStyled>
  );
};
