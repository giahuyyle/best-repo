import React from "react";

const CrosswordPage = () => {
  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-4">truc va huy crossword</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
            i'm still making it so hang on gang
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-12 border border-white/20 text-center">
          <div className="text-6xl mb-6">🧩</div>
          <h2 className="text-2xl font-bold text-white mb-4">
            crossword puzzle
          </h2>
          <p className="text-white/70 mb-8">
            work in progress
          </p>
          <div className="grid grid-cols-8 gap-1 max-w-sm mx-auto mb-8">
            {Array.from({ length: 64 }, (_, i) => (
              <div
                key={i}
                className="aspect-square bg-white/20 border border-white/30 rounded-sm"
              ></div>
            ))}
          </div>
          <p className="text-white/60 text-sm">
            i like truc
          </p>
        </div>
      </div>
    </div>
  );
};

export default CrosswordPage;
