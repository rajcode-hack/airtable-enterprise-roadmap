import { Routes, Route } from "react-router-dom";
import SideNav from "./components/SideNav";

import Dashboard from "./pages/Dashboard";
import Workspaces from "./pages/Workspaces";
import Programs from "./pages/Programs";
import Members from "./pages/Members";

export default function App() {
  return (
    <div className="app-layout">
      <SideNav />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/workspaces" element={<Workspaces />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/members" element={<Members />} />
        </Routes>
      </main>
    </div>
  );
}
