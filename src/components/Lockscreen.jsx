import React, { useState } from "react";
import { Heart, Lock } from "lucide-react";

function LockScreen({ onUnlock }) {
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onUnlock(password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4">
      <div className="relative">
        {/* Glassmorphism container matching your style */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 w-96 max-w-full">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 border border-white/30">
                <Lock className="h-8 w-8 text-white" />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">
              private memories
            </h2>
            <p className="text-white/70 text-sm">
              enter the password to continue
            </p>
          </div>

          {/* Form */}
          <div className="space-y-6">
            <div className="relative">
              <input
                type="password"
                className="w-full px-4 py-4 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/40 focus:border-white/40 transition-all duration-200"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSubmit(e);
                  }
                }}
              />
            </div>

            <button
              onClick={handleSubmit}
              className="w-full bg-white text-black py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <span>unlock</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LockScreen;
