import React from "react";
import Dropdown from "./Dropdown";
import useDataLoader from "../customHooks/useDataLoader";
import { Typography } from "@mui/material";

const VillageDropdown = ({ onSelectVillage, value }) => {
  const { data: villages, loading, error } = useDataLoader("Village");

  if (error) {
    return (
      <Typography variant="body2">
        Error fetching Villages. Please try again.
      </Typography>
    );
  }

  return (
    <Dropdown
      label="Select Village"
      options={villages}
      value={value}
      onChange={onSelectVillage}
      loading={loading}
    />
  );
};

export default VillageDropdown;
