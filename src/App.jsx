import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./AppRoutes";

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
            <AppRoutes />
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