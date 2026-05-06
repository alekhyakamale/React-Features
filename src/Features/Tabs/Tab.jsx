import React, { useContext } from 'react'
import { TabsContext } from '../../App'

export default function Tabs({ children }) {
    return <div>{children}</div>
}

Tabs.List = function TabList({ children }) {
    return <div style={{ display: 'flex', gap: '8px' }}>{children}</div>
}

Tabs.Tab = function Tab({ id, children }) {
    const { activeTab, setActiveTab } = useContext(TabsContext)
    return (
        <button
            onClick={() => setActiveTab(id)}
            style={{ fontWeight: activeTab === id ? 'bold' : 'normal' }}
        >
            {children}
        </button>
    )
}

Tabs.Panel = function TabPanel({ id, children }) {
    const { activeTab } = useContext(TabsContext)
    if (activeTab !== id) return null
    return <div>{children}</div>
}
