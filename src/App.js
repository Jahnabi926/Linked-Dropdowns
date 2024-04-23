import { useState } from "react";
import { Grid, Stack } from "@mui/material";
import CountryDropdown from "./components/CountryDropdown";
import StateDropdown from "./components/StateDropdown";
import DistrictDropdown from "./components/DistrictDropdown";
import SubDistrictDropdown from "./components/SubDistrictDropdown";
import VillageDropdown from "./components/VillageDropdown";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const darkTheme = createTheme({ palette: { mode: "dark" } });

function App() {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedSubDistrict, setSelectedSubDistrict] = useState("");
  const [selectedVillage, setSelectedVillage] = useState("");

  const handleCountrySelection = (event) => {
    setSelectedCountry(event.target.value);
    setSelectedState("");
    setSelectedDistrict("");
    setSelectedSubDistrict("");
    setSelectedVillage("");
  };

  const handleStateSelection = (event) => {
    setSelectedState(event.target.value);
    setSelectedDistrict("");
    setSelectedSubDistrict("");
    setSelectedVillage("");
  };

  const handleDistrictSelection = (event) => {
    setSelectedDistrict(event.target.value);
    setSelectedSubDistrict("");
    setSelectedVillage("");
  };

  const handleSubDistrictSelection = (event) => {
    setSelectedSubDistrict(event.target.value);
    setSelectedVillage("");
  };

  const handleVillageSelection = (event) => {
    setSelectedVillage(event.target.value);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Grid container>
        <Stack
          spacing={{ xs: 4 }}
          sx={{ m: 20 }}
          direction="row"
          useFlexGap
          flexWrap="wrap"
        >
          <CountryDropdown
            onSelectCountry={handleCountrySelection}
            value={selectedCountry}
          />
          {selectedCountry && (
            <StateDropdown
              onSelectState={handleStateSelection}
              value={selectedState}
            />
          )}
          {selectedState && (
            <DistrictDropdown
              onSelectDistrict={handleDistrictSelection}
              value={selectedDistrict}
            />
          )}
          {selectedDistrict && (
            <SubDistrictDropdown
              onSelectSubDistrict={handleSubDistrictSelection}
              value={selectedSubDistrict}
            />
          )}
          {selectedSubDistrict && (
            <VillageDropdown
              onSelectVillage={handleVillageSelection}
              value={selectedVillage}
            />
          )}
        </Stack>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
