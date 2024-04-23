import React from "react";
import Dropdown from "./Dropdown";
import useDataLoader from "../customHooks/useDataLoader";
import { Typography } from "@mui/material";

const CountryDropdown = ({ onSelectCountry, value }) => {
  const { data: countries, loading, error } = useDataLoader("Country");

  if (error) {
    return (
      <Typography variant="body2">
        Error fetching Countries. Please try again.
      </Typography>
    );
  }

  return (
    <Dropdown
      label="Select Country"
      options={countries}
      value={value}
      onChange={onSelectCountry}
      loading={loading}
    />
  );
};

export default CountryDropdown;
