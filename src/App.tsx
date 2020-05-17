import React, { useState } from 'react'
import './App.css'
import TabButton, { HandleTabClick } from './components/TabButton'
import Time from './components/TabContent/Time'
import TextConverter from './components/TabContent/TextConverter'
import TabContent from './components/TabContent'

interface ITabs {
    [key: string]: {
        activeColorClass: string
        inactiveColorClass: string
        Content: React.FC
    }
}

const TABS: ITabs = {
    Time: {
        activeColorClass: 'active-blue',
        inactiveColorClass: 'inactive-blue',
        Content: Time,
    },
    'Text Converter': {
        activeColorClass: 'active-purple',
        inactiveColorClass: 'inactive-purple',
        Content: TextConverter,
    },
}

type TabButtonMapper = (
    tabs: ITabs,
    handleTabClick: HandleTabClick,
    selectedTab: string
) => JSX.Element[]

const tabMapper: TabButtonMapper = (tabs, handleTabClick, selectedTab) => {
    return Object.keys(tabs).map((key) => {
        const { activeColorClass, inactiveColorClass } = tabs[key]
        return (
            <TabButton
                key={`tab-${key}`}
                {...{
                    name: key,
                    activeColorClass,
                    inactiveColorClass,
                    isSelected: selectedTab === key,
                    handleTabClick,
                }}
            />
        )
    })
}

const App = () => {
    const firstTab = Object.keys(TABS)[0]
    const [selectedTab, setSelectedTab] = useState<string>(firstTab)

    const handleTabClick: HandleTabClick = (e) => {
        setSelectedTab(e.currentTarget.name)
    }

    const { Content, activeColorClass } = TABS[selectedTab]
    return (
        <div className="App">
            <>{tabMapper(TABS, handleTabClick, selectedTab)}</>
            <TabContent {...{ activeColorClass }}>
                <Content />
            </TabContent>
        </div>
    )
}

export default App
