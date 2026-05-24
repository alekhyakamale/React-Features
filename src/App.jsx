import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DogPhoto from "./Features/DogPhoto";
import UserAvatar from "./Features/UserAvatar";
import ThemedCard from "./Features/ThemedCard";
import TabRenderer from "./Features/Tabs/TabRenderer";
import UseMemoUsage from "./Features/useMemoUsage"
import UseCallbackUsage from "./Features/useCallbackUsage";
import PerformanceHooksUsage from "./Features/performanceHooksUsage";
import CorrectUse from "./Features/MemoizationApps/CorrectUse";
import CatCompanionDashboard from "./Features/MemoizationApps/CatCompanionDashboard";
import ProductList from "./Features/Problems/ProductListMemoization";
import CommentFeed from "./Features/Problems/CommentFeed";
import SearchPanel from "./Features/Problems/SearchPanel";
import ContextMemo from "./Features/ContextMemo";

export const UserContext = React.createContext(null);
export const ThemeContext = React.createContext('light');
export const TabsContext = React.createContext()

export default function App() {

  const [user, setUser] = useState({ name: "Alekhya" })
  const [theme, setTheme] = useState('light')
  const [activeTab, setActiveTab] = useState('facts');

  return (
    <BrowserRouter>
      <ThemeContext.Provider value={theme}>
        <UserContext.Provider value={user}>
          <TabsContext.Provider value={{activeTab, setActiveTab}}>
            <button onClick={() => setTheme(t => t === 'light' ? 'dark' : 'light')}>
              Toggle theme
            </button>
            <Routes>
              <Route path="/dog" element={<DogPhoto />} />
              <Route path="/avatar" element={<UserAvatar />} />
              <Route path="/theme" element={<ThemedCard />} />
              <Route path="/tabs" element={<TabRenderer />} />
              <Route path="/usememo" element={<UseMemoUsage />} />
              <Route path="/usecallback" element={<UseCallbackUsage />} />
              <Route path="/performance" element={<PerformanceHooksUsage />} />
              <Route path="/correctuse" element={<CorrectUse />} />
              <Route path="/catcompanion" element={<CatCompanionDashboard />} />
              <Route path="/productlistMemoization" element={<ProductList />} />
              <Route path="/commentFeed" element={<CommentFeed />} />
              <Route path="/searchPanel" element={<SearchPanel />} />
              <Route path="/contextMemo" element={<ContextMemo />} />
            </Routes>
          </TabsContext.Provider>
        </UserContext.Provider>
      </ThemeContext.Provider>
    </BrowserRouter>
  )
}

function Layout() {
  return <Sidebar />;
}

function Sidebar() {
  return <UserAvatar />
}