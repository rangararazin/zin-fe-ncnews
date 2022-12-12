import { Tab, Tabs } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [value, setValue] = useState("all");

  function handleChange(newValue) {
    setValue(newValue);
  }

  return (
    <>
      <Tabs
        onChange={(e) => {
          const newTabValue = e.target.innerText.toLowerCase();
          handleChange(newTabValue);
        }}
        value={value}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <Tab
          value="all"
          label="All"
          key="all"
          to="/articles"
          component={Link}
        />
        <Tab
          value="topics"
          label="Topics"
          key="topics"
          to="/topics"
          component={Link}
        />
      </Tabs>
    </>
  );
};

export default Navbar;
