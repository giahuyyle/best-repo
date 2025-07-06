import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LandingPage from "./pages/LandingPage";
import CouponsPage from "./pages/CouponsPage";
import Message from "./pages/Message";
import RoadmapPage from "./pages/RoadmapPage";
import CrosswordPage from "./pages/CrosswordPage";
import LockScreen from "./components/Lockscreen";

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleUnlock = (enteredPassword) => {
    const correctPassword = import.meta.env.VITE_SECRET_PASSWORD;
    if (enteredPassword === correctPassword) {
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <LandingPage />;
      case "messages":
        return <Message />;
      case "milestones":
        return <RoadmapPage />;
      case "crossword":
        return <CrosswordPage />;
      default:
        return <LandingPage />;
    }
  };

  // If not authenticated, show lock screen
  if (!isAuthenticated) {
    return <LockScreen onUnlock={handleUnlock} />;
  }

  // If authenticated, show main app
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main>{renderPage()}</main>
      <Footer />
    </div>
  );
};

export default App;
