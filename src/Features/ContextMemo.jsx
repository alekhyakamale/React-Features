import React, { useState, useContext, createContext, useMemo, useCallback, memo } from 'react';

// 1. Create the shared context
const DashboardContext = createContext();

export default function ContextMemo() {
    const [theme, setTheme] = useState('light');
    const [ticker, setTicker] = useState(0);

    // The single context value object
    const contextValue = { theme, ticker, setTheme };

    return (
        <DashboardContext.Provider value={contextValue}>
            <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
                <h1>Dashboard</h1>
                <button onClick={() => setTicker(t => t + 1)}>
                    Update Live Ticker ({ticker})
                </button>
                <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
                    Toggle Theme
                </button>

                {/* The components consuming the context */}
                <Header />
                <HeavyGirdWrapper />
            </div>
        </DashboardContext.Provider>
    );
}

// 2. A lightweight component that needs both pieces of state
function Header() {
    const { theme, ticker } = useContext(DashboardContext);
    console.log('Header re-rendered');
    console.log(theme, ticker)
    return <p>Current Theme: {theme} | Ticker: {ticker}</p>;
}

const HeavyGirdWrapper = () => {
    const {theme} = useContext(DashboardContext);
    return <HeavyDataGrid theme = {theme} />
}

// 3. A heavy component that ONLY needs the theme
const HeavyDataGrid = memo(({theme}) => {
    // Artificial delay to simulate heavy rendering
    let startTime = performance.now();
    while (performance.now() - startTime < 300) {
        // Do nothing for 300ms
    }

    console.log('HeavyDataGrid re-rendered');

    return (
        <div style={{
            marginTop: '20px',
            padding: '50px',
            background: theme === 'light' ? '#eee' : '#333',
            color: theme === 'light' ? '#000' : '#fff'
        }}>
            <h2>Massive Data Table</h2>
            <p>I should only re-render when the theme changes!</p>
        </div>
    );
})