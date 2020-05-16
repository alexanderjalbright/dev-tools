import React from "react";
import "../App.css";
import styles from "./TabButton.module.css";

export type HandleTabClick = (
  event: React.MouseEvent<HTMLButtonElement>
) => void;

export interface ITabConstants {
  name: string;
  activeColorClass: string;
  inactiveColorClass: string;
}

interface ITabButton {
  tabDetails: ITabConstants;
  selectedTab: string;
  handleTabClick: HandleTabClick;
}

export default function TabButton({
  tabDetails,
  selectedTab,
  handleTabClick,
}: ITabButton) {
  const { name, activeColorClass, inactiveColorClass } = tabDetails;
  const backgroundColor =
    selectedTab === name
      ? `${styles.active} ${activeColorClass}`
      : `${styles.inactive} ${inactiveColorClass}`;
  return (
    <button
      title={name}
      name={name}
      className={`${styles.tab} ${backgroundColor}`}
      onClick={handleTabClick}
    >
      {name}
    </button>
  );
}
