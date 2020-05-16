import React, { useState } from "react";
import "./App.css";
import TabButton, {
  ITabConstants,
  HandleTabClick,
} from "./components/TabButton";

interface ITabs {
  [key: string]: ITabConstants;
}

type TabMapper = (
  tabs: ITabs,
  handleTabClick: HandleTabClick,
  selectedTab: string
) => JSX.Element[];

const TABS: ITabs = {
  TIME: {
    name: "Time",
    activeColorClass: "active-blue",
    inactiveColorClass: "inactive-blue",
  },
  TEXT_CONVERTER: {
    name: "Text Converter",
    activeColorClass: "active-purple",
    inactiveColorClass: "inactive-purple",
  },
};

const tabMapper: TabMapper = (tabs, handleTabClick, selectedTab) => {
  return Object.keys(tabs).map((key) => (
    <TabButton
      key={`tab-${key}`}
      {...{ tabDetails: tabs[key], handleTabClick, selectedTab }}
    />
  ));
};

const App = () => {
  const [selectedTab, setSelectedTab] = useState("Time");

  const handleTabClick: HandleTabClick = (e) => {
    setSelectedTab(e.currentTarget.name);
  };
  return (
    <div className="App">
      <>{tabMapper(TABS, handleTabClick, selectedTab)}</>
    </div>
  );
};

export default App;
