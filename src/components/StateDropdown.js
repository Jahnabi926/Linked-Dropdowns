import React from "react";
import Dropdown from "./Dropdown";
import { Typography } from "@mui/material";
import useDataLoader from "../customHooks/useDataLoader";

const StateDropdown = ({ onSelectState, value }) => {
  const { data: states, loading, error } = useDataLoader("State");

  if (error) {
    return (
      <Typography variant="body2">
        Error fetching States. Please try again.
      </Typography>
    );
  }

  return (
    <Dropdown
      label="Select State"
      options={states}
      value={value}
      onChange={onSelectState}
      loading={loading}
    />
  );
};

export default StateDropdown;
