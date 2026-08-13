import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import DogPhoto from "./Features/DogPhoto";
import UserAvatar from "./Features/UserAvatar";
import ThemedCard from "./Features/ThemedCard";
import TabRenderer from "./Features/Tabs/TabRenderer";
import UseMemoUsage from "./Features/useMemoUsage";
import UseCallbackUsage from "./Features/useCallbackUsage";
import PerformanceHooksUsage from "./Features/performanceHooksUsage";
import CorrectUse from "./Features/MemoizationApps/CorrectUse";
import CatCompanionDashboard from "./Features/MemoizationApps/CatCompanionDashboard";
import ProductList from "./Features/Problems/ProductListMemoization";
import CommentFeed from "./Features/Problems/CommentFeed";
import SearchPanel from "./Features/Problems/SearchPanel";
import RedSquareGreenSquare from "./Features/Problems/RedSquareGreenSquare";
import ContextMemo from "./Features/ContextMemo";
import ProductPage from "./Features/E-CommerceProblem";
import TransitionApp from "./Features/Transition/TransitionApp";
import TransitionSearch from "./Features/Transition/TransitionSearch";
import SlowTab from "./Features/Transition/SlowTab";
import Stopwatch from "./Features/Stopwatch";
import RickAndMortySearch from "./Features/RickMortySearch";
import Accordions from "./Features/Accordions";
import ModalApp from "./Features/OverlayModal";
import WeatherApp from "./Features/WeatherApp";
import Todo from "./Features/To-do";
import Todo2 from "./Features/Todo2";

const routes = [
  { path: "/dog", label: "Dog Photo" },
  { path: "/avatar", label: "User Avatar" },
  { path: "/theme", label: "Themed Card" },
  { path: "/tabs", label: "Tab Renderer" },
  { path: "/usememo", label: "useMemo Usage" },
  { path: "/usecallback", label: "useCallback Usage" },
  { path: "/performance", label: "Performance Hooks Usage" },
  { path: "/correctuse", label: "Correct Use (Memoization)" },
  { path: "/catcompanion", label: "Cat Companion Dashboard" },
  { path: "/productlistMemoization", label: "Product List Memoization" },
  { path: "/commentFeed", label: "Comment Feed" },
  { path: "/searchPanel", label: "Search Panel" },
  { path: "/red-square-green-square", label: "Red Square Green Square" },
  { path: "/contextMemo", label: "Context Memo" },
  { path: "/productPage", label: "Product Page" },
  { path: "/transition", label: "Transition App" },
  { path: "/transitionsearch", label: "Transition Search" },
  { path: "/slowtab", label: "Slow Tab" },
  { path: "/stopwatch", label: "Stopwatch" },
  { path: "/rickmortysearch", label: "Rick and Morty Search" },
  { path: "/accordions", label: "Accordions" },
  { path: "/overlaymodal", label: "Overlay Modal" },
  { path: "/weather", label: "Weather App" },
  { path: "/todo", label: "Todo" },
  { path: "/todo2", label: "Todo2" },
];

function Home() {
  return (
    <ul>
      {routes.map(({ path, label }) => (
        <li key={path}>
          <Link to={path}>{label}</Link>
        </li>
      ))}
    </ul>
  );
}

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
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
      <Route path="/red-square-green-square" element={<RedSquareGreenSquare />} />
      <Route path="/contextMemo" element={<ContextMemo />} />
      <Route path="/productPage" element={<ProductPage />} />
      <Route path="/transition" element={<TransitionApp />} />
      <Route path="/transitionsearch" element={<TransitionSearch />} />
      <Route path="/slowtab" element={<SlowTab />} />
      <Route path="/stopwatch" element={<Stopwatch />} />
      <Route path="/rickmortysearch" element={<RickAndMortySearch />} />
      <Route path="/accordions" element={<Accordions />} />
      <Route path="/overlaymodal" element={<ModalApp />} />
      <Route path="/weather" element={<WeatherApp />} />
      <Route path="/todo" element={<Todo />} />
      <Route path="/todo2" element={<Todo2 />} />
    </Routes>
  );
}
