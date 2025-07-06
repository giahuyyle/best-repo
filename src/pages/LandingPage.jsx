import React, { useState } from "react";
import { Mail } from "lucide-react";
import LetterModal from "../components/LetterModal";
import TimeCounter from "../components/TimeCounter";

const LandingPage = () => {
  const [showLetter, setShowLetter] = useState(false);

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Happy Anniversary,
              <span className="block text-5xl lg:text-6xl text-gray-300 mt-2">
                My Stinki Boo
              </span>
            </h1>
            <p className="text-xl text-white/80 mb-8 max-w-lg">
              Two incredible years of love, laughter, and unforgettable
              memories. You make every day brighter just by being you.
            </p>
            <button
              onClick={() => setShowLetter(true)}
              className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-200 flex items-center space-x-2 mx-auto lg:mx-0"
            >
              <Mail className="h-5 w-5" />
              <span>Read My Letter</span>
            </button>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <div className="text-center">
                  <div className="text-8xl mb-4">🌷</div>
                  <p className="text-white/70 text-sm">A beautiful bouquet</p>
                  <p className="text-white/70 text-sm">for my beautiful love</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <TimeCounter />
      <LetterModal isOpen={showLetter} onClose={() => setShowLetter(false)} />
    </div>
  );
};

export default LandingPage;
