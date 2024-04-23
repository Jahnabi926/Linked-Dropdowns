import React from "react";
import Dropdown from "./Dropdown";
import useDataLoader from "../customHooks/useDataLoader";
import { Typography } from "@mui/material";

const SubDistrictDropdown = ({ onSelectSubDistrict, value }) => {
  const { data: subDistricts, loading, error } = useDataLoader("Sub District");

  if (error) {
    return (
      <Typography variant="body2">
        Error fetching Sub Districts. Please try again.
      </Typography>
    );
  }

  return (
    <Dropdown
      label="Select Sub-District"
      options={subDistricts}
      value={value}
      onChange={onSelectSubDistrict}
      loading={loading}
    />
  );
};

export default SubDistrictDropdown;
