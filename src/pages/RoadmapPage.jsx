import React, { useState, useEffect } from "react";
import { milestonesData } from "../data/milestonesData";

const RoadmapPage = () => {
  const [visibleItems, setVisibleItems] = useState(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleItems(
              (prev) => new Set([...prev, parseInt(entry.target.dataset.index)])
            );
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    const elements = document.querySelectorAll("[data-timeline-item]");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-4">Our Love Story</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Every step of our journey together, from the very first moment to
            today.
          </p>
        </div>

        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-white/20 transform -translate-x-1/2"></div>

          {/* Timeline Items */}
          <div className="space-y-16">
            {milestonesData.map((milestone, index) => (
              <div
                key={index}
                data-timeline-item
                data-index={index}
                className={`relative transition-all duration-1000 ${
                  visibleItems.has(index)
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2">
                  <div
                    className={`w-6 h-6 rounded-full border-4 border-black transition-all duration-500 ${
                      visibleItems.has(index)
                        ? "bg-white scale-110"
                        : "bg-white/50"
                    }`}
                  ></div>
                </div>

                {/* Content Card - Alternating sides */}
                <div
                  className={`flex ${
                    index % 2 === 0 ? "justify-start" : "justify-end"
                  }`}
                >
                  <div
                    className={`w-full max-w-md ${
                      index % 2 === 0 ? "pr-12" : "pl-12"
                    }`}
                  >
                    <div
                      className={`bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 ${
                        visibleItems.has(index) ? "scale-100" : "scale-95"
                      }`}
                    >
                      <div
                        className={`text-center ${
                          index % 2 === 0 ? "lg:text-left" : "lg:text-right"
                        }`}
                      >
                        <div className="text-4xl mb-4">{milestone.emoji}</div>
                        <h3 className="text-xl font-bold text-white mb-2">
                          {milestone.title}
                        </h3>
                        <p className="text-white/60 text-sm mb-3 font-medium">
                          {milestone.date}
                        </p>
                        <p className="text-white/80 text-sm leading-relaxed">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Connecting Line Animation */}
                <div
                  className={`absolute top-1/2 ${
                    index % 2 === 0 ? "left-1/2" : "right-1/2"
                  } transform -translate-y-1/2 ${
                    index % 2 === 0 ? "translate-x-3" : "-translate-x-3"
                  } transition-all duration-700 ${
                    visibleItems.has(index)
                      ? "w-12 opacity-100"
                      : "w-0 opacity-0"
                  }`}
                >
                  <div className="h-0.5 bg-gradient-to-r from-white/40 to-transparent"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Scroll Indicator */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center space-x-2 text-white/60">
              <span className="text-sm">Scroll to see our journey</span>
              <div className="animate-bounce">
                <div className="w-1 h-8 bg-white/40 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadmapPage;
