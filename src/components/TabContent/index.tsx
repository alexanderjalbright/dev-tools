import React from 'react'

interface ITabContent {
    activeColorClass: string
    children: JSX.Element
}

export default function TextConverter({
    activeColorClass,
    children,
}: ITabContent) {
    return <div className={activeColorClass}>{children}</div>
}
