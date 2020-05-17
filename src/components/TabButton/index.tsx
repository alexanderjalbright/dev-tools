import React from 'react'
import styles from './TabButton.module.css'

export type HandleTabClick = (
    event: React.MouseEvent<HTMLButtonElement>
) => void

interface ITabButton {
    name: string
    activeColorClass: string
    inactiveColorClass: string
    isSelected: boolean
    handleTabClick: HandleTabClick
}

export default function TabButton({
    name,
    activeColorClass,
    inactiveColorClass,
    isSelected,
    handleTabClick,
}: ITabButton) {
    const backgroundColor = isSelected
        ? `${styles.active} ${activeColorClass}`
        : `${styles.inactive} ${inactiveColorClass}`
    return (
        <button
            title={name}
            name={name}
            className={`${styles.tab} ${backgroundColor}`}
            onClick={handleTabClick}
        >
            {name}
        </button>
    )
}
