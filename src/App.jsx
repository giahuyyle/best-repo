import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LandingPage from "./pages/LandingPage";
import CouponsPage from "./pages/CouponsPage";
import RoadmapPage from "./pages/RoadmapPage";
import CrosswordPage from "./pages/CrosswordPage";

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <LandingPage />;
      case "coupons":
        return <CouponsPage />;
      case "milestones":
        return <RoadmapPage />;
      case "crossword":
        return <CrosswordPage />;
      default:
        return <LandingPage />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main>{renderPage()}</main>
      <Footer />
    </div>
  );
};

export default App;
