import React from 'react'
import styles from './TabContent.module.css'

interface ITabContent {
    activeColorClass: string
    children: JSX.Element
}

export default function TextConverter({
    activeColorClass,
    children,
}: ITabContent) {
    return (
        <div className={`${styles.tabContent} ${activeColorClass}`}>
            {children}
        </div>
    )
}
