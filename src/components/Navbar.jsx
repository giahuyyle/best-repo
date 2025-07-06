import React from "react";
import { Heart, Gift, Map, Grid3x3 } from "lucide-react";

const Navbar = ({ currentPage, setCurrentPage }) => {
  const navItems = [
    { id: "home", label: "Home", icon: Heart },
    { id: "coupons", label: "Coupons", icon: Gift },
    { id: "milestones", label: "Roadmap", icon: Map },
    { id: "crossword", label: "Crossword", icon: Grid3x3 },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold text-white">truc va huy</span>
          </div>
          <div className="flex space-x-8">
            {navItems.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setCurrentPage(id)}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 ${
                  currentPage === id
                    ? "bg-white/20 text-white"
                    : "text-white/70 hover:text-white hover:bg-white/10"
                }`}
              >
                <Icon className="h-4 w-4" />
                <span className="text-sm font-medium">{label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
