import { useState } from "react";
import { Button } from "../@/components/ui/button";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SchoolsPage from "./pages/SchoolsPage";
import "./App.css";
import Header from "./components/Header";
import LoginPage from "./pages/LoginPage";
import SettingPage from "./pages/SettingPage";
import MainPage from "./pages/MainPage";

function App() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    console.log(count);
  };
  return (
    <>
      <Router>
        <Header />
        <Button className="underscore" onClick={handleClick}>
          Click
        </Button>
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
