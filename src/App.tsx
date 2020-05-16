import React, { useState } from "react";
import "./App.css";
import TabButton, { ITab, HandleTabClick } from "./components/TabButton";

interface Tabs extends Array<ITab> {}

const App = () => {
  const [selectedTab, setSelectedTab] = useState("Time");

  const handleTabClick: HandleTabClick = (e) => {
    setSelectedTab(e.currentTarget.name);
  };

  const tabs: Tabs = [
    {
      name: "Time",
      selectedTab,
      activeColor: "active-blue",
      inactiveColor: "inactive-blue",
      handleTabClick,
    },
    {
      name: "Text Converter",
      selectedTab,
      activeColor: "active-purple",
      inactiveColor: "inactive-purple",
      handleTabClick,
    },
  ];

  return (
    <div className="App">
      <>
        {tabs.map((tab, index) => (
          <TabButton key={`tab-${index}`} {...tab} />
        ))}
      </>
    </div>
  );
};

export default App;
