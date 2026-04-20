import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DogPhoto from "./Features/DogPhoto";
import UserAvatar from "./Features/UserAvatar";
import ThemedCard from "./Features/ThemedCard";

export const UserContext = React.createContext(null);
export const ThemeContext = React.createContext('light');

export default function App() {

  const [user, setUser] = useState({ name: "Alekhya" })
  const [theme, setTheme] = useState('light')

  return (
    <BrowserRouter>
      <ThemeContext.Provider value={theme}>
        <UserContext.Provider value={user}>
          <button onClick={() => setTheme(t => t === 'light' ? 'dark' : 'light')}>
            Toggle theme
          </button>
          <Routes>
            <Route path="/dog" element={<DogPhoto />} />
            <Route path="/avatar" element={<UserAvatar />} />
            <Route path="/theme" element={<ThemedCard />} />
          </Routes>
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