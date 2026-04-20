import React, {useState} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DogPhoto from "./Features/DogPhoto";
import UserAvatar from "./Features/UserAvatar";

export const UserContext = React.createContext(null);

export default function App(){
  
  const[user, setUser] = useState({ name: "Alekhya" })

  return(
    <BrowserRouter>
      <UserContext.Provider value={user}>
        <Routes>
          <Route path="/dog" element={<DogPhoto />} />
          <Route path="/avatar" element={<UserAvatar />} />
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  )
}

function Layout(){
  return <Sidebar />;
}

function Sidebar(){
  return <UserAvatar />
}