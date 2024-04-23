import React from "react";
import Dropdown from "./Dropdown";
import { Typography } from "@mui/material";
import useDataLoader from "../customHooks/useDataLoader";

const DistrictDropdown = ({ onSelectDistrict, value }) => {
  const { data: districts, loading, error } = useDataLoader("District");

  if (error) {
    return (
      <Typography variant="body2">
        Error fetching Districts. Please try again.
      </Typography>
    );
  }

  return (
    <Dropdown
      label="Select District"
      options={districts}
      value={value}
      onChange={onSelectDistrict}
      loading={loading}
    />
  );
};

export default DistrictDropdown;
