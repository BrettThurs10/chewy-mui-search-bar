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
//@ts-ignore
export type SearchBarProps = AutocompleteProps & {
  test: string;
  searchIcon?: React.ReactNode;
  startIcon?: boolean;
};
export const SearchBar = (props: SearchBarProps) => {
  const { searchIcon = <SearchIcon />, startIcon = true } = props;
  return (
    <>
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
                }}
              />
            </>
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
