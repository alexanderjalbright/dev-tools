import React, { useState } from 'react'
import TabButton, { HandleTabClick } from './components/TabButton'
import Time from './components/TabContent/Time'
import TextConverter from './components/TabContent/TextConverter'
import TabContent from './components/TabContent'
import styles from './App.module.css'
import useWindowWidth from './hooks/useWindowWidth'

interface ITabs {
    [key: string]: {
        activeColorClass: string
        inactiveColorClass: string
        Content: React.FC
    }
}

const TABS: ITabs = {
    Time: {
        activeColorClass: styles.activeBlue,
        inactiveColorClass: styles.inactiveBlue,
        Content: Time,
    },
    'Text Converter': {
        activeColorClass: styles.activePurple,
        inactiveColorClass: styles.inactivePurple,
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
    const [isTabsExpanded, setIsTabsExpanded] = useState<boolean>(false)
    const windowWidth = useWindowWidth()

    const handleTabClick: HandleTabClick = (e) => {
        setSelectedTab(e.currentTarget.name)
    }

    const { Content, activeColorClass } = TABS[selectedTab]
    return (
        <div className="App">
            <div style={{ display: 'flex' }}>
                <button className={styles.menuButton}>
                    <div className={styles.menuButtonBar}></div>
                    <div className={styles.menuButtonBar}></div>
                    <div className={styles.menuButtonBar}></div>
                </button>

                {windowWidth > 600 ? (
                    <div className={styles.tabsHorizontal}>
                        {tabMapper(TABS, handleTabClick, selectedTab)}
                    </div>
                ) : null}
                <div className={styles.flexGrow}></div>
                <button
                    className={styles.expandTabsButton}
                    onClick={() => setIsTabsExpanded(!isTabsExpanded)}
                >
                    <div className={styles.expandTabsDot}></div>
                    <div className={styles.expandTabsDot}></div>
                    <div className={styles.expandTabsDot}></div>
                </button>
            </div>
            {windowWidth <= 600 && isTabsExpanded ? (
                <div className={styles.tabsVertical}>
                    {tabMapper(TABS, handleTabClick, selectedTab)}
                </div>
            ) : null}
            <TabContent {...{ activeColorClass }}>
                <Content />
            </TabContent>
        </div>
    )
}

export default App
