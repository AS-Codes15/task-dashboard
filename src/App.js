import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";

import AppProvider from "./context/AppContext";
import Navbar from "./components/Navbar";

// LAZY LOADED PAGES
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Projects = lazy(() => import("./pages/Projects"));
const Tasks = lazy(() => import("./pages/Tasks"));
const TaskDetail = lazy(() => import("./pages/TaskDetail"));

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Navbar />

        {/* LOADING FALLBACK FOR LAZY COMPONENTS */}
        <Suspense
          fallback={
            <div className="p-6 text-center">Loading page...</div>
          }
        >
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/tasks/:id" element={<TaskDetail />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;