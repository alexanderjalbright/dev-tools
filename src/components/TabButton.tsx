import React from "react";
import "../App.css";
import styles from "./TabButton.module.css";

export type HandleTabClick = (
  event: React.MouseEvent<HTMLButtonElement>
) => void;

export interface ITab {
  name: string;
  selectedTab: string;
  activeColor: string;
  inactiveColor: string;
  handleTabClick: HandleTabClick;
}

export default function TabButton({
  name,
  selectedTab,
  activeColor,
  inactiveColor,
  handleTabClick,
}: ITab) {
  const backgroundColor =
    selectedTab === name
      ? `${styles.active} ${activeColor}`
      : `${styles.inactive} ${inactiveColor}`;
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
