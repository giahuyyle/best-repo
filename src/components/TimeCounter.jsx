import React, { useState, useEffect } from "react";

const TimeCounter = () => {
  const [timeCounter, setTimeCounter] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const relationshipStart = new Date();
    relationshipStart.setFullYear(relationshipStart.getFullYear() - 2);
    relationshipStart.setDate(relationshipStart.getDate() + 1);

    const updateCounter = () => {
      const now = new Date();
      const diff = now - relationshipStart;

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeCounter({ days, hours, minutes, seconds });
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
            We've Been Together For
          </h2>
          <p className="text-white/70">Every moment has been worth it</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { label: "Days", value: timeCounter.days },
            { label: "Hours", value: timeCounter.hours },
            { label: "Minutes", value: timeCounter.minutes },
            { label: "Seconds", value: timeCounter.seconds },
          ].map(({ label, value }) => (
            <div key={label} className="text-center">
              <div className="bg-white/20 rounded-xl p-6 border border-white/30">
                <div className="text-4xl font-bold text-white mb-2">
                  {value}
                </div>
                <div className="text-white/70 text-sm uppercase tracking-wide">
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
