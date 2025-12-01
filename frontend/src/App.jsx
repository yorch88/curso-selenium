import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";

export default function App() {
  const navigate = useNavigate();

  return (
    <div className="app-container">
      <header className="app-header">
        <h1 data-testid="app-title">Selenium Playground</h1>
        <nav>
          <button
            id="nav-login"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
          <button
            id="nav-dashboard"
            onClick={() => navigate("/dashboard")}
          >
            Dashboard
          </button>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
      </main>

      <footer className="app-footer">
        <small>Curso Selenium – Playground React</small>
      </footer>
    </div>
  );
}
