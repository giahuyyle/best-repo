import React, { useState, useEffect } from "react";

const TimeCounter = () => {
  const [timeCounter, setTimeCounter] = useState({
    days: 0,
    years: 0,
    decades: 0,
  });

  useEffect(() => {
    const relationshipStart = new Date("2023-07-07");

    const updateCounter = () => {
      const now = new Date();
      const diff = now - relationshipStart;

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const years = Math.floor(days / 365);
      const decades = years/10;

      setTimeCounter({ days, years, decades });
    };

    updateCounter();
    const interval = setInterval(updateCounter, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">
            we've been together for
          </h2>
          <p className="text-white/70">(you do the math, and yes we do decades now)</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { label: "days", value: timeCounter.days },
            { label: "years", value: timeCounter.years },
            { label: "decades", value: timeCounter.decades },
          ].map(({ label, value }) => (
            <div key={label} className="text-center">
              <div className="bg-white/20 rounded-xl p-6 border border-white/30">
                <div className="text-4xl font-bold text-white mb-2">
                  {value}
                </div>
                <div className="text-white/70 text-sm lowercase tracking-wide">
                  {label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimeCounter;
