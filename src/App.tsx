import React, { useState } from "react";
import { Button } from "../@/components/ui/button";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SchoolsPage from "./pages/SchoolsPage";
import "./App.css";
import LoginPage from "./pages/LoginPage";
import SettingPage from "./pages/SettingPage";
import MainPage from "./pages/MainPage";
import './i18n.js';

function App() {
  console.log(navigator.language)
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/schools" element={<SchoolsPage />} />
          <Route path="/settings" element={<SettingPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
