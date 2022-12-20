import React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import { AutocompleteProps } from "@mui/material/Autocomplete";
import IconButton, {
  IconButtonProps,
} from "@mui/material/IconButton/IconButton";
import TextField from "@mui/material/TextField";
import { top10movies } from "../../assets/top10movies";
import { Box, Input, OutlinedInput, Stack } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import FormHelperText from "@mui/material/FormHelperText";
import FilledInput from "@mui/material/FilledInput";

export type SearchBarProps = AutocompleteProps & {
  test: string;
};
export const SearchBar = (props: SearchBarProps) => {
  return (
    <>
      <FormControl fullWidth>
        <Autocomplete
          id="free-solo-demo"
          freeSolo
          options={top10movies.map((option) => option.title)}
          renderInput={(params) => (
            <OutlinedInput
              {...params}
              startAdornment={
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              }
            />
          )}
        />
      </FormControl>
      {/* <Box>
        <IconButton>
          <SearchIcon />
        </IconButton>
      </Box> */}
    </>
  );
};
