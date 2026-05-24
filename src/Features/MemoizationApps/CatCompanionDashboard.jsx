import React, { useState, useCallback, memo } from 'react';

// 1. The Memoized Child Component
// React.memo tells this component: "Only re-render if your props change."
const FeedCatButton = memo(({ onFeed, catName }) => {
    // You will only see this log on initial load, or if the specific cat is fed.
    console.log(`[Child Rendered] FeedCatButton for ${catName}`);
    
    return (
        <button style={{ padding: '8px', margin: '4px' }} onClick={onFeed}>
            Feed {catName}
        </button>
    );
});

export default function CatCompanionDashboard() {
    const [mitsuMeals, setMitsuMeals] = useState(0);
    const [yoruMeals, setYoruMeals] = useState(0);
    
    // Unrelated state just to demonstrate re-rendering
    const [isRetroTheme, setIsRetroTheme] = useState(false); 

    // 2. The Memoized Callback Functions
    // We use the updater pattern (prev => prev + 1) so we don't need to put the 
    // state variables into the dependency array. This keeps the array empty, 
    // meaning the function is created exactly once and never again.
    const handleFeedMitsu = useCallback(() => {
        setMitsuMeals((prev) => prev + 1);
    }, []); 

    const handleFeedYoru = useCallback(() => {
        setYoruMeals((prev) => prev + 1);
    }, []);

    return (
        <div style={{ 
            padding: '20px', 
            fontFamily: isRetroTheme ? 'monospace' : 'sans-serif',
            backgroundColor: isRetroTheme ? '#222' : '#FFF',
            color: isRetroTheme ? '#0F0' : '#000'
        }}>
            <h2>Meal Tracker</h2>
            <p>Mitsu's Meals: {mitsuMeals}</p>
            <p>Yoru's Meals: {yoruMeals}</p>

            {/* 
              Because the child is wrapped in memo(), and the function is wrapped 
              in useCallback(), these buttons will NOT re-render when isRetroTheme changes.
            */}
            <FeedCatButton catName="Mitsu" onFeed={handleFeedMitsu} />
            <FeedCatButton catName="Yoru" onFeed={handleFeedYoru} />

            <hr />
            
            {/* Clicking this triggers a parent re-render, but the child buttons are protected */}
            <button onClick={() => setIsRetroTheme(!isRetroTheme)}>
                Toggle Theme
            </button>
        </div>
    );
}