import React, { useState } from "react";
import { Import, Info, Mail } from "lucide-react";
import LetterModal from "../components/LetterModal";
import TimeCounter from "../components/TimeCounter";
import bouquetImage from "../assets/bouquet.jpeg";

const LandingPage = () => {
  const relationshipStart = new Date("2023-07-07");
  const now = new Date();
  const diff = now - relationshipStart;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const years = Math.floor(days / 365);
  const [showLetter, setShowLetter] = useState(false);

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              happy two-year anniversary,
              <span className="block text-5xl lg:text-6xl text-gray-300 mt-2">
                trúc thúi của anh
              </span>
            </h1>
            <p className="text-xl text-white/80 max-w-lg">
              {years}-year journey that went by too fast
            </p>
            <p className="text-xl text-white/80 mb-8 max-w-lg">
              full of memories, happiness and love
            </p>
            <button
              onClick={() => setShowLetter(true)}
              className="cursor-pointer bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-200 flex items-center space-x-2 mx-auto lg:mx-0"
            >
              <Info className="h-5 w-5" />
              <span>about this website</span>
            </button>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <div className="text-center">
                  <div className="w-100 h-100 mx-auto mb-4 rounded-2xl overflow-hidden bg-white/5 flex items-center justify-center">
                    <img
                      src={bouquetImage}
                      alt="Beautiful bouquet of tulips"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // Fallback to emoji if image fails to load
                        e.target.style.display = "none";
                        e.target.nextSibling.style.display = "block";
                      }}
                    />
                    <div className="text-8xl" style={{ display: "none" }}>
                      🌷
                    </div>
                  </div>
                  <p className="text-white/70 text-sm">
                    the most beautiful, dropdead gorgeous boo
                  </p>
                  <p className="text-white/70 text-sm">
                    holding her favorite flower bouquet
                  </p>
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
