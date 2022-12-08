import { SyntheticEvent, useState } from "react";

import * as singleSpa from "single-spa";

import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";

export default function BasicTabs() {
  const [value, setValue] = useState("one");

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue);

    switch (newValue) {
      case "one":
        singleSpa.navigateToUrl("/");
        break;
      case "two":
        singleSpa.navigateToUrl("/app1");
        break;
      default:
        break;
    }
  };

  return (
    <Box sx={{ width: "100%", backgroundColor: "#522e49", height: 48 }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="primary"
        indicatorColor="primary"
        aria-label="secondary tabs example"
      >
        <Tab value="one" label="Item One" />
        <Tab value="two" label="Item Two" />
      </Tabs>
    </Box>
  );
}
