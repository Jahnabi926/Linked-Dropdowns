import React from "react";
import {
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
} from "@mui/material";
import Paper from "@mui/material/Paper";

const Dropdown = ({ value, label, onChange, options = [], loading }) => {
  const controlId = `${label}-select`;

  return (
    <Paper elevation={24}>
      <Box sx={{ minWidth: 180 }}>
        <FormControl fullWidth>
          <InputLabel id={controlId}>{label}</InputLabel>
          <Select
            labelId={controlId}
            id={controlId}
            value={value}
            label={`Select ${label}`}
            onChange={onChange}
          >
            {loading ? (
              <Typography>Loading...</Typography>
            ) : (
              options.map((option, index) => (
                <MenuItem key={index} value={option}>
                  {option}
                </MenuItem>
              ))
            )}
          </Select>
        </FormControl>
      </Box>
    </Paper>
  );
};

export default Dropdown;
