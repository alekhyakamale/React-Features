import React from "react";
import { Routes, Route } from "react-router-dom";
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

export default function AppRoutes() {
  return (
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
      <Route path="/red-square-green-square" element={<RedSquareGreenSquare />} />
      <Route path="/contextMemo" element={<ContextMemo />} />
      <Route path="/productPage" element={<ProductPage />} />
    </Routes>
  );
}
