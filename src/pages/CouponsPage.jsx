import React from "react";
import { couponsData } from "../data/couponsData";

const CouponsPage = () => {
  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-4">Love Coupons</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Special treats just for you! Redeem these whenever you want to make
            any day extra special.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {couponsData.map((coupon, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-200 group"
            >
              <div className="text-center">
                <div className="text-4xl mb-4">{coupon.emoji}</div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {coupon.title}
                </h3>
                <p className="text-white/70 text-sm mb-4 leading-relaxed">
                  {coupon.description}
                </p>
                <div className="border-t border-white/20 pt-3">
                  <p className="text-white/60 text-xs">{coupon.valid}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CouponsPage;
